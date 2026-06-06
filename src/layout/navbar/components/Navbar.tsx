type Props = {};

export default function Navbar({}: Props) {
   return (
      <div className="fixed top-0 left-0 pt-5 pl-20 pr-20 w-full z-50">
         <div className="bg-linear-to-r from-[#D31027] via-[#EA384D] to-[#D31027] outline outline-outline border-2 border-white w-full h-20 shadow-xl rounded-4xl flex justify-between px-5 py-3 relative ">
            <div className="flex gap-5 items-center">
               <div className="relative group/lens">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-200 flex items-center justify-center overflow-hidden">
                     <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 animate-pulse relative">
                        {/* Lens glint */}
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full blur-[1px]" />
                     </div>
                  </div>
                  {/* Secondary status lights next to lens */}
                  <div className="absolute -right-2 top-0 flex flex-col gap-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
                     <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                  </div>
               </div>
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
