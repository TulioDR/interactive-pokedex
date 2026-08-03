import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
type Props = {
  scanningPokemon: string;
};

export default function ScanAnimation({ scanningPokemon }: Props) {
  const router = useRouter();

  const onAnimationComplete = () => {
    router.replace(`?scanned=${scanningPokemon}`);
  };

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
          onComplete: onAnimationComplete,
        },
      }}
      // onAnimationComplete={handleAnimationComplete}
      className="absolute inset-0 pointer-events-none bg-linear-to-r from-white/50 to-white origin-left z-20"
    />
  );
}
