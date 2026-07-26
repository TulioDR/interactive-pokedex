import { motion } from "framer-motion";
import useFiltersContext from "../../../context/FiltersContext";

type Props = {};

export default function PowerButton({}: Props) {
   const { toggleModal } = useFiltersContext();
   return (
      <motion.button
         onClick={toggleModal}
         whileTap={{ scale: 0.95 }}
         className="h-12 aspect-square rounded-full flex items-center justify-center bg-slate-200 border-2 border-white text-black cursor-pointer"
      >
         <span className="material-symbols-rounded text-3xl!">
            power_settings_new
         </span>
      </motion.button>
   );
}
