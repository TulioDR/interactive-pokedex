import getTypeColor from "@/utils/getTypeColor";

type Props = {
   pokemon: any;
};

export default function Entry({ pokemon }: Props) {
   // 1. Get the category phrase
   const classification =
      pokemon.species.genera.find((g: any) => g.language.name === "en")
         ?.genus || "Unknown Category";

   // 2. Get the clean text paragraph
   const rawText =
      pokemon.species.flavor_text_entries.find(
         (entry: any) => entry.language.name === "en",
      )?.flavor_text || "";
   const cleanText = rawText
      .replace(/[\f\n\r\t]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

   // 3. Collect status properties
   const isLegendary = pokemon.species.is_legendary;
   const isMythical = pokemon.species.is_mythical;
   const habitat = pokemon.species.habitat?.name || "unknown";

   return (
      <div className="flex flex-col gap-2 font-mono text-xs">
         {isLegendary && (
            <div className="w-full bg-amber-500/20 border border-amber-500 text-amber-300 text-center py-1 rounded-md font-bold uppercase tracking-wider text-xs animate-pulse">
               ⚠️ Legendary Entity Detected
            </div>
         )}

         {isMythical && (
            <div className="w-full bg-purple-500/20 border border-purple-500 text-purple-300 text-center py-1 rounded-md font-bold uppercase tracking-wider text-xs animate-pulse">
               ✨ Mythical Entity Detected
            </div>
         )}

         {pokemon.species.is_baby && (
            <div className="w-full bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-center py-1 rounded-md font-bold uppercase tracking-wider text-xs">
               🌱 Baby Form Confirmed
            </div>
         )}

         <div className="w-full grid grid-cols-2 gap-2">
            {pokemon.base.types.map((type: any) => (
               <div
                  key={type.type.name}
                  style={{
                     backgroundColor: getTypeColor(type.type.name),
                  }}
                  className="text-white rounded-lg text-sm font-bold border-2 border-white flex items-center justify-center uppercase"
               >
                  {type.type.name}
               </div>
            ))}
         </div>

         {/* Spec Header */}
         <div>Class: {classification}</div>
         <div>Habitat: {habitat}</div>

         <div className="h-px w-full bg-white/10"></div>

         <div className="flex gap-4 items-center">
            <p className="leading-relaxed opacity-80 font-sans text-xs">
               {cleanText}
            </p>
         </div>
      </div>
   );
}
