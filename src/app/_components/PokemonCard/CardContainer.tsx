import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
   children: React.ReactNode;
   onDragStart: () => void;
   onDragEnd: () => void;
   onDrag: (event: any, info: any) => void;
   handleUpdate: (e: any) => void;
   isDragging: boolean;
};

export default function CardContainer({
   children,
   onDragStart,
   onDragEnd,
   onDrag,
   handleUpdate,
   isDragging,
}: Props) {
   const [scope, animate] = useAnimate();
   const [turnAround, setTurnAround] = useState(false);

   useEffect(() => {
      if (turnAround) {
      } else {
      }
   }, [turnAround]);

   return (
      <motion.div
         drag
         onDragStart={onDragStart}
         onDragEnd={onDragEnd}
         onDrag={onDrag}
         onUpdate={handleUpdate}
         dragTransition={{
            power: 0.1, // Reduces the slide-away momentum so it snaps back sooner
            bounceStiffness: 600, // High stiffness makes the snap-back incredibly quick (~0.2s)
            bounceDamping: 32, // High damping completely eliminates overshooting or jiggling
         }}
         dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
         dragElastic={1}
         style={{ perspective: 2000 }}
         className={`aspect-5/7  group relative pointer-events-none xl:pointer-events-auto cursor-grab active:cursor-grabbing ${isDragging ? "z-20" : ""}`}
      >
         <div
            style={{ transformStyle: "preserve-3d" }}
            className="w-full h-full relative group-hover:rotate-y-180 duration-500 ease-in-out"
         >
            <div
               style={{ backfaceVisibility: "hidden" }}
               className="absolute inset-0 flex flex-col items-center border-2 border-white outline outline-outline shadow-md overflow-hidden rounded-xl"
            >
               {children}
            </div>
            <motion.div
               style={{ backfaceVisibility: "hidden", rotateY: "180deg" }}
               className="absolute inset-0 bg-red-700 border-2 border-white outline outline-outline shadow-md overflow-hidden rounded-xl"
            ></motion.div>
         </div>
      </motion.div>
   );
}
