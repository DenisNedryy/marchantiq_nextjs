"use client"

import { ActiveLink } from "../navigation/ActiveLink";
import { AddItems } from "../commons/auth/layout/AddItems";
import { Disconnect } from "../commons/auth/layout/Disconnect";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { SearchBarHeader } from "../forms/SearchBarHeader";

export function HeaderMenu() {

    const [searchBarContent, setSearchBarContent] = useState(); // input searched
    const [searchBarMenuState, setSearchBarMenuState] = useState(false); // open/close state
    const searchBarMenuRef = useRef(null);
    const router = useRouter();

    function displaySearchBarMenu() {
        searchBarMenuRef.current.style.animationName = `${searchBarMenuState ? "remonteAuCiel" : "descendDuCiel"}`;
        setSearchBarMenuState(!searchBarMenuState);
    }

    function hideSearchBarMenu() {
        displaySearchBarMenu();
    }

    useEffect(() => {
        if (!searchBarContent) return;
        router.push(`/items/searchedItems/${searchBarContent}`);
    }, [searchBarContent, router]);

    return (
        <>
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
                        <AddItems />
                        <Disconnect />
                    </ul>
                    <i className="fa-solid fa-magnifying-glass" onClick={displaySearchBarMenu}></i>


                </div>

            </div>
            <div className="header__searchBar" ref={searchBarMenuRef}>
                < SearchBarHeader onUpdate={setSearchBarContent} closeSearchBarMenu={hideSearchBarMenu} />
            </div>
        </>
    );
}