import useThemeContext from "@/context/ThemeContext";
import { AnimationScope, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onDragStart: () => void;
   onDragEnd: () => void;
   onDrag: (event: any, info: any) => void;
   handleUpdate: (e: any) => void;
   isDragging: boolean;
   index: number;
   scope: AnimationScope<any>;
};

export default function CardContainer({
   children,
   onDragStart,
   onDragEnd,
   onDrag,
   handleUpdate,
   isDragging,
   index,
   scope,
}: Props) {
   const { themeColor } = useThemeContext();

   return (
      <motion.div
         drag
         // layout="position"
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
         // layoutId={`pokemon-card-${index}`}
         style={{ perspective: 2000 }}
         className={`aspect-5/7 relative pointer-events-none xl:pointer-events-auto cursor-grab active:cursor-grabbing ${isDragging ? "z-20" : ""}`}
      >
         <motion.div
            style={{ transformStyle: "preserve-3d" }}
            ref={scope}
            initial={{ rotateY: 180 }}
            animate={{
               rotateY: 0,
               transition: { duration: 0.2, delay: 0.03 * index },
            }}
            className="w-full h-full relative"
         >
            <div
               style={{ backfaceVisibility: "hidden" }}
               className="absolute inset-0 flex flex-col items-center border-2 border-white outline outline-outline shadow-md overflow-hidden rounded-xl"
            >
               {children}
            </div>
            <motion.div
               style={{
                  backfaceVisibility: "hidden",
                  rotateY: "180deg",
                  backgroundColor: themeColor,
               }}
               className="absolute inset-0 border-2 border-white outline outline-outline shadow-md overflow-hidden rounded-xl flex items-center justify-center"
            >
               <div className="w-3/5 aspect-square border-4 border-white rounded-full flex items-center overflow-hidden">
                  <div className="h-1 flex-2 bg-white" />
                  <div className="aspect-square flex-3 rounded-full border-4 border-white" />
                  <div className="h-1 flex-2 bg-white" />
               </div>
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
