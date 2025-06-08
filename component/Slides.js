import styleslide from '../src/styles/slide.module.css'
import { useState ,useEffect} from 'react'
export default function ImageSlider (props){
    const [current,setcurrent]=useState(0)
    const slidenext =()=>{
        setcurrent((prev)=>(prev+1)%props.slides.length)
    };
    const slideback = ()=>{
        setcurrent((prev)=>(prev-1 +props.slides.length)%props.slides.length)
    }
    useEffect(() => {
        const interval = setInterval(slidenext, 5000); // 5000 ms = 5 sec
        return () => clearInterval(interval); // Nettoyage à la fin
      }, [props.slides.length,current]);
    function selectslide(i){
        setcurrent(i)
        
    }
    
   return <>
   <div className={styleslide.content}>
    <button className={styleslide.left} onClick={slideback}>◀</button>
    <img src={props.slides[current]} alt={`slide ${current+1}`} width={1200} height={740}></img>
    <ul>{props.slides.map((_,idx)=>(<li key={idx}><button className={`${styleslide.selector} ${current === idx ? styleslide.selectora : ""}`} onClick={()=>selectslide(idx)}></button></li>))}</ul>
    <button className={styleslide.right} onClick={slidenext}>▶</button>
   </div>
   </>

}
