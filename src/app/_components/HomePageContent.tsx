"use client";

import PokemonCard from "./PokemonCard";

import CustomPagination from "./CustomPagination";

import Filters from "../_features/filters/components/Filters";
import { useAppliedFilters } from "../_features/filters/hooks/useAppliedFilters";
import useCurrentPage from "../_features/filters/hooks/useCurrentPage";

type Props = {};

export default function HomePageContent({}: Props) {
  const allFilteredPokemon = useAppliedFilters();

  const { totalPages, displayedPokemons, currentPage } =
    useCurrentPage(allFilteredPokemon);

  return (
    <div className="w-full flex flex-col gap-5 pb-5">
      <Filters foundedNumber={allFilteredPokemon.length} />
      <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
        {displayedPokemons.map((card, index) => (
          <PokemonCard key={card.id} index={index} card={card} />
        ))}
      </div>
      <CustomPagination total={totalPages} page={currentPage} />
    </div>
  );
}
