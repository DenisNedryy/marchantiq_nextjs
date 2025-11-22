import Link from "next/link";
import "./globals.css";
import logo_choppe from "../../public/assets/pictures/logo/logo_choppe.png";
import empire from "../../public/assets/pictures/icon/blasons/empire.png";
import fr from "../../public/assets/pictures/icon/blasons/fr.png";
import drapeau from "../../public/assets/pictures/icon/blasons/drapeau.png";
import Image from "next/image";
import { HOST } from "./host.js";
import { ActiveLink } from "./components/navigation/ActiveLink";
import { AddItems } from "./components/commons/auth/layout/AddItems";
import { Disconnect } from "./components/commons/auth/layout/Disconnect";
import { Providers } from "./Providers";
import { HeaderMenu } from "./components/commons/HeaderMenu";

import blason_1 from "../../public/assets/pictures/icon/blasons/blason_1.png";
import blason_2 from "../../public/assets/pictures/icon/blasons/blason_2.png";
import blason_3 from "../../public/assets/pictures/icon/blasons/blason_3.png";
import blason_4 from "../../public/assets/pictures/icon/blasons/blason_4.png";
import blason_5 from "../../public/assets/pictures/icon/blasons/blason_5.png";
import blason_6 from "../../public/assets/pictures/icon/blasons/blason_6.png";
import blason_7 from "../../public/assets/pictures/icon/blasons/blason_7.png";
import blason_8 from "../../public/assets/pictures/icon/blasons/blason_8.png";
import etendard_button from "../../public/assets/pictures/photos/etendard_button.png";
import horloge from "../../public/assets/pictures/logo/horloge.png";

export const metadata = {
  title: "Marchantiq | Achat, Vente et Estimation d’objets anciens",
  description: "Marchantiq est spécialisé dans l’achat, la vente et l’estimation d’objets anciens et de collection. Découvrez nos nouveautés, articles à la une et services aux collectionneurs.",
};

export default async function RootLayout({ children }) {


  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="app">
        <Providers>
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
            <HeaderMenu />
          </header>
          <main>
            <div className="categories">

              <div className="categories__inner">
                <h2>Categories</h2>
                <ul>
                  <Link href="/items/furniture"  ><li> <Image src={blason_1} alt={"logo blason"} width={34.8} height={34.9} /> <p>Mobilier</p></li></Link>
                  <Link href="/items/knick-knacks" ><li>  <Image src={blason_2} alt={"logo blason"} width={34.8} height={34.9} /> <p>Bibelots</p></li></Link>
                  <Link href="/items/militaria" ><li>  <Image src={blason_3} alt={"logo blason"} width={34.8} height={34.9} /> <p>Militaria</p></li></Link>
                  <Link href="/items/books" ><li>  <Image src={blason_4} alt={"logo blason"} width={34.8} height={34.9} /><p>Livres</p></li></Link>
                  <Link href="/items/numismatics"><li> <Image src={blason_5} alt={"logo blason"} width={34.8} height={34.9} /><p>Numismatiques</p></li></Link>
                  <Link href="/items/paintings" ><li> <Image src={blason_6} alt={"logo blason"} width={34.8} height={34.9} /><p>Tableaux</p></li></Link>
                  <Link href="/items/postcards" ><li> <Image src={blason_7} alt={"logo blason"} width={34.8} height={34.9} /><p>Cartes postales</p></li></Link>
                  <Link href="/items/miscellaneous" ><li> <Image src={blason_8} alt={"logo blason"} width={34.8} height={34.9} /><p>Divers</p></li></Link>
                </ul>
              </div>
              <Image src={horloge} alt={horloge} width={273} className="horloge" />
            </div>
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
        </Providers>
      </body>
    </html>
  );
}
