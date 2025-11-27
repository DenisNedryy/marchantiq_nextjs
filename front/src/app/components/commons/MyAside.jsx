"use client"

import etendard_button from "../../../../public/assets/pictures/photos/etendard_button.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import blason_1 from "../../../../public/assets/pictures/icon/blasons/blason_1.png";
import blason_2 from "../../../../public/assets/pictures/icon/blasons/blason_2.png";
import blason_3 from "../../../../public/assets/pictures/icon/blasons/blason_3.png";
import blason_4 from "../../../../public/assets/pictures/icon/blasons/blason_4.png";
import blason_5 from "../../../../public/assets/pictures/icon/blasons/blason_5.png";
import blason_6 from "../../../../public/assets/pictures/icon/blasons/blason_6.png";
import blason_7 from "../../../../public/assets/pictures/icon/blasons/blason_7.png";
import blason_8 from "../../../../public/assets/pictures/icon/blasons/blason_8.png";
import horloge from "../../../../public/assets/pictures/logo/horloge.png";
import { useWindowSize } from "../../hooks/useWindowSize";

export function MyAside() {

    const [isMobile, setIsMobile] = useState(false);
    const [isMobileCategories, setIsMobileCategories] = useState(true);
    const { width } = useWindowSize();

    function toggleCategoriesMini() {
        setIsMobileCategories(!isMobileCategories);
    }

    useEffect(() => {
        if (width <= 1067) {
            setIsMobile(true)
        } else {
            setIsMobile(false);
        }
    }, []);

    return (
        <>
            <div className="categories__miniMenu" onClick={toggleCategoriesMini}>
                <img src="/assets/pictures/photos/etendard_button.png" alt="etendard" />
                <p>C</p>
            </div>
            <div className={`categories${!isMobileCategories ? " open" : ""}`}>

                <div className="categories__inner">
                    {!isMobile && <h2>Categories</h2>}
                    <ul>
                        <Link href="/items/furniture"  ><li> <Image src={blason_1} alt={"logo blason mobilier"} width={30} height={30} /> <p>Mobilier</p></li></Link>
                        <Link href="/items/knick-knacks" ><li>  <Image src={blason_2} alt={"logo blason bibelots"} width={30} height={30} /> <p>Bibelots</p></li></Link>
                        <Link href="/items/militaria" ><li>  <Image src={blason_3} alt={"logo blason militaire"} width={30} height={30} /> <p>Militaria</p></li></Link>
                        <Link href="/items/books" ><li>  <Image src={blason_4} alt={"logo blason livres"} width={30} height={30} /><p>Livres</p></li></Link>
                        <Link href="/items/numismatics"><li> <Image src={blason_5} alt={"logo blason numismatique"} width={30} height={30} /><p>Numismatiques</p></li></Link>
                        <Link href="/items/paintings" ><li> <Image src={blason_6} alt={"logo blason tableaux"} width={30} height={30} /><p>Tableaux</p></li></Link>
                        <Link href="/items/postcards" ><li> <Image src={blason_7} alt={"logo blason cartes postales"} width={30} height={30} /><p>Cartes postales</p></li></Link>
                        <Link href="/items/miscellaneous" ><li> <Image src={blason_8} alt={"logo blason divers"} width={30} height={30} /><p>Divers</p></li></Link>
                    </ul>
                </div>
                {!isMobileCategories && <Image src={horloge} alt={horloge} width={273} className="horloge" />}
            </div>
        </>
    );
}