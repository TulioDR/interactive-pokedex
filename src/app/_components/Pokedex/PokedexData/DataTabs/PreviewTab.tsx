import { motion } from "framer-motion";

type Props = {
   icon: string;
   isSelected: boolean;
   onClick: () => void;
};

export default function PreviewTab({ icon, isSelected, onClick }: Props) {
   return (
      <button
         className="flex-1 flex items-center justify-center rounded-lg py-2 text-white relative cursor-pointer"
         onClick={onClick}
      >
         <span className="material-symbols-rounded">{icon}</span>
         {isSelected && (
            <motion.div
               layoutId="underline-preview-tab"
               transition={{ duration: 0.6, type: "spring" }}
               className="absolute bottom-0 left-0 h-1 bg-white w-full"
            />
         )}
      </button>
   );
}
