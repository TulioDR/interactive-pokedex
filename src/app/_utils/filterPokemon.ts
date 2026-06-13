import { POKEMON_SHAPES_MAP } from "../_features/filters/constants/POKEMON_DATA/POKEMON_BODIES";
import {
   LEGENDARY_IDS,
   MYTHICAL_IDS,
} from "../_features/filters/constants/POKEMON_DATA/SPECIAL_POKEMONS";
import { PokemonCardType } from "../_types/PokemonCardType";
// 🎯 Import the hardcoded shape map

export interface FilterState {
   types: string[];
   shapes: string[]; // ["ball", "squiggle", etc.]
   generations: string[];
   special: string[];
   sortBy: string;
}

const GEN_RANGES: Record<string, { start: number; end: number }> = {
   gen1: { start: 1, end: 151 },
   gen2: { start: 152, end: 251 },
   gen3: { start: 252, end: 386 },
   gen4: { start: 387, end: 493 },
   gen5: { start: 494, end: 649 },
   gen6: { start: 650, end: 721 },
   gen7: { start: 722, end: 809 },
   gen8: { start: 810, end: 898 },
   gen9: { start: 899, end: 1025 },
};

export function filterPokemon(
   pokemonList: PokemonCardType[],
   filters: FilterState,
): PokemonCardType[] {
   let result = [...pokemonList];

   // 1. Filter by Type
   if (filters.types.length > 0) {
      result = result.filter((p) =>
         filters.types.every((selectedType) => p.types.includes(selectedType)),
      );
   }

   // 2. Filter by Shape / Body Style (🎯 FIXED LOGIC)
   if (filters.shapes.length > 0) {
      result = result.filter((p) => {
         // Check every selected shape filter (e.g. "ball", "quadruped")
         return filters.shapes.some((shapeKey) => {
            const allowedIds = POKEMON_SHAPES_MAP[shapeKey];
            // If the current pokemon's ID is found inside that shape's list, keep it!
            return allowedIds ? allowedIds.includes(p.id) : false;
         });
      });
   }

   // 3. Filter by Generation
   if (filters.generations.length > 0) {
      result = result.filter((p) => {
         return filters.generations.some((genKey) => {
            const range = GEN_RANGES[genKey];
            return range ? p.id >= range.start && p.id <= range.end : false;
         });
      });
   }

   // 4. Filter by Special Status
   if (filters.special.length > 0) {
      result = result.filter((p) => {
         const isLegendary = LEGENDARY_IDS.includes(p.id);
         const isMythical = MYTHICAL_IDS.includes(p.id);
         return (
            (filters.special.includes("legendary") && isLegendary) ||
            (filters.special.includes("mythical") && isMythical)
         );
      });
   }

   // 5. Sort Processing
   result.sort((a, b) => {
      if (filters.sortBy === "id-desc") return b.id - a.id;
      if (filters.sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (filters.sortBy === "name-desc") return b.name.localeCompare(a.name);
      return a.id - b.id;
   });

   return result;
}
