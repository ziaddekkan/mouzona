import "../styles/acceuil.css"
import ImageSlider from "../../component/Slides";
import ScrollToTopButton from "../../component/scrolltop";
import Chatbot from "../../component/chatbot";

export default function Home() {

  return (<>
    <div className="acceuil">
      
      <section className="presentation">
      <h1>Bienvenu chez Mouzona</h1>
            <p>Bienvenue à Mouzona, une ferme d’hôte authentique où confort, nature et convivialité se rencontrent pour <br/>
            vous offrir une expérience inoubliable. Située dans un cadre paisible, loin de l’agitation de la ville, Mouzona<br/>
            est l’endroit idéal pour se détendre, se ressourcer et profiter de moments uniques en famille ou entre amis.</p>
            <figure><video src="trailer.mp4" controls height={640} width={450}></video></figure>
      </section>
      <section className="service"> 
        <figure>
          <img src="/piscine.jpg" alt="piscine" width={450}></img>
        </figure>
        <div>
          <h2>Piscine extérieure</h2>
          <p>Profitez de notre piscine à ciel ouvert, entourée<br/> de verdure. Que ce soit pour une baignade rafraîchissante<br/>
           ou un moment de détente au soleil, notre espace aquatique <br/>est parfait pour petits et grands.</p>
        </div>

      </section>
      <section className="service"> 
        <figure>
          <img src="/food.jpg" alt="food" width={450}></img>
        </figure>
        <div>
          <h2>Café-Restaurant</h2>
          <p>Dégustez des plats faits maison dans notre café-restaurant<br/>chaleureux. Nous proposons une cuisine locale, bio et savoureuse<br/>
          avec des produits issus en grande partie de notre propre ferme. </p>
        </div>
      </section>
      <section className="service"> 
        <figure>
          <img src="/soireejpg.jpg" alt="food" width={450} height={450}></img>
        </figure>
        <div>
          <h2>Soirées Traditionnelles à Mouzouna</h2>
          <p>Nos soirées traditionnelles sont l’occasion de découvrir <br/>
          la richesse de la culture marocaine, dans un cadre chaleureux  et naturel.<br/> 
          Une véritable immersion dans les traditions rurales, parfaite pour les familles,<br/> 
          les groupes d’amis, ou les voyageurs en quête d’authenticité. </p>
        </div>
      </section>
      
            <Chatbot></Chatbot>
             <ScrollToTopButton></ScrollToTopButton>
 
      
    </div>
    </>
  );
}
