import EntrySpecies from "./EntrySpecies";
import EntryType from "./EntryType";

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
   const isBaby = pokemon.species.is_baby;
   const habitat = pokemon.species.habitat?.name || "unknown";

   return (
      <div className="flex flex-col gap-2 font-mono text-xs">
         {isLegendary && <EntrySpecies species="legendary" />}
         {isMythical && <EntrySpecies species="mythical" />}
         {isBaby && <EntrySpecies species="baby" />}

         <div className="w-full grid grid-cols-2 gap-2">
            {pokemon.base.types.map((type: any) => (
               <EntryType key={type.type.name} type={type} />
            ))}
         </div>

         {/* Spec Header */}
         <div>Class: {classification}</div>
         <div>Habitat: {habitat}</div>

         <div className="flex gap-4 items-center">
            <p className="leading-relaxed opacity-80 font-sans text-xs">
               {cleanText}
            </p>
         </div>
      </div>
   );
}
