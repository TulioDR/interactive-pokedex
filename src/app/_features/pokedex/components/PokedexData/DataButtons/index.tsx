import { useRouter } from "next/navigation";
import usePokedexContext from "../../../context/PokedexContext";
import NavigationButton from "./NavigationButton";
import PreviewButton from "./PreviewButton";

type Props = {};

export default function DataButtons({}: Props) {
   const {
      activePad,
      nextPokemon,
      prevPokemon,
      getNextPokemon,
      getPrevPokemon,
      pokemon,
   } = usePokedexContext();

   const router = useRouter();
   const goToPokemon = () => {
      router.push(`/pokemon/${pokemon?.base.name}`);
   };

   return (
      <>
         <div className="rounded-full w-full flex gap-2 p-2">
            <PreviewButton
               icon="favorite"
               text="Add to favorite"
               favorite
               isActive={activePad === "favorite"}
               onClick={() => {}}
            />
            <PreviewButton
               icon="arrow_outward"
               text="Full page"
               isActive={activePad === "open"}
               onClick={goToPokemon}
            />
         </div>
         <div className="h-11 bg-white flex justify-between border-t-2 border-white">
            <NavigationButton
               reverse
               pokemon={prevPokemon}
               isActive={activePad === "prev"}
               onClick={getPrevPokemon}
            />
            <NavigationButton
               pokemon={nextPokemon}
               isActive={activePad === "next"}
               onClick={getNextPokemon}
            />
         </div>
      </>
   );
}
