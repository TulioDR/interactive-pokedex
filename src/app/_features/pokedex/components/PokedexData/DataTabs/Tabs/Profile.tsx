type Props = {
   pokemon: any;
};

export default function Profile({ pokemon }: Props) {
   // 🛠️ Simple formatting variables
   const heightInMeters = pokemon.base.height / 10;
   const weightInKilograms = pokemon.base.weight / 10;
   const catchRate = pokemon.species?.capture_rate ?? "N/A";
   const growthRate =
      pokemon.species?.growth_rate?.name?.replace("-", " ") ?? "Unknown";

   return (
      <div className="flex flex-col gap-2 font-mono text-xs w-full">
         {/* 📐 Section 1: Physical Metrics Grid */}
         <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-2.5">
            <div className="flex flex-col gap-0.5">
               <span className="text-[9px] uppercase opacity-40 font-bold tracking-wider">
                  Height
               </span>
               <span className="text-sm font-black text-cyan-100">
                  {heightInMeters} m
               </span>
            </div>
            <div className="flex flex-col gap-0.5">
               <span className="text-[9px] uppercase opacity-40 font-bold tracking-wider">
                  Weight
               </span>
               <span className="text-sm font-black text-cyan-100">
                  {weightInKilograms} kg
               </span>
            </div>
         </div>

         {/* 🧬 Section 2: Abilities Matrix */}
         <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
            <span className="text-[9px] uppercase opacity-40 font-bold tracking-wider mb-0.5">
               Genetic Abilities
            </span>
            <div className="flex flex-wrap gap-1.5">
               {pokemon.base.abilities.map((item: any) => (
                  <div
                     key={item.ability.name}
                     className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide border ${
                        item.is_hidden
                           ? "bg-purple-500/10 border-purple-500/40 text-purple-300"
                           : "bg-white/5 border-white/10 text-cyan-100"
                     }`}
                  >
                     {item.ability.name.replace("-", " ")}
                     {item.is_hidden && (
                        <span className="text-[7px] ml-1 opacity-60">
                           (HIDDEN)
                        </span>
                     )}
                  </div>
               ))}
            </div>
         </div>

         {/* 📊 Section 3: Capture & Database Metrics */}
         <div className="grid grid-cols-2 gap-4 pt-0.5">
            <div className="flex flex-col gap-0.5">
               <span className="text-[9px] uppercase opacity-40 font-bold tracking-wider">
                  Capture Core
               </span>
               <span className="font-bold text-cyan-200 uppercase tracking-tight">
                  {catchRate}{" "}
                  <span className="text-[8px] opacity-40 font-normal">
                     / 255
                  </span>
               </span>
            </div>
            <div className="flex flex-col gap-0.5">
               <span className="text-[9px] uppercase opacity-40 font-bold tracking-wider">
                  Growth Cycle
               </span>
               <span className="font-bold text-cyan-200 capitalize truncate">
                  {growthRate}
               </span>
            </div>
         </div>
      </div>
   );
}
