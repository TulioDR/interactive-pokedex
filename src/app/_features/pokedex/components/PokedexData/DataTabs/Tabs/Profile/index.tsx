import ProfileAbility from "./ProfileAbility";
import ProfileInfo from "./ProfileInfo";

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
      <div className="flex flex-col gap-4 font-mono text-xs w-full">
         {/* 📐 Section 1: Physical Metrics Grid */}
         <div className="grid grid-cols-2 gap-4">
            <ProfileInfo infoName="Height" infoText={`${heightInMeters} m`} />
            <ProfileInfo
               infoName="Weight"
               infoText={`${weightInKilograms} kg`}
            />
         </div>

         {/* 🧬 Section 2: Abilities Matrix */}
         <div className="flex flex-col gap-0.5 bg-black/20 p-2 rounded-lg border border-white/20">
            <span className="uppercase  font-bold tracking-wider mb-0.5 text-xs text-white/80">
               Abilities
            </span>
            <div className="flex flex-wrap gap-1.5">
               {pokemon.base.abilities.map((item: any) => (
                  <ProfileAbility key={item.ability.name} item={item} />
               ))}
            </div>
         </div>

         {/* 📊 Section 3: Capture & Database Metrics */}
         <div className="grid grid-cols-2 gap-4">
            <ProfileInfo
               infoName="Capture Core"
               infoText={`${catchRate} / 255`}
            />
            <ProfileInfo infoName="Growth Cycle" infoText={growthRate} />
         </div>
      </div>
   );
}
