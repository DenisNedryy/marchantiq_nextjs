"use client"

import { useEffect, useState } from "react";
import { isUserConnected, disconnect } from "../../../../services/users";
import { useRouter } from "next/navigation";

export function Disconnect() {

    const [isUserAdmin, setIsUserAdmin] = useState(false);
    const router = useRouter();

    async function askIfAdmin() {
        const res = await isUserConnected();
        const isUserAdmin = await res.data.isUser;
        console.log(isUserAdmin);
        setIsUserAdmin(isUserAdmin);
    }

    async function handleDisconnect() {
        const res = await disconnect();

        if (res?.ok) {
            setIsUserAdmin(false);  // ⬅️ update immédiate
            router.refresh();
            router.push('/');
        }
    }




    // async function handleDisconnect() {
    //     await disconnect();
    //     router.refresh();   // ⬅️ met à jour l'app sans reload manuel
    //     router.push('/');
    // }



    useEffect(() => {
        askIfAdmin();
    }, []);



    return (
        <>
            {isUserAdmin && <i className="fa-solid fa-right-from-bracket" onClick={handleDisconnect} />}
        </>
    );
}

