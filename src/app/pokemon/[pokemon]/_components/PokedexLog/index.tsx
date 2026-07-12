import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";

type Props = {
   pokemon: CompletePokemonType;
};

export default function PokedexLog({ pokemon }: Props) {
   const rawText =
      pokemon.species.flavor_text_entries.find(
         (entry: any) => entry.language.name === "en",
      )?.flavor_text || "";
   const cleanText = rawText
      .replace(/[\f\n\r\t]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
   return (
      <SectionContainer className="">
         <SectionTitle icon="book_ribbon" title="Pokedex Log" />
         <div className="text-sm text-light-text font-medium tracking-wider">
            {cleanText}
         </div>
      </SectionContainer>
   );
}
