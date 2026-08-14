import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
  icon: string;
};
export const ToggleButton = ({ onClick, icon }: Props) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className="h-12 aspect-square rounded-full flex items-center justify-center bg-slate-200 border-2 border-white text-black cursor-pointer"
    >
      <span className="material-symbols-rounded text-3xl!">{icon}</span>
    </motion.button>
  );
};
