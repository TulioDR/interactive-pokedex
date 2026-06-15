import { PokemonCardType } from "@/app/_types/PokemonCardType";
import { POKEMON_BODIES } from "../constants/POKEMON_DATA/POKEMON_BODIES";
import { GENERATION_RANGES } from "../constants/POKEMON_DATA/GENERATION_RANGES";
import {
   LEGENDARY_IDS,
   MYTHICAL_IDS,
} from "../constants/POKEMON_DATA/SPECIAL_POKEMONS";

export interface FilterState {
   types: string[];
   shapes: string[]; // ["ball", "squiggle", etc.]
   generations: string[];
   special: string[];
   sortBy: string;
}

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
            const allowedIds = POKEMON_BODIES[shapeKey];
            // If the current pokemon's ID is found inside that shape's list, keep it!
            return allowedIds ? allowedIds.includes(p.id) : false;
         });
      });
   }

   // 3. Filter by Generation
   if (filters.generations.length > 0) {
      result = result.filter((p) => {
         return filters.generations.some((genKey) => {
            const range = GENERATION_RANGES[genKey];
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
