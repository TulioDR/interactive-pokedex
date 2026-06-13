"use client";

import { useState } from "react";
import PokemonCard from "./PokemonCard";

import { useSearchParams } from "next/navigation";
import { PokemonCardType } from "../_types/PokemonCardType";
import CustomPagination from "./CustomPagination";

import TotalPokemons from "./TotalPokemons";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import Pokedex from "../_features/pokedex/components/Pokedex";
import Filters from "../_features/filters/components/Filters";
// import Pokedex from "./Pokedex";
// import { PokedexProvider } from "../_context/PokedexContext";

type Props = {};

export default function HomePageContent({}: Props) {
   const searchParams = useSearchParams();

   const { allPokemon } = usePokeDbContext();
   const [draggedId, setDraggedId] = useState<number | null>(null);

   const searchQuery = searchParams.get("search_query")?.toLowerCase() || "";
   const currentPage = Number(searchParams.get("page")) || 1;

   const filteredPokemons = searchQuery
      ? allPokemon.filter(
           (pokemon: PokemonCardType) =>
              pokemon.name.toLowerCase().includes(searchQuery) ||
              pokemon.id.toString() === searchQuery,
        )
      : allPokemon;

   const itemsPerPage = 30;
   const totalPages = Math.max(
      Math.ceil(filteredPokemons.length / itemsPerPage),
      1,
   );

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   const displayedPokemons = filteredPokemons.slice(
      indexOfFirstItem,
      indexOfLastItem,
   );

   return (
      <div className="w-full flex px-20 gap-5">
         <Pokedex draggedId={draggedId} />
         <div className="w-full flex flex-col gap-5 pb-5">
            <Filters />
            {searchQuery && <TotalPokemons total={filteredPokemons.length} />}
            <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
               {displayedPokemons.map((card, index) => (
                  <PokemonCard
                     key={card.id + "-" + index}
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
