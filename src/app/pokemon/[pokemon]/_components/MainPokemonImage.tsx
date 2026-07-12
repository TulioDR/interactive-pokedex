import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import Image from "next/image";

type Props = {
   pokemon: CompletePokemonType;
};

export default function MainPokemonImage({ pokemon }: Props) {
   return (
      <div className="flex-1 bg-green-500">
         <div className="w-full aspect-square relative">
            <Image
               src={
                  pokemon.base.sprites.other?.["official-artwork"]
                     ?.front_default
               }
               alt={pokemon.base.name}
               fill
               sizes="100%"
               className="object-contain"
            />
         </div>
      </div>
   );
}
