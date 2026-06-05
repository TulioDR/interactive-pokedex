type Props = {
   pokemon: any;
};

export default function Stats({ pokemon }: Props) {
   // Map the raw stats array into a clean, readable layout format
   const baseStats = pokemon.base.stats.map((s: any) => {
      // Clean up the names to look clean in a small sidebar grid layout
      let displayName = s.stat.name.toUpperCase();
      if (displayName === "SPECIAL-ATTACK") displayName = "SP. ATK";
      if (displayName === "SPECIAL-DEFENSE") displayName = "SP. DEF";

      return {
         name: displayName,
         value: s.base_stat,
         // 📐 255 is the absolute highest base stat possible in the core game data (Blissey's HP)
         // This turns the value into an accurate percentage for your progress bar widths
         percentage: Math.min((s.base_stat / 255) * 100, 100),
      };
   });

   // Calculate the Base Stat Total (BST) — highly appreciated by players!
   const baseStatTotal = pokemon.base.stats.reduce(
      (acc: number, s: any) => acc + s.base_stat,
      0,
   );

   return (
      <div className="flex flex-col gap-2 font-mono text-xs h-full w-full">
         <div className="text-white font-bold uppercase text-xs">
            Base Stat Total: {baseStatTotal}
         </div>
         <div className="w-full h-px bg-white/10"></div>

         {/* Vertical List of Progress Bars */}
         {baseStats.map((stat: any) => (
            <div
               key={stat.name}
               className="flex items-center gap-3 flex-1 w-full"
            >
               {/* Stat Label Identifier */}
               <div className="w-14 font-bold opacity-70 text-[10px] text-left shrink-0">
                  {stat.name}
               </div>

               {/* Exact Numeric Value */}
               <div className="w-8 text-right font-black tracking-tighter shrink-0 text-cyan-100">
                  {String(stat.value).padStart(3, "0")}
               </div>

               {/* The Dynamic Progress Bar Track */}
               <div className="flex-1 h-full bg-gray-200 rounded-full overflow-hidden border-2 border-gray-200">
                  <div
                     style={{ width: `${stat.percentage}%` }}
                     className="h-full bg-linear-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-out"
                  />
               </div>
            </div>
         ))}
      </div>
   );
}
