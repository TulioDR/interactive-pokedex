import Image from "next/image";

type Props = {
   pokemon: any;
};

export default function Evolution({ pokemon }: Props) {
   if (!pokemon.evolution || !pokemon.evolution.chain) {
      return (
         <div className="m-auto text-center opacity-40 text-xs font-mono py-8">
            NO MATRIX DATA FOUND
         </div>
      );
   }

   // 🧮 RECURSIVE GROUPING ENGINE
   // This separates the evolution tree into distinct evolutionary stages
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
      <div className="flex flex-col gap-2 font-mono w-full">
         <div className="flex w-full text-xs">
            {Array.from({ length: 3 }).map((_, index) => (
               <div
                  key={index}
                  className="flex-1 flex items-center justify-center"
               >
                  Stage {index + 1}
               </div>
            ))}
         </div>

         {/* Layout Track */}
         <div className="grid grid-cols-3 gap-2 w-full min-h-max">
            {stages.map((stageNodes, stageIndex) => (
               <div key={stageIndex} className="flex w-full flex-col gap-1">
                  {stageNodes.map((node) => {
                     const isCurrentSelected = pokemon.base.name === node.name;
                     const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${node.id}.png`;

                     return (
                        <div
                           key={node.name}
                           className={`flex flex-col gap-1 bg-white items-center justify-center rounded-lg p-1 w-full aspect-square shrink-0 text-center ${
                              isCurrentSelected
                                 ? "border-2 border-cyan-400"
                                 : ""
                           }`}
                        >
                           <div className="aspect-square w-[50%] relative flex items-center justify-center">
                              <Image
                                 src={artworkUrl}
                                 alt={node.name}
                                 fill
                                 sizes="100%"
                                 className="w-full h-full object-contain"
                                 onError={(e: any) => {
                                    e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${node.id}.png`;
                                 }}
                              />
                           </div>
                           <div
                              className={`text-[10px] font-black capitalize truncate w-full ${
                                 isCurrentSelected
                                    ? "text-cyan-800"
                                    : "text-black"
                              }`}
                           >
                              {node.name}
                           </div>
                        </div>
                     );
                  })}
               </div>
            ))}
         </div>
      </div>
   );
}
