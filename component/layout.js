import styles from "../src/styles/layout.module.css"
import Nav from "./Nav"
import Fouter from "./footer"
import Chatbot from "./chatbot"
export default function Layout({children}){
    return<>
    <div className={styles.Layout}>
        <Nav/>
        <main className={styles.main}>
            {children}
        </main>
        <Fouter/>
    </div>
    </>

}