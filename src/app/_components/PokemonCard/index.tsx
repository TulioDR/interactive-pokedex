import Image from "next/image";
import { motion, ResolvedValues } from "framer-motion";
import { useState } from "react";
import CardType from "@/app/_types/CardType";

type Props = {
   card: CardType;
   setDraggedId: React.Dispatch<React.SetStateAction<number | null>>;
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

export default function PokemonCard({ card, setDraggedId }: Props) {
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

   const onDrag = (_event: any, info: any) => {
      const scanZone = document.querySelector(".scan-target-zone");
      if (!scanZone) return;

      const rect = scanZone.getBoundingClientRect();

      // 🌟 THE SAFE FIX: Take page coordinates and subtract the current browser scroll position
      // This converts page pixels into exact viewport pixels safely on any version of Framer Motion!
      const mouseX = info.point.x - window.scrollX;
      const mouseY = info.point.y - window.scrollY;

      const isInsideX = mouseX >= rect.left && mouseX <= rect.right;
      const isInsideY = mouseY >= rect.top && mouseY <= rect.bottom;
      const isOverScanZone = isInsideX && isInsideY;

      if (isOverScanZone) {
         setDraggedId(card.id);
      } else {
         setDraggedId(null);
      }
   };
   const handleDragEnd = () => {
      setDraggedId(null);
   };

   return (
      <motion.div
         drag
         onDragStart={startDrag}
         onDragEnd={handleDragEnd}
         onDrag={onDrag}
         onUpdate={handleUpdate}
         dragTransition={{
            power: 0.1, // Reduces the slide-away momentum so it snaps back sooner
            bounceStiffness: 600, // High stiffness makes the snap-back incredibly quick (~0.2s)
            bounceDamping: 32, // High damping completely eliminates overshooting or jiggling
         }}
         dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
         dragElastic={1}
         style={{ backgroundColor: getColor(card.types[0]) }}
         className={`aspect-5/7 rounded-xl flex flex-col items-center border-2 border-white shadow-md overflow-hidden ${isDragging ? "z-20" : ""}`}
      >
         <div className="flex flex-col w-full pl-4 pt-3 relative">
            <div className=" font-black text-lg text-white uppercase w-full tracking-wider">
               {card.name}
            </div>
            <div
               style={{ backgroundColor: getColor(card.types[0]) }}
               className="z-10 text-white absolute top-full left-4 font-semibold text-xs"
            >
               <div className="">№ {String(card.id).padStart(4, "0")}</div>
            </div>
         </div>
         <div className="w-full relative flex-1 overflow-hidden p-8 -mt-8">
            <div className="w-full h-full relative">
               <Image
                  src={card.image}
                  alt={card.name}
                  className="object-contain z-10"
                  fill
                  sizes="100%"
                  draggable={false}
               />
            </div>
         </div>
         <div className="flex flex-col justify-end w-full bg-white rounded-t-4xl -mt-20 relative">
            <div className="grid grid-cols-2 gap-2 w-full h-full px-2 py-10">
               {card.types.map((t) => (
                  <div
                     key={t}
                     style={{ backgroundColor: getColor(t) }}
                     className="rounded-md text-white flex items-center justify-center uppercase text-sm font-bold py-4"
                  >
                     {t}
                  </div>
               ))}
            </div>
            <div className="text-black/40 text-center flex items-center justify-center text-2xl font-black absolute bottom-0 left-0 w-full h-10">
               <span>{card.original_name}</span>
            </div>
         </div>
      </motion.div>
   );
}
