import { CompletePokemonType } from "../types/CompletePokemonType";
import SquareSection from "./SquareSection";
import { GENERATION_RANGES } from "@/app/_features/filters/constants/POKEMON_DATA/GENERATION_RANGES";

type Props = {
  pokemon: CompletePokemonType;
};

export default function TopSection({ pokemon }: Props) {
  const classification =
    pokemon.species.genera.find((g: any) => g.language.name === "en")?.genus ||
    "Unknown Category";

  const habitat = pokemon.species.habitat?.name || "unknown";

  const toRoman = (num: number): string => {
    const romanMap: Record<number, string> = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
    };
    return romanMap[num] || num.toString();
  };

  /**
   * Finds the generation string (e.g., "GEN I") based on a Pokémon's ID
   */
  function getGenerationString(id: number | undefined): string {
    if (!id) return "GEN --";

    // Look through each gen key (e.g., "gen1", "gen2")
    for (const key of Object.keys(GENERATION_RANGES)) {
      const { start, end } = GENERATION_RANGES[key];

      if (id >= start && id <= end) {
        // Extract the number from the key "gen1" -> 1
        const genNumber = parseInt(key.replace("gen", ""), 10);
        return `GEN ${toRoman(genNumber)}`;
      }
    }

    return "GEN UNK"; // Fallback for IDs beyond Gen 9
  }

  const genDataString = getGenerationString(pokemon?.base?.id);

  const GENERATION_TO_REGION: Record<string, string> = {
    "generation-i": "Kanto",
    "generation-ii": "Johto",
    "generation-iii": "Hoenn",
    "generation-iv": "Sinnoh",
    "generation-v": "Unova",
    "generation-vi": "Kalos",
    "generation-vii": "Alola",
    "generation-viii": "Galar",
    "generation-ix": "Paldea",
  };

  function getPokemonRegion(pokemon: any): string {
    // Grab the raw generation identifier string from the species chunk
    const rawGen = pokemon?.species?.generation?.name; // e.g., "generation-i"

    if (!rawGen) return "Unknown";

    // Match it against our dictionary, fallback to "Unknown" if it's a newer gen
    return GENERATION_TO_REGION[rawGen] || "Unknown";
  }

  const regionName = getPokemonRegion(pokemon);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 ">
      <SquareSection icon="fingerprint" name="Class" data={classification} />
      <SquareSection icon="timeline" name="Generation" data={genDataString} />
      <SquareSection icon="map" name="Region" data={regionName} />
      <SquareSection icon="forest" name="Habitat" data={habitat} />
    </div>
  );
}
