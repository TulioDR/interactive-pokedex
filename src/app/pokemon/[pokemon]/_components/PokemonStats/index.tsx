import BaseStat from "@/layout/pokedex/components/PokedexData/DataTabs/Tabs/Stats/BaseStat";
import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";

type Props = {
   pokemon: CompletePokemonType;
};

export default function PokemonStats({ pokemon }: Props) {
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
      <SectionContainer className="sm:col-span-2">
         <SectionTitle icon="monitoring" title="Base Stats">
            <div className="font-bold uppercase text-xs">
               BST : {baseStatTotal}
            </div>
         </SectionTitle>
         <div className="flex flex-col gap-5 w-full">
            {baseStats.map((stat: any, index: number) => (
               <BaseStat key={stat.name} index={index} stat={stat} />
            ))}
         </div>
      </SectionContainer>
   );
}
