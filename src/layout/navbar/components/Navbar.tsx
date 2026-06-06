"use client";

import CircularLens from "@/components/CircularLens";
import useThemeContext from "@/context/ThemeContext";

type Props = {};

export default function Navbar({}: Props) {
   const { themeColor } = useThemeContext();
   return (
      <div className="fixed top-0 left-0 pt-5 pl-20 pr-20 w-full z-50">
         <div
            style={{ backgroundColor: themeColor }}
            className=" outline outline-outline border-2 border-white w-full h-20 shadow-xl rounded-4xl flex justify-between px-5 py-3 relative "
         >
            <div className="flex gap-5 items-center">
               <CircularLens />
               <div className="flex flex-col -space-y-1">
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] ml-0.5">
                     Interactive
                  </span>
                  <h1 className="text-3xl font-black text-white tracking-tighter italic">
                     POKÉ
                     <span className="text-slate-900 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]">
                        DEX
                     </span>
                  </h1>
               </div>
            </div>

            <button className="rounded-full h-full aspect-square flex items-center justify-center text-white hover:bg-white hover:text-black">
               <span className="material-symbols-rounded text-3xl! ">
                  settings
               </span>
            </button>
         </div>
      </div>
   );
}
