import { useState } from "react";
import { FilterState } from "../utils/filterPokemon";
import { useSearchParams } from "next/navigation";

export default function useFilterDraft() {
   const searchParams = useSearchParams();
   const getInitialFilters = (): FilterState => ({
      types: searchParams.get("types")?.split(",").filter(Boolean) || [],
      shapes: searchParams.get("shapes")?.split(",").filter(Boolean) || [],
      generations:
         searchParams.get("generations")?.split(",").filter(Boolean) || [],
      special: searchParams.get("special")?.split(",").filter(Boolean) || [],
      sortBy: searchParams.get("sortBy") || "id-asc",
   });

   const [draft, setDraft] = useState<FilterState>(getInitialFilters);

   return { draft, setDraft };
}
