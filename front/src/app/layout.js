import Link from "next/link";
import "./globals.css";
import logo_choppe from "../../public/assets/pictures/logo/logo_choppe.png";
import empire from "../../public/assets/pictures/icon/blasons/empire.png";
import fr from "../../public/assets/pictures/icon/blasons/fr.png";
import drapeau from "../../public/assets/pictures/icon/blasons/drapeau.png";
import Image from "next/image";
import { HOST } from "./host.js";
import { ActiveLink } from "./components/navigation/ActiveLink";

export const metadata = {
  title: "Marchantiq | Achat, Vente et Estimation d’objets anciens",
  description: "Marchantiq est spécialisé dans l’achat, la vente et l’estimation d’objets anciens et de collection. Découvrez nos nouveautés, articles à la une et services aux collectionneurs.",
};

export default async function RootLayout({ children }) {

  const preRes = await fetch(`${HOST}/api/auth/isUserConnected`, {
    // optionnel : pour être sûr d’avoir les données fraîches (cache)
    cache: "no-store",
    credentials: "include",
  });

  const res = await preRes.json();
  const isUserAdmin = res.isUser;

  return (
    <html lang="fr">
      <body className="app">
        <header>
          <div className="header__logo">
            <div className="header__logo__content">
              <Image src={fr} alt="logo fr" width={100} height={101.5} />
              <Image src={empire} alt="logo ger" width={100} height={93} />
              <div>
                <h1><span className="inital-red">M</span><span className="main-title">archantiq</span></h1>
                <p>Achat - Vente - Estimation</p>
              </div>
              <Image src={drapeau} className="drapeau" alt="logo drapeau" width={86} height={124.7} />
            </div>
          </div>
          <div className="header__menu">

            <div className="header__menu__pages">
              <ul>
                <li data-text="Accueil" style={{ width: "90px" }}>
                  <ActiveLink href="/">
                    <span>Accueil</span>
                  </ActiveLink>
                </li>
                <li data-text="Presentation" style={{ width: "98px" }}>
                  <ActiveLink href="/presentation">
                    <span>Presentation</span>
                  </ActiveLink>
                </li>
                <li data-text="Le coin des collectionneurs" style={{ width: "220px" }}>
                  <ActiveLink href="/news">
                    <span>Le coin des collectionneurs</span>
                  </ActiveLink>
                </li>
                <li data-text="Contact" style={{ width: "85px" }}>
                  <ActiveLink href="/contact">
                    <span>Contact</span>
                  </ActiveLink>
                </li>
                <li data-text="Auth" style={{ width: "80px" }}>
                  <ActiveLink href="/auth">
                    <span>Auth</span>
                  </ActiveLink>
                </li>
                {isUserAdmin && <li data-text="Ajouter un objet" style={{ width: "124px" }}>
                  <ActiveLink href="/admin/addItems">
                    <span>Ajouter un objet</span>
                  </ActiveLink>
                </li>
                }
                {/* {state.isConnected && <Link href="/admin/addItems"><li data-text="Ajouter un objet" style={{ width: "124px" }}><span>Ajouter un objet</span></li></Link>}
                {state.isConnected && <i className="fa-solid fa-right-from-bracket" onClick={handleDisconnect} />} */}
              </ul>
              {/* <i className="fa-solid fa-magnifying-glass" onClick={displaySearchBarMenu}></i> */}
            </div>
          </div>

        </header>
        <main>
          {children}
        </main>
        <footer>
          <div className="footerContainer">
            <div className="footerContainer__top">
              <div className="footerContainer__top__left">
                <p><span className="inital-red">M</span><span className="main-title">archantiq</span></p>
              </div>
              <div className="footerContainer__top__right">
                <div className="footerContainer__top__right--category">
                  <p className="description">Informations de contact</p>
                  <ul>
                    <li>Adresse postale</li>
                    <li>Numéro de téléphone: 06 12 36 00 87</li>
                    <li>Adresse e-mail: march.js@orange.fr</li>
                    <Link href="/contact"><li>Contact</li></Link>
                  </ul>
                </div>
                <div className="footerContainer__top__right--category">
                  <p className="description">Liens utiles</p>
                  <ul>
                    <Link href="/presentation"><li>À propos / Qui sommes-nous</li></Link>
                    <Link href="/"><li>Accueil</li></Link>
                    <Link href="/items/furniture"><li>Mobilier</li></Link>
                    <Link href="/news"><li>Le coin des collectionneurs</li></Link>
                  </ul>
                </div>
                <div className="footerContainer__top__right--category">
                  <p className="description">Obligations légales</p>
                  <ul>
                    <li>EDITEUR: Marchais Jean-François</li>
                    <li>HERBERGEUR: o2switch</li>
                    <li>SIRET: EI RCS SIREN 818279408 poitiers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footerContainer__bot"></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
