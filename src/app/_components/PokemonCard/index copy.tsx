import Image from "next/image";
import { motion, ResolvedValues } from "framer-motion";
import { useState } from "react";

interface PokemonData {
   id: number;
   name: string;
   image: string;
   types: string[];
}

type Props = {
   card: PokemonData;
};

const pokemonTypes = [
   { name: "normal", icon: "radio_button_unchecked", hex: "#A8A77A" },
   { name: "fire", icon: "local_fire_department", hex: "#EE8130" },
   { name: "water", icon: "water_drop", hex: "#6390F0" },
   { name: "electric", icon: "bolt", hex: "#F7D02C" },
   { name: "grass", icon: "eco", hex: "#7AC74C" },
   { name: "ice", icon: "ac_unit", hex: "#96D9D6" },
   { name: "fighting", icon: "fitness_center", hex: "#C22E28" },
   { name: "poison", icon: "biotech", hex: "#A33EA1" },
   { name: "ground", icon: "landscape", hex: "#E2BF65" },
   { name: "flying", icon: "air", hex: "#A98FF3" },
   { name: "psychic", icon: "psychology", hex: "#F95587" },
   { name: "bug", icon: "bug_report", hex: "#A6B91A" },
   { name: "rock", icon: "terrain", hex: "#B6A136" },
   { name: "ghost", icon: "nights_stay", hex: "#735797" },
   { name: "dragon", icon: "auto_awesome", hex: "#6F35FC" },
   { name: "dark", icon: "dark_mode", hex: "#705746" },
   { name: "steel", icon: "build", hex: "#B7B7CE" },
   { name: "fairy", icon: "auto_fix_high", hex: "#D685AD" },
];

export default function PokemonCard({ card }: Props) {
   const [isDragging, setIsDragging] = useState(false);
   const startDrag = () => {
      setIsDragging(true);
   };

   const handleUpdate = (e: ResolvedValues) => {
      if (e.x === 0 && e.y === 0) {
         setIsDragging(false);
      }
   };

   const getColor = (name: string) => {
      return pokemonTypes.find((type) => type.name === name)?.hex;
   };

   return (
      <motion.div
         drag
         onDragStart={startDrag}
         onUpdate={handleUpdate}
         dragTransition={{
            power: 0.1, // Reduces the slide-away momentum so it snaps back sooner
            bounceStiffness: 600, // High stiffness makes the snap-back incredibly quick (~0.2s)
            bounceDamping: 32, // High damping completely eliminates overshooting or jiggling
         }}
         dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
         dragElastic={1}
         style={{ backgroundColor: getColor(card.types[0]) }}
         className={`aspect-5/7 p-2 gap-2 rounded-xl flex flex-col border-2 border-white shadow-xl ${isDragging ? "z-50" : ""}`}
      >
         <div className=" font-black text-xl text-white uppercase pl-1">
            {card.name}
         </div>
         <div
            style={{ borderColor: getColor(card.types[0]) }}
            className="w-full aspect-square bg-white border-4 relative rounded-xl overflow-hidden"
         >
            <div
               style={{
                  clipPath: "circle(80% at 50% 0)",
                  backgroundColor: getColor(card.types[0]),
               }}
               className="absolute inset-0"
            ></div>
            <Image
               src={card.image}
               alt={card.name}
               className="object-contain z-10"
               fill
               sizes="100%"
               draggable={false}
            />
            <div
               style={{ backgroundColor: getColor(card.types[0]) }}
               className="absolute bottom-0 right-0 z-10 pt-1 pl-2 pr-1 rounded-tl-md text-white font-semibold"
            >
               <div className="">№ 000{card.id}</div>
            </div>
         </div>
         <div className="grid grid-cols-2 text-white gap-4 flex-1 w-full p-2">
            {card.types.map((t) => (
               <div
                  key={t}
                  style={{ backgroundColor: getColor(t) }}
                  className="rounded-md border-2 border-white flex items-center justify-center uppercase text-sm font-bold"
               >
                  {t}
               </div>
            ))}
         </div>
      </motion.div>
   );
}
