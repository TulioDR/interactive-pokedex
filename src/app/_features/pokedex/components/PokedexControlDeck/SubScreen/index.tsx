import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import SubScreenAnimation from "./SubScreenAnimation";
import usePokedexContext from "../../../context/PokedexContext";

type Props = {};

export default function SubScreen({}: Props) {
   const { pokemon } = usePokedexContext();

   return (
      <div
         className={`border-4 border-black bg-[#51AD60] duration-200 py-1 flex-1 h-full relative overflow-hidden ${
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
