import { PokemonCardType } from "@/app/_types/PokemonCardType";
import usePokeDbContext from "@/features/poke-db/context/PokeDbContext";
import { useSearchParams } from "next/navigation";
import { createContext, useContext, useMemo, useState } from "react";
import { filterPokemon, FilterState } from "../utils/filterPokemon";
import useFilterDraft from "../hooks/useFilterDraft";
import useQueryParams from "@/hooks/useQueryParams";

interface FiltersContextInterface {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
  draft: FilterState;
  hasActiveDraftFilters: boolean;
  previewPokemonPool: PokemonCardType[];
  applyFilters: () => void;
  toggleType: (typeName: string) => void;
  toggleShape: (shapeValue: string) => void;
  toggleGeneration: (generation: string) => void;
  toggleSpecial: (status: "legendary" | "mythical") => void;
  setSortBy: (sortValue: string) => void;
  clearAllFilters: () => void;
  clearAllFiltersAndInput: () => void;
  inputValue: string;
  setInputValue: (val: string) => void;
}

const FiltersContext = createContext({} as FiltersContextInterface);

export default function useFiltersContext() {
  return useContext(FiltersContext);
}

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const { allPokemon } = usePokeDbContext();

  const { routerReplace, getParams } = useQueryParams();

  const [inputValue, setInputValue] = useState(
    searchParams.get("search_query") || "",
  );
  const { draft, setDraft } = useFilterDraft();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

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
  const clearAllFiltersAndInput = () => {
    setInputValue("");
    clearAllFilters();

    const params = getParams("new");

    params.set("page", "1");
    const currentScanned = searchParams.get("scanned");
    if (currentScanned) params.set("scanned", currentScanned);

    routerReplace(params);
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
    // Aqui es necesario el crear un nuevo URLSearchParams
    // Debido que entonces se quedaran los viejos params que no quiero
    // Tengo que solvertar la cuestion con el numero de pagina y scanned

    const params = getParams("new");

    params.set("page", "1");
    const currentScanned = searchParams.get("scanned");
    if (currentScanned) params.set("scanned", currentScanned);

    if (draft.types.length > 0) params.set("types", draft.types.join(","));
    if (draft.shapes.length > 0) params.set("shapes", draft.shapes.join(","));
    if (draft.generations.length > 0)
      params.set("generations", draft.generations.join(","));
    if (draft.special.length > 0)
      params.set("special", draft.special.join(","));
    params.set("sortBy", draft.sortBy);

    setInputValue("");

    routerReplace(params);
    closeModal();
  };

  const value: FiltersContextInterface = {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
    draft,
    previewPokemonPool,
    hasActiveDraftFilters,
    toggleType,
    toggleShape,
    toggleGeneration,
    setSortBy,
    toggleSpecial,
    clearAllFilters,
    clearAllFiltersAndInput,
    applyFilters,
    inputValue,
    setInputValue,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}
