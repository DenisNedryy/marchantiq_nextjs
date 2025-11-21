"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isUserConnected } from "../../../../services/users";
import { ActiveLink } from "../../../navigation/ActiveLink";

export function AddItems() {
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const pathname = usePathname();

  async function askIfAdmin() {
    const res = await isUserConnected();
    const isAdmin = res?.ok && res.data?.isUser; // adapte si tu as isAdmin côté back
    setIsUserAdmin(!!isAdmin);
  }

  useEffect(() => {
    askIfAdmin();        // ⬅️ s’exécute à chaque changement d’URL
  }, [pathname]);

  return (
    <>
      {isUserAdmin && (
        <li data-text="Ajouter un objet" style={{ width: "124px" }}>
          <ActiveLink href="/admin/addItems">
            <span>Ajouter un objet</span>
          </ActiveLink>
        </li>
      )}
    </>
  );
}
