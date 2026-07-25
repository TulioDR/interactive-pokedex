import Image from "next/image";
import usePokedexContext from "../../../context/PokedexContext";
import LoadingSpinner from "../../LoadingSpinner";

type Props = {};

export default function SubScreen({}: Props) {
   const { pokemon, loading } = usePokedexContext();
   const selectedId = true;

   return (
      <div
         className={`border-4 border-black bg-[#51AD60] min-w-24 duration-200 flex items-center justify-center p-1 flex-1 h-full overflow-hidden ${
            !!selectedId ? "brightness-100" : "brightness-50"
         }`}
      >
         <div className="w-full h-full relative flex items-center justify-center">
            {loading && <LoadingSpinner />}
            {pokemon && (
               <Image
                  key={pokemon.id}
                  src={pokemon.sprites.front_default}
                  alt="sprite"
                  fill
                  sizes="100%"
                  className="object-contain"
               />
            )}
         </div>
      </div>
   );
}
