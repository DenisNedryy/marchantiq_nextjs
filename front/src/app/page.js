import { ShowCase_articles } from "./components/commons/ShowCase_articles";
import { ShowCase_items } from "./components/commons/ShowCase_items";
import { Flyers } from "./components/commons/Flyers";

export const metadata = {
  title: "Marchantiq - Accueil | Nouveautés et Sélection d’Articles",
  description: "Bienvenue sur Marchantiq : découvrez les nouveautés, les articles mis en avant et une sélection unique d’objets anciens et authentiques.",
};

export default function Home() {
  return (
    <>
      <div className="accueil">
        <ShowCase_articles />
        <ShowCase_items />
        <Flyers />
      </div>
    </>
  );
}
