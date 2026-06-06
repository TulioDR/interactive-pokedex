"use client";

import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Loader from "@/layout/loader/components/Loader";
import { usePokeSync } from "@/layout/loader/hooks/usePokeSync";
import Filters from "./Filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CardType from "../_types/CardType";
import CustomPagination from "./CustomPagination";
import Pokedex from "./Pokedex";
import { AnimatePresence } from "framer-motion";
import MainFilterModal from "./Filters/MainFilterModal";

import { motion } from "framer-motion";

type Props = {};

export default function HomePageContent({}: Props) {
   const [draggedId, setDraggedId] = useState<number | null>(null);

   const { syncedData, syncProgress, isSyncing } = usePokeSync();

   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   const searchQuery = searchParams.get("search_query")?.toLowerCase() || "";
   const currentPage = Number(searchParams.get("page")) || 1;

   const filteredPokemons = searchQuery
      ? syncedData.filter(
           (pokemon: CardType) =>
              pokemon.name.toLowerCase().includes(searchQuery) ||
              pokemon.id.toString() === searchQuery,
        )
      : syncedData;

   useEffect(() => {
      if (searchParams.get("page") && searchParams.get("page") !== "1") {
         const params = new URLSearchParams(searchParams.toString());
         params.set("page", "1");
         router.replace(`${pathname}?${params.toString()}`);
      }
   }, [searchQuery, pathname, router]); // Tracking search change boundaries

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

   const handlePageChange = (newPage: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", newPage.toString());
      router.push(`${pathname}?${params.toString()}`);
   };

   const [isFilterOpen, setIsFilterOpen] = useState(false);

   const openFilter = () => {
      setIsFilterOpen(true);
   };

   const closeFilter = () => {
      setIsFilterOpen(false);
   };

   return (
      <div className="w-full flex px-20 gap-5">
         <Loader isSyncing={isSyncing} syncProgress={syncProgress} />

         <motion.div
            animate={{
               opacity: isFilterOpen ? 0 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full flex flex-col gap-5 pb-5"
         >
            <Filters openFilter={openFilter} />
            {searchQuery && (
               <p className="text-xs font-mono text-slate-400">
                  Found {filteredPokemons.length} matching entries
               </p>
            )}
            <div
               className={`flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 `}
            >
               {displayedPokemons.map((card, index) => (
                  <PokemonCard
                     key={card.id + "-" + index}
                     card={card}
                     setDraggedId={setDraggedId}
                  />
               ))}
            </div>
            <CustomPagination
               total={totalPages}
               page={currentPage}
               onChange={handlePageChange}
            />
         </motion.div>
         <Pokedex draggedId={draggedId} syncedData={syncedData} />
         <AnimatePresence>
            {isFilterOpen && <MainFilterModal closeFilter={closeFilter} />}
         </AnimatePresence>
      </div>
   );
}
