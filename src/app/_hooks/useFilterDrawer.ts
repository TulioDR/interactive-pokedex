import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { filterPokemon, FilterState } from "../_utils/filterPokemon";

// interface UseFilterDrawerProps {
// onClose: () => void; // Callback to close modal/drawer
// setGlobalSearchInput?: (val: string) => void; // State setter for your main search input
// }

export default function useFilterDrawer() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const { allPokemon } = usePokeDbContext(); // Pull global database pool

   // Parse current URL states or default to blank system setups
   const getInitialFilters = (): FilterState => ({
      types: searchParams.get("types")?.split(",").filter(Boolean) || [],
      shapes: searchParams.get("shapes")?.split(",").filter(Boolean) || [],
      generations:
         searchParams.get("generations")?.split(",").filter(Boolean) || [],
      special: searchParams.get("special")?.split(",").filter(Boolean) || [],
      sortBy: searchParams.get("sortBy") || "id-asc",
   });

   // Local isolated draft state
   const [draft, setDraft] = useState<FilterState>(getInitialFilters);

   // 🎛️ Click Toggle Action Handlers
   const toggleType = (typeName: string) => {
      setDraft((prev) => {
         if (prev.types.includes(typeName)) {
            return { ...prev, types: prev.types.filter((t) => t !== typeName) };
         }
         // 🛑 Strict Constraint: Hard cap type choices at 2 max
         if (prev.types.length >= 2) return prev;
         return { ...prev, types: [...prev.types, typeName] };
      });
   };

   const toggleShape = (shapeValue: string) => {
      setDraft((prev) => ({
         ...prev,
         shapes: prev.shapes.includes(shapeValue)
            ? prev.shapes.filter((s) => s !== shapeValue)
            : [...prev.shapes, shapeValue],
      }));
   };

   const toggleGeneration = (genId: string) => {
      setDraft((prev) => ({
         ...prev,
         generations: prev.generations.includes(genId)
            ? prev.generations.filter((g) => g !== genId)
            : [...prev.generations, genId],
      }));
   };

   const setSortBy = (sortValue: string) => {
      setDraft((prev) => ({ ...prev, sortBy: sortValue }));
   };

   const toggleSpecial = (status: "legendary" | "mythical") => {
      setDraft((prev) => ({
         ...prev,
         special: prev.special.includes(status)
            ? prev.special.filter((s) => s !== status)
            : [...prev.special, status],
      }));
   };

   const clearAllFilters = () => {
      setDraft({
         types: [],
         shapes: [],
         generations: [],
         special: [],
         sortBy: "id-asc",
      });
   };

   // 📊 Live Sidebar Preview Computation Engine
   const hasActiveDraftFilters =
      draft.types.length > 0 ||
      draft.shapes.length > 0 ||
      draft.generations.length > 0 ||
      draft.special.length > 0;

   const previewPokemonPool = useMemo(() => {
      if (!hasActiveDraftFilters) return [];
      return filterPokemon(allPokemon, draft);
   }, [allPokemon, draft, hasActiveDraftFilters]);

   // 🚀 Commit changes to application architecture
   const applyFilters = () => {
      const params = new URLSearchParams();

      if (draft.types.length > 0) params.set("types", draft.types.join(","));
      if (draft.shapes.length > 0) params.set("shapes", draft.shapes.join(","));
      if (draft.generations.length > 0)
         params.set("generations", draft.generations.join(","));
      if (draft.special.length > 0)
         params.set("special", draft.special.join(","));
      params.set("sortBy", draft.sortBy);

      // 🧹 Wipe the main navigation text field clean as requested
      // if (setGlobalSearchInput) {
      //    setGlobalSearchInput("");
      // }

      // Update URL routes cleanly and secure closing animations
      router.push(`?${params.toString()}`);
      // onClose();
   };

   return {
      draft,
      previewPokemonPool,
      hasActiveDraftFilters,
      toggleType,
      toggleShape,
      toggleGeneration,
      setSortBy,
      toggleSpecial,
      clearAllFilters,
      applyFilters,
   };
}
