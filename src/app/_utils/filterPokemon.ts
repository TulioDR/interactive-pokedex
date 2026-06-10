import { POKEMON_SHAPES_MAP } from "@/constants/POKEMON_SHAPES_MAP";
import { PokemonCardType } from "@/layout/poke-db/types/PokemonCardType";
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

const LEGENDARY_IDS = [
   144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 382,
   383, 384, 480, 481, 482, 483, 484, 485, 486, 487, 488, 638, 639, 640, 641,
   642, 643, 644, 645, 646, 716, 717, 718, 772, 773, 785, 786, 787, 788, 789,
   790, 791, 792, 800, 888, 889, 890, 894, 895, 896, 897, 898, 905, 1001, 1002,
   1003, 1004, 1007, 1008, 1014, 1015, 1016, 1017, 1024,
];
const MYTHICAL_IDS = [
   151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649, 719, 720,
   721, 801, 802, 807, 808, 809, 893, 1025,
];

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
