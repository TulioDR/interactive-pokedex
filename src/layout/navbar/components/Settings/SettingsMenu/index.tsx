import useThemeContext from "@/context/ThemeContext";
import MenuItem from "./MenuItem";

type Props = {};

export default function SettingsMenu({}: Props) {
   const { themeColor } = useThemeContext();

   return (
      <div
         onMouseDown={(e) => e.preventDefault()}
         className="absolute right-0 top-full w-80 bg-white translate-y-1 rounded-lg outline outline-outline p-5 flex flex-col font-bold"
      >
         <MenuItem onClick={() => {}}>
            <div className="w-ful flex justify-between items-center h-full">
               <div className="flex items-center gap-2 h-full">
                  <div
                     style={{ backgroundColor: themeColor }}
                     className="h-8 overflow-hidden aspect-square rounded-full border-4 border-black outline outline-outline"
                  />
                  <span>Theme color</span>
               </div>
               <span className="material-symbols-rounded">chevron_right</span>
            </div>
         </MenuItem>
         <MenuItem onClick={() => {}}>
            <div className="flex items-center gap-2">
               <div className="h-8 aspect-square flex items-center justify-center">
                  <span className="material-symbols-rounded">heart_broken</span>
               </div>
               <span>Delete all favorites</span>
            </div>
         </MenuItem>
      </div>
   );
}
