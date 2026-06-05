import { motion } from "framer-motion";
type Props = {
   onAnimationComplete: (e: any) => void;
};

export default function ScanAnimation({ onAnimationComplete }: Props) {
   return (
      <motion.div
         initial={{ scaleX: 0 }}
         animate={{ scaleX: 1, transition: { duration: 1 } }}
         exit={{ opacity: 0, transition: { duration: 0.2 } }}
         onAnimationComplete={onAnimationComplete}
         className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent to-white origin-left z-10"
      />
   );
}
