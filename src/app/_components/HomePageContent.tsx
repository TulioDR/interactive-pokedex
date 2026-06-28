"use client";

import { useState } from "react";
import PokemonCard from "./PokemonCard";

import { useSearchParams } from "next/navigation";
import CustomPagination from "./CustomPagination";

import Pokedex from "../_features/pokedex/components/Pokedex";
import Filters from "../_features/filters/components/Filters";
import { useAppliedFilters } from "../_features/filters/hooks/useAppliedFilters";
// import Pokedex from "./Pokedex";
// import { PokedexProvider } from "../_context/PokedexContext";

type Props = {};

export default function HomePageContent({}: Props) {
   const searchParams = useSearchParams();
   const [draggedId, setDraggedId] = useState<number | null>(null);

   // 1. Grab the current page from the URL string safely
   const currentPage = Number(searchParams.get("page")) || 1;
   // 2. Get the fully filtered pool (takes care of search_query, shapes, types, etc.)
   const allFilteredPokemon = useAppliedFilters();
   // 3. Handle Pagination Mathematics based on the hook's output
   const itemsPerPage = 30;
   const totalPages = Math.max(
      Math.ceil(allFilteredPokemon.length / itemsPerPage),
      1,
   );
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   // 4. Slice the master list down to only what should display on THIS specific page
   const displayedPokemons = allFilteredPokemon.slice(
      indexOfFirstItem,
      indexOfLastItem,
   );

   return (
      <div className="w-full flex gap-5 pt-5">
         <Pokedex draggedId={draggedId} />
         <div className="w-full flex flex-col gap-5 pb-5">
            <Filters foundedNumber={allFilteredPokemon.length} />
            <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
               {displayedPokemons.map((card, index) => (
                  <PokemonCard
                     key={card.id}
                     index={index}
                     card={card}
                     setDraggedId={setDraggedId}
                  />
               ))}
            </div>
            <CustomPagination total={totalPages} page={currentPage} />
         </div>
      </div>
   );
}
