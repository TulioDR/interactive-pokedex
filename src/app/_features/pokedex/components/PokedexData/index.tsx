import ColorContainer from "./ColorContainer";
import DataHeader from "./DataHeader";
import DataTabs from "./DataTabs";
import DataButtons from "./DataButtons";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import usePokedexContext from "../../context/PokedexContext";

type Props = {
   selectedId: number;
};

export default function PokedexData({ selectedId }: Props) {
   const { pokemon } = usePokedexContext();
   const { allPokemon } = usePokeDbContext();

   const currentPokemon = allPokemon.find((p: any) => p.id === selectedId)!;
   const type = currentPokemon.types[0];

   return (
      <ColorContainer type={type}>
         {pokemon && (
            <div className="flex-1 w-full flex flex-col gap-2 overflow-hidden">
               <DataHeader pokemon={pokemon} />
               <DataTabs pokemon={pokemon} />
               <DataButtons />
            </div>
         )}
      </ColorContainer>
   );
}
