import { getItems } from "../../services/items";
import {Carrousel} from "./Carrousel";

export async function ShowCase_items() {
  const res = await getItems();
  const items = res.items.filter((i) => i.isNew === 1);

  if(items.length===0) return null;

  return (
    <div className="showCaseItems">
      <div className="box">
        <h2>Nouveautés</h2>
        <Carrousel items={items} />
      </div>
    </div>
  );
}
