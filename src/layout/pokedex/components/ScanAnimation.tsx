import { motion } from "framer-motion";
type Props = {
  onComplete: () => void;
};

export default function ScanAnimation({ onComplete }: Props) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
          onComplete: onComplete,
        },
      }}
      // onAnimationComplete={handleAnimationComplete}
      className="absolute inset-0 pointer-events-none bg-linear-to-r from-white/50 to-white origin-left z-20"
    />
  );
}
