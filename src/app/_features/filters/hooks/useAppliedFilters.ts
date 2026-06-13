import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { filterPokemon, FilterState } from "@/app/_utils/filterPokemon";

export function useAppliedFilters(globalSearchTerm: string) {
   const searchParams = useSearchParams();
   const { allPokemon } = usePokeDbContext();

   // Compute applied dataset directly out of the Next URL state layer
   const finalDisplayPokemon = useMemo(() => {
      const appliedFilters: FilterState = {
         types: searchParams.get("types")?.split(",").filter(Boolean) || [],
         shapes: searchParams.get("shapes")?.split(",").filter(Boolean) || [],
         generations:
            searchParams.get("generations")?.split(",").filter(Boolean) || [],
         special: searchParams.get("special")?.split(",").filter(Boolean) || [],
         sortBy: searchParams.get("sortBy") || "id-asc",
      };

      // 1. Filter out via URL attributes first
      const baseFilteredPool = filterPokemon(allPokemon, appliedFilters);

      // 2. Secondary refine pass: Execute simple string checks against the remaining pool
      if (!globalSearchTerm.trim()) return baseFilteredPool;

      const normalizedQuery = globalSearchTerm.toLowerCase().trim();
      return baseFilteredPool.filter(
         (p) =>
            p.name.toLowerCase().includes(normalizedQuery) ||
            p.id.toString() === normalizedQuery,
      );
   }, [allPokemon, searchParams, globalSearchTerm]);

   return finalDisplayPokemon;
}
