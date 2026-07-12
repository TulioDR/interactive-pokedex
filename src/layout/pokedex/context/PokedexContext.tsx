"use client";

import {
   createContext,
   useContext,
   useState,
   ReactNode,
   useEffect,
} from "react";
import { CompletePokemonType } from "../types/CompletePokemonType";
import usePokemonFetch from "../hooks/usePokemonFetch";
import { PadType } from "../types/PadType";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { PokemonCardType } from "@/app/_types/PokemonCardType";

interface PokedexContextInterface {
   selectedId: number | null;
   pokemon: CompletePokemonType | null;
   loading: boolean;
   error: boolean;
   isPowerOn: boolean;
   setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
   togglePower: () => void;
   getPrevPokemon: () => void;
   getNextPokemon: () => void;
   activePad: PadType | null;
   setActivePad: React.Dispatch<React.SetStateAction<PadType>>;
   prevPokemon: PokemonCardType | null;
   nextPokemon: PokemonCardType | null;
   draggedId: number | null;
   setDraggedId: React.Dispatch<React.SetStateAction<number | null>>;
}

const PokedexContext = createContext({} as PokedexContextInterface);
export default function usePokedexContext() {
   return useContext(PokedexContext);
}

export function PokedexProvider({ children }: { children: ReactNode }) {
   const { allPokemon } = usePokeDbContext();
   const [isPowerOn, setIsPowerOn] = useState(true);
   const [activePad, setActivePad] = useState<PadType>(null);
   const [selectedId, setSelectedId] = useState<number | null>(null);

   const [draggedId, setDraggedId] = useState<number | null>(null);

   const { pokemon, error, setPokemon } = usePokemonFetch(selectedId);

   useEffect(() => {
      if (!isPowerOn) {
         setPokemon(null);
         setSelectedId(null);
      }
   }, [isPowerOn]);

   const togglePower = () => setIsPowerOn((prev) => !prev);

   const currentIndex = allPokemon.findIndex(
      (p: any) => p.id === pokemon?.base.id,
   );

   const prevPokemon = currentIndex > 0 ? allPokemon[currentIndex - 1] : null;
   const nextPokemon =
      currentIndex < allPokemon.length - 1
         ? allPokemon[currentIndex + 1]
         : null;

   const getNextPokemon = () => {
      if (!selectedId) return;
      setSelectedId(nextPokemon?.id || null);
   };
   const getPrevPokemon = () => {
      if (!selectedId) return;
      setSelectedId(prevPokemon?.id || null);
   };

   const loading = !pokemon && !!selectedId;

   const value: PokedexContextInterface = {
      selectedId,
      pokemon,
      loading,
      error,
      isPowerOn,
      setSelectedId,
      togglePower,
      activePad,
      setActivePad,
      prevPokemon,
      nextPokemon,
      getNextPokemon,
      getPrevPokemon,
      draggedId,
      setDraggedId,
   };

   return (
      <PokedexContext.Provider value={value}>
         {children}
      </PokedexContext.Provider>
   );
}
