// export const metadata = {
//     title: "Marchantiq - Connexion & Inscription",
//     description: "Accédez à votre espace Marchantiq : connectez-vous ou créez un compte pour gérer vos informations, contacter le propriétaire et suivre vos articles favoris.",
// };

"use client";

import SignUp from "../components/commons/auth/SignUp";
import LogIn from "../components/commons/auth/LogIn";
import { useState } from "react";


export default function Auth() {

    const [auth, setAuth] = useState(true);


    function toggleAuth() {
        setAuth((prevState) => !prevState);
    }
    return (
        <div className="auth">
            <div className="box">
                {auth ? (
                    <LogIn onUpdateAuthState={toggleAuth} />
                ) : (
                    <SignUp onUpdateAuthState={toggleAuth} />
                )}
            </div>
        </div>
    );
}