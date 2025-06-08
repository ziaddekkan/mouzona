import "../styles/Restau.css"
export default function Restaurant(){
    const plats = [{
        Nom : "tagine",
        image : "plat1.jpg",
        description : "Un plat traditionnel mijoté aux saveurs riches et épicées, préparé lentement dans un plat en terre cuite. Nos tajines sont garnis de légumes du jardin, de viandes locales et d'épices parfumées, pour une expérience authentique du terroir marocain."        
       },
      {Nom : "Cocktail",
       image : "plat2.png",
       description : "Des boissons fraîches et colorées, idéales pour se détendre. Nos cocktails maison, sont préparés à base de fruits de saison, d’herbes fraîches et d’ingrédients naturels cultivés à la ferme"
      },
        {
            Nom: "Fast-Food",
            image: "plat3.jpg",
            description: "Une version gourmande et locale du fast-food, revisitée avec des produits frais : burgers fermiers, sandwiches faits maison, frites de pommes de terre du jardin, le tout servi rapidement mais avec qualité."       
        }]
        console.log(plats)
    return <div className="Restaurant ">
                    <div className="rPresentation">
                        <h1>Restaurant</h1>

                        <p>Dans notre ferme d’hôte Mouzouna, la table est un lieu de partage et de saveurs authentiques.<br/> Nous cuisinons avec amour des produits frais issus de notre potager ou de producteurs locaux</p>
                    </div>
                    <div className="plats">
                        {plats.map((plat,idx)=>(<section key={idx} className="plat">
                            <h2> {plat.Nom} </h2>
                            <figure><img width={"90%"} height={300} src={`Restaurant/${plat.image}`}></img></figure>
                            <p>{plat.description}</p>

                        </section>))}
                        
                    </div>
                    <div className="menu">
                        <h1>Notre menu</h1>
                        <figure> <img src="menu.jpg" alt="menu"  width={"60%"}></img> <figcaption>menu</figcaption></figure>
                    </div>
                </div>     
}