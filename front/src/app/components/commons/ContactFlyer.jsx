"use client";


import flyer_decoupe_1 from "../../../../public/assets/pictures/photos/flyer_decoupe_1.png";
import flyer_decoupe_2 from "../../../../public/assets/pictures/photos/flyer_decoupe_2.png";
import flyer_decoupe_3 from "../../../../public/assets/pictures/photos/flyer_decoupe_3.png";
import flyer_decoupe_4 from "../../../../public/assets/pictures/photos/flyer_decoupe_4.png";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function ContactFlyer() {

    const fly1Ref = useRef(null);
    const fly2Ref = useRef(null);
    const fly3Ref = useRef(null);
    const fly4Ref = useRef(null);
    const contactCoordRef = useRef(null);

    function handleHover() {
        fly1Ref.current.style.transform = "translateX(-50px)";
        fly2Ref.current.style.transform = "translateX(50px)";
        fly3Ref.current.style.transform = "translateX(-50px)";
        fly4Ref.current.style.transform = "translateX(50px)";

        setTimeout(() => {
            fly4Ref.current.style.transform = "translateX(0px) translateY(-200px) scale(2)";
        }, [300]);
    }

    function handleHoverBack() {
        setTimeout(() => {
            fly1Ref.current.style.transform = "translateX(0px)";
            fly2Ref.current.style.transform = "translateX(0px)";
            fly3Ref.current.style.transform = "translateX(0px)";
            fly4Ref.current.style.transform = "translateX(0px)";
        }, [300]);
        fly4Ref.current.style.transform = "translateX(50px) translateY(-0px) scale(1)";
    }


    return (
        <>
            <div className="contact__coordonées__flyer" onMouseEnter={handleHover} onMouseLeave={handleHoverBack}>
                <Image src={flyer_decoupe_1} ref={fly1Ref} alt={"part 1 flyer"} />
                <Image src={flyer_decoupe_2} ref={fly2Ref} alt={"part 2 flyer"} />
                <Image src={flyer_decoupe_3} ref={fly3Ref} alt={"part 3 flyer"} />
                <Image src={flyer_decoupe_4} ref={fly4Ref} alt={"part 4 flyer"} />
            </div>
        </>
    );
}