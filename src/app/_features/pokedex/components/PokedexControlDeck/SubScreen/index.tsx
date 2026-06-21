import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import SubScreenAnimation from "./SubScreenAnimation";
import usePokedexContext from "../../../context/PokedexContext";

type Props = {};

export default function SubScreen({}: Props) {
   const { pokemon } = usePokedexContext();

   return (
      <div
         className={`border-4 shrink-0 border-black bg-[#51AD60] duration-200 aspect-square flex-2 relative overflow-hidden ${
            !!pokemon ? "brightness-100" : "brightness-50"
         }`}
      >
         <AnimatePresence>
            {pokemon && (
               <SubScreenAnimation key={pokemon.base.id}>
                  <Image
                     src={pokemon.base.sprites.front_default}
                     alt="sprite"
                     fill
                     sizes="100%"
                     className="object-cover"
                  />
               </SubScreenAnimation>
            )}
         </AnimatePresence>
      </div>
   );
}
