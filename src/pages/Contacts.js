import { useState } from "react";
import "../styles/Contact.css"
export default function Contact(){
  const [response,setResponse] = useState("")
    const [formData,setformData]=useState({name:"",email:"",tel:"",message:"",sujet:""})
    async function handleSubmit(e){
      e.preventDefault();
      const res = await fetch('/api/contactapi',{
        method : "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),

      });
      const data = await res.json();
      setResponse(data.message);
      }

    
    
    function handleChange(event){
        const {name,value}= event.target;
        setformData((newform)=>({...newform,[name]:value}))

    }
    return(
    <><h1 className="hcontact">Contactez-nous</h1>
    <div className="contact">
      
      <form method="post" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Nom complet:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>
        
        <div>
        <label htmlFor="email">E-mail :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <div>
            <label htmlFor="tel">Telephone :</label>
            <input 
              type="tel"
              id="tel"              
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              required></input>
        </div>
        <div>
            <label htmlFor="sujet">Sujet :</label>
            <input 
              type="text"
              id="sujet"              
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              required></input>
        </div>
        <div>
        
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          rows={10}
          value={formData.message}
          onChange={handleChange}
          required
        />
        </div>        
        <button type="submit">Envoyer</button>
        <p>{response}</p>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1060822013965!2d-5.438484199999999!3d33.80957540000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda0490002d7e71f%3A0xefe70245f66e339b!2sCaf%C3%A9%20et%20piscine!5e0!3m2!1sfr!2sma!4v1746155352885!5m2!1sfr!2sma"
        width="700"
        height="650"
        allowFullScreen=""
        loading="lazy">
        </iframe>

    </div></>
  );
};

