import { PokemonCardType } from "@/app/_types/PokemonCardType";
import getPokemonId from "@/utils/getPokemonId";
import Image from "next/image";

type Props = {
   pokemon: PokemonCardType;
};

export default function PreviewCard({ pokemon }: Props) {
   return (
      <div className="w-full h-12 flex gap-1 overflow-hidden">
         <div className="h-full aspect-square relative">
            <Image
               src={pokemon.image}
               alt={pokemon.name}
               fill
               sizes="100%"
               className="object-contain"
            />
         </div>
         <div className="h-full flex-1 flex flex-col justify-center overflow-hidden">
            <div className="text-xs opacity-70">{getPokemonId(pokemon.id)}</div>
            <div className="text-sm truncate capitalize">{pokemon.name}</div>
         </div>
      </div>
   );
}
