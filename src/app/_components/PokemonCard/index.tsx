import { ResolvedValues } from "framer-motion";
import { useState } from "react";
import { PokemonCardType } from "@/app/_types/PokemonCardType";
import CardContainer from "./CardContainer";
import JapaneseName from "./JapaneseName";
import PokemonTypes from "./PokemonTypes";
import CardImage from "./CardImage";
import CardNumber from "./CardNumber";
import CardName from "./CardName";
import getTypeColor from "@/utils/getTypeColor";
import Link from "next/link";

type Props = {
   card: PokemonCardType;
   setDraggedId: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function PokemonCard({ card, setDraggedId }: Props) {
   const [isDragging, setIsDragging] = useState(false);
   const startDrag = () => setIsDragging(true);
   const handleDragEnd = () => setDraggedId(null);
   const handleUpdate = (e: ResolvedValues) => {
      if (e.x === 0 && e.y === 0) setIsDragging(false);
   };

   const onDrag = (_event: any, info: any) => {
      const scanZone = document.querySelector(".scan-target-zone");
      if (!scanZone) return;

      const rect = scanZone.getBoundingClientRect();
      const mouseX = info.point.x - window.scrollX;
      const mouseY = info.point.y - window.scrollY;
      const isInsideX = mouseX >= rect.left && mouseX <= rect.right;
      const isInsideY = mouseY >= rect.top && mouseY <= rect.bottom;
      const isOverScanZone = isInsideX && isInsideY;

      if (isOverScanZone) setDraggedId(card.id);
      else setDraggedId(null);
   };

   return (
      <CardContainer
         onDragStart={startDrag}
         onDragEnd={handleDragEnd}
         onDrag={onDrag}
         handleUpdate={handleUpdate}
         isDragging={isDragging}
      >
         <Link
            href={`/${card.name}`}
            className="absolute inset-0 z-20 xl:hidden pointer-events-auto"
         />

         <div
            style={{ backgroundColor: getTypeColor(card.types[0]) }}
            className="w-full flex-1 flex flex-col"
         >
            <div className="flex flex-col w-full pl-4 pt-3 relative">
               <CardName name={card.name} />
               <CardNumber id={card.id} />
            </div>
            <CardImage alt={card.name} src={card.image} />
         </div>
         <div className="flex flex-col justify-end w-full bg-white rounded-t-4xl -mt-20 relative">
            <PokemonTypes types={card.types} />
            <JapaneseName name={card.original_name} />
         </div>
      </CardContainer>
   );
}
