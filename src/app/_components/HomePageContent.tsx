"use client";

import PokemonCard from "./PokemonCard";

import CustomPagination from "./CustomPagination";

import Filters from "../_features/filters/components/Filters";
import { useAppliedFilters } from "../_features/filters/hooks/useAppliedFilters";
import useCurrentPage from "../_features/filters/hooks/useCurrentPage";
import { useState } from "react";

export default function HomePageContent() {
  const [showFavorites, setShowFavorites] = useState(false);
  const toggleFavorites = () => setShowFavorites((prev) => !prev);

  const allFilteredPokemon = useAppliedFilters(showFavorites);

  const { totalPages, displayedPokemons, currentPage } =
    useCurrentPage(allFilteredPokemon);

  return (
    <div className="w-full flex flex-col gap-5 pb-5">
      <Filters
        foundedNumber={allFilteredPokemon.length}
        showFavorites={showFavorites}
        toggleFavorites={toggleFavorites}
      />
      <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
        {displayedPokemons.map((card, index) => (
          <PokemonCard key={card.id} index={index} card={card} />
        ))}
      </div>
      <CustomPagination total={totalPages} page={currentPage} />
    </div>
  );
}
