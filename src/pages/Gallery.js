import ImageSlider from "../../component/Slides"
import { useState, useEffect } from "react";
import "../styles/Gallery.css"

const staticSlides = [
"slides/slide1.jpg",
"slides/slide2.jpg",
"slides/slide3.jpg",
"slides/slide4.jpg",
"slides/slide5.jpg",
"slides/slide6.jpg"
];

export default function Gallery() {
  const [gallery, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/gallery');
      const data = await response.json();
      setImages(data);
    };
 
    fetchImages();
  }, []);
  const [pic,setpic]= useState("")
  const [displayed,setdisplay]=useState(false)
  function displaypic(id){
    setdisplay(true)
    setpic(gallery[id])

  }
  function nextpic (){
    const currentidx= gallery.indexOf(pic)
  if (currentidx<gallery.length-1)
    setpic(gallery[ currentidx+1])
  else{
    setpic(gallery[0])
    
  }

  }
  function backpic (){
    const currentidx= gallery.indexOf(pic)
    if(currentidx>0)
      setpic(gallery[gallery.indexOf(pic)-1])
    else{
      setpic(gallery[gallery.length-1])
    }


  }

  return (
    <>
      <ImageSlider slides={staticSlides} />
      <div className="gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' , marginTop: "30px", backgroundColor :" rgb(22, 77, 131)", padding:"10px",borderRadius:"15px", justifyContent: "space-evenly"
      }}>
        {gallery.map((image, idx) => (
          <figure key={idx}>
            <img 
              src={`/images/${image}`}
              alt={`Gallery image ${idx}`}
              width={315}
              onClick={()=>displaypic(idx)}
              height={200}
              style={{ objectFit: 'cover' ,cursor:"pointer",borderRadius:"5px",border:"rgb(255, 255, 255) solid 4px"}}
            />
          </figure>
        ))}
        <div className={`displayimg  ${displayed===false? "nodisplay":""}` }> <figure> <img src={`/images/${pic}`} ></img></figure>
              <button className="closeimg" onClick={()=>setdisplay(false)}>❌</button>
              <button className="nextimg" onClick={()=>backpic()}>◀</button>
              <button className="backimg" onClick={()=>nextpic()}>▶</button>

        </div>
      </div>
    </>
  );
}
