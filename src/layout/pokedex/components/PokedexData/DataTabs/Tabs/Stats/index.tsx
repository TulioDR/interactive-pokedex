import BaseStat from "./BaseStat";

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

         {/* Vertical List of Progress Bars */}
         {baseStats.map((stat: any, index: number) => (
            <BaseStat key={stat.name} index={index} stat={stat} />
         ))}
      </div>
   );
}
