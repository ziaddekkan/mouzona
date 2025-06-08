import fstyles from "../src/styles/footer.module.css"
export default function Fouter(){
    return <>
    <div className={fstyles.foot}>
        
            <section>
                <h3>📞 Contact & Réservations:</h3>        
                <h4>📧 Email : contact@mouzona-ferme.com</h4>
                <h4>📱 Téléphone : +212 6 00 00 00 00</h4>
                <h4>📍 Adresse : <a href="https://maps.app.goo.gl/TouyaK9fbQ3NseHw5?g_st=com.google.maps.preview.copy&fbclid=PAZXh0bgNhZW0CMTEAAaeMd_C4hDZideZCK4lxuCvbXVc-vUwrBEtS2TjeJjzRjnYZkW--9CTRoCP-Pw_aem_7Gx5UgBrtM7gTQQtzT1-9w." target="_">ferme d'hote mouzona</a></h4>
            </section>  
            <section>
                <h3>nos social media :</h3>
                <ul>
                    <li><a href="https://www.instagram.com/mouzouna.officiel/" target="_"><img src="instagram.png" width={60} ></img></a></li>
                    <li><a href="https://www.tiktok.com/@mouzouna.officiel" target="_"><img src="tiktok.png" width={60}></img></a></li>
                    <li><a href="#"><img src="facebook.png" target="_" width={60} ></img></a></li>
                    
                </ul>

            </section>

    </div>
    </>
}