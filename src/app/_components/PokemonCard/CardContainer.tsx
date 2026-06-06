import { motion } from "framer-motion";

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
         className={`aspect-5/7 rounded-xl cursor-grab active:cursor-grabbing flex flex-col items-center border-2 border-white outline outline-outline shadow-md overflow-hidden ${isDragging ? "z-20" : ""}`}
      >
         {children}
      </motion.div>
   );
}
