import Link from "next/link"
import navstyle from "../src/styles/Nav.module.css"

export default function Nav(){
    return <nav className={navstyle.nav}>
                <figure><img src="/logo.png" alt="logo"></img></figure>
                <ul>
                    <li><Link href='/'>Accueil</Link></li>
                    <li><Link href='/Gallery'>Galerie</Link></li>
                    <li><Link href='/Contacts'>Contacts</Link></li>
                    <li><Link href='/Restaurant'>Restaurant</Link></li>
                </ul>
                
            </nav>
}