"use client";

import usePokeDbContext from "../context/PokeDbContext";

type Props = {};

export default function PokeDbLoader({}: Props) {
   const { isSyncing, syncProgress } = usePokeDbContext();

   if (!isSyncing) return <></>;
   return (
      <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 p-6">
         <div className="max-w-md w-full text-center space-y-6">
            {/* Retro Boot Text */}
            <h2 className="text-xl font-mono text-red-500 uppercase tracking-widest animate-pulse">
               Initializing Pokédex Index...
            </h2>

            {/* Progress Bar Container */}
            <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
               <div
                  className="h-full bg-red-600 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${syncProgress}%` }}
               />
            </div>

            {/* Live Counter */}
            <p className="text-sm font-mono text-slate-400">
               Syncing Database:{" "}
               <span className="text-slate-100 font-bold">{syncProgress}%</span>
            </p>
         </div>
      </div>
   );
}
