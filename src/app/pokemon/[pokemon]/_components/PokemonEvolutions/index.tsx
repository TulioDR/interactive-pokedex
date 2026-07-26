import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";
import Evolution from "./Evolution";

type Props = {
   pokemon: CompletePokemonType;
};

export default function PokemonEvolutions({ pokemon }: Props) {
   const stages: any[][] = [];

   function traverseTree(node: any, stageIndex: number) {
      if (!node) return;

      const speciesName = node.species?.name;
      const speciesUrl = node.species?.url;

      if (speciesName && speciesUrl) {
         const urlParts = speciesUrl.split("/").filter(Boolean);
         const pokemonId = urlParts[urlParts.length - 1];

         // Initialize the stage sub-array if it doesn't exist yet
         if (!stages[stageIndex]) {
            stages[stageIndex] = [];
         }

         // Push this variant node into its respective generational stage layer
         stages[stageIndex].push({
            name: speciesName,
            id: pokemonId,
         });
      }

      // 🔄 The Magic Fix: Loop through EVERY branching option instead of just index [0]
      if (node.evolves_to && node.evolves_to.length > 0) {
         node.evolves_to.forEach((branch: any) => {
            traverseTree(branch, stageIndex + 1);
         });
      }
   }

   // Run the traversal starting at the base form (Stage 0)
   traverseTree(pokemon.evolution.chain, 0);

   return (
      <SectionContainer>
         <SectionTitle icon="hub" title="Evolutions">
            <div className="font-bold uppercase text-xs">
               {stages.length} stages
            </div>
         </SectionTitle>
         <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full min-h-max">
            {Array.from({ length: 3 }).map((_, index) => (
               <div
                  key={index}
                  className="flex-1 flex items-center justify-center text-light-text font-medium tracking-wider text-xs sm:text-sm pb-5"
               >
                  Stage {index + 1}
               </div>
            ))}
            {stages.map((stageNodes, stageIndex) => (
               <div
                  key={stageIndex}
                  className="flex flex-col justify-center gap-1 sm:gap-2"
               >
                  {stageNodes.map((node) => (
                     <Evolution key={node.name} node={node} pokemon={pokemon} />
                  ))}
               </div>
            ))}
         </div>
      </SectionContainer>
   );
}
