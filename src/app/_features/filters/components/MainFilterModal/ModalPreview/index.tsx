import { PokemonCardType } from "@/app/_types/PokemonCardType";
import PreviewCard from "./PreviewCard";

type Props = {
   previewPokemonPool: PokemonCardType[];
};

export default function ModalPreview({ previewPokemonPool }: Props) {
   return (
      <div className="w-96 h-full flex flex-col gap-5 overflow-hidden ">
         <h3 className="text-2xl font-black text-hover h-12 flex items-center">
            Preview
         </h3>
         <div className="w-full flex-1 overflow-y-scroll overscroll-none grid grid-cols-2 gap-2 pr-2 content-start border-y-2 border-outline">
            {previewPokemonPool.map((pokemon) => (
               <PreviewCard key={pokemon.id} pokemon={pokemon} />
            ))}
         </div>
      </div>
   );
}
