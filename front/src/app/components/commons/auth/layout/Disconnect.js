"use client";

import { disconnect } from "../../../../services/users";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../context/AuthContext";

export function Disconnect() {
  const router = useRouter();
  const { state, dispatch } = useAuth(); // vient du contexte

  async function handleDisconnect() {
    const res = await disconnect();

    if (res?.ok) {
      // 1. On met à jour le contexte global
      dispatch({ type: "LOGOUT" });

      // 2. Navigation
      router.push("/");
      router.refresh();
    }
  }

  // Si l'utilisateur n'est pas admin / connecté → on n'affiche rien
  if (!state.isAdmin) return null;

  return (
    <i
      className="fa-solid fa-right-from-bracket"
      onClick={handleDisconnect}
    />
  );
}
