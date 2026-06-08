import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import SubScreenAnimation from "./SubScreenAnimation";
import usePokedexContext from "@/app/_context/PokedexContext";

type Props = {};

export default function SubScreen({}: Props) {
   const { pokemon } = usePokedexContext();

   return (
      <div
         className={`border-4 border-black bg-[#51AD60] duration-200 aspect-square flex-2 relative overflow-hidden ${
            pokemon ? "brightness-100" : "brightness-50"
         }`}
      >
         <AnimatePresence>
            {pokemon ? (
               /* 🌟 FIX: Fallback to a hardcoded string if id is missing during unmount so Framer never loses track! */
               <SubScreenAnimation key={pokemon.base?.id || "empty-slate"}>
                  <Image
                     src={pokemon.base.sprites.front_default}
                     alt="sprite"
                     fill
                     sizes="100%"
                     className="object-cover"
                  />
               </SubScreenAnimation>
            ) : null}
         </AnimatePresence>
      </div>
   );
}
