import useThemeContext from "@/context/ThemeContext";
import MenuItem from "./MenuItem";
import { useEffect, useRef, useState } from "react";
import { THEME_COLORS } from "@/constants/THEME_COLORS";
import ThemeColorOption from "./ThemeColorOption";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function SettingsMenu({}: Props) {
   const { themeColor, changeThemeColor } = useThemeContext();

   const [showThemes, setShowThemes] = useState(false);
   const [innerHeight, setInnerHeight] = useState(0);

   const savedColorRef = useRef<string>(themeColor);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!ref.current) return;
      const height = ref.current.offsetHeight;
      setInnerHeight(height);
   }, [showThemes]);

   const handlePointerLeave = () => {
      changeThemeColor(savedColorRef.current);
   };

   const handleSelectColor = (hex: string) => {
      setShowThemes(false);
      savedColorRef.current = hex; // Lock it into memory
      changeThemeColor(hex); // Set it globally
   };

   return (
      <div
         onMouseDown={(e) => e.preventDefault()}
         className="absolute right-0 top-full w-75 bg-white translate-y-1 text-xs sm:text-sm rounded-lg outline outline-outline p-5 font-bold"
      >
         <motion.div
            transition={{ duration: 0.2, ease: "easeInOut" }}
            animate={{ height: innerHeight }}
            className="w-full overflow-hidden"
         >
            <motion.div className="w-full relative">
               <AnimatePresence initial={false}>
                  {showThemes ? (
                     <motion.div
                        ref={ref}
                        key="themes"
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%", pointerEvents: "none" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full flex flex-col absolute top-0 left-0"
                     >
                        <MenuItem onClick={() => setShowThemes(false)}>
                           <div className="flex items-center gap-2">
                              <div className="h-8 aspect-square flex items-center justify-center">
                                 <span className="material-symbols-rounded">
                                    arrow_back
                                 </span>
                              </div>
                              <span>Go back</span>
                           </div>
                        </MenuItem>
                        {THEME_COLORS.map((color) => (
                           <ThemeColorOption
                              onPointerEnter={() => changeThemeColor(color.hex)}
                              onPointerLeave={handlePointerLeave}
                              key={color.hex}
                              color={color.hex}
                              text={color.name}
                              onClick={() => handleSelectColor(color.hex)}
                           />
                        ))}
                     </motion.div>
                  ) : (
                     <motion.div
                        ref={ref}
                        key="settings"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full flex flex-col"
                     >
                        <ThemeColorOption
                           color={themeColor}
                           text="Theme color"
                           onClick={() => setShowThemes(true)}
                           dropdown
                        />
                        <MenuItem onClick={() => {}}>
                           <div className="flex items-center gap-2">
                              <div className="h-8 aspect-square flex items-center justify-center">
                                 <span className="material-symbols-rounded">
                                    heart_broken
                                 </span>
                              </div>
                              <span>Delete all favorites</span>
                           </div>
                        </MenuItem>
                     </motion.div>
                  )}
               </AnimatePresence>
            </motion.div>
         </motion.div>
      </div>
   );
}
