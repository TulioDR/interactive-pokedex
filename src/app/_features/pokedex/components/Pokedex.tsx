import PokedexContent from "./PokedexContent";
import { PokedexProvider } from "../context/PokedexContext";

type Props = {
   draggedId: number | null;
};

export default function Pokedex({ draggedId }: Props) {
   return (
      <PokedexProvider>
         <PokedexContent draggedId={draggedId} />
      </PokedexProvider>
   );
}
