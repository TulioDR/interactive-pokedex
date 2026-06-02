"use client";

import { useState } from "react";
import PokemonCard from "./PokemonCard";
import Loader from "@/layout/loader/components/Loader";
import { usePokeSync } from "@/layout/loader/hooks/usePokeSync";
import PokemonPreview from "./PokemonPreview";
import Filters from "./Filters";
import { useSearchParams } from "next/navigation";
import CardType from "../_types/CardType";

type Props = {};

export default function HomePageContent({}: Props) {
   const [draggedId, setDraggedId] = useState<number | null>(null);

   const { syncedData, syncProgress, isSyncing } = usePokeSync();

   const searchParams = useSearchParams();
   const searchQuery = searchParams.get("search_query")?.toLowerCase() || "";

   const filteredPokemons = searchQuery
      ? syncedData.filter(
           (pokemon: CardType) =>
              pokemon.name.toLowerCase().includes(searchQuery) ||
              pokemon.id.toString() === searchQuery,
        )
      : syncedData;

   // 3. PAGINATION MATH (Ready for the future!)
   // Right now, we hardcode page 1, showing the first 30 items that pass the filter.
   // Later on, this 'currentPage' number will also live safely in your URL params!
   const currentPage = 1;
   const itemsPerPage = 30;
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   // Slice the filtered results down to the active batch of 30
   const displayedPokemons = filteredPokemons.slice(
      indexOfFirstItem,
      indexOfLastItem,
   );

   return (
      <div className="w-full flex px-20 gap-5">
         <Loader isSyncing={isSyncing} syncProgress={syncProgress} />

         <div className="w-full flex flex-col gap-5 pb-5">
            <Filters />
            {searchQuery && (
               <p className="text-xs font-mono text-slate-400">
                  Found {filteredPokemons.length} matching entries
               </p>
            )}
            <div
               className={`flex-1 grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 `}
            >
               {displayedPokemons.map((card, index) => (
                  <PokemonCard
                     key={card.id + "-" + index}
                     card={card}
                     setDraggedId={setDraggedId}
                  />
               ))}
            </div>
         </div>
         {/* Live Counter Asset */}

         <PokemonPreview draggedId={draggedId} />
      </div>
   );
}
