"use client";

import {
   createContext,
   useContext,
   useState,
   ReactNode,
   useEffect,
} from "react";
import usePokemonFetch from "../hooks/usePokemonFetch";
import { PadType } from "../types/PadType";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { PokemonCardType } from "@/app/_types/PokemonCardType";
import { useSearchParams, useRouter } from "next/navigation";
import usePokedexFetch from "../hooks/usePokedexFetch";

interface PokedexContextInterface {
   pokemon: any | null;
   loading: boolean;
   error: boolean;
   isPowerOn: boolean;
   togglePower: () => void;
   getPrevPokemon: () => void;
   getNextPokemon: () => void;
   activePad: PadType | null;
   setActivePad: React.Dispatch<React.SetStateAction<PadType>>;
   prevPokemon: PokemonCardType | null;
   nextPokemon: PokemonCardType | null;
   draggedId: string | null;
   setDraggedId: React.Dispatch<React.SetStateAction<string | null>>;
}

const PokedexContext = createContext({} as PokedexContextInterface);
export default function usePokedexContext() {
   return useContext(PokedexContext);
}

export function PokedexProvider({ children }: { children: ReactNode }) {
   const { allPokemon } = usePokeDbContext();
   const [isPowerOn, setIsPowerOn] = useState(true);
   const [activePad, setActivePad] = useState<PadType>(null);

   const [draggedId, setDraggedId] = useState<string | null>(null);

   const searchParams = useSearchParams();
   const router = useRouter();
   const scannedId = searchParams.get("scanned");

   const { pokemon, error, setPokemon } = usePokedexFetch();

   useEffect(() => {
      if (!isPowerOn) {
         setPokemon(null);
         // setSelectedId(null);
      }
   }, [isPowerOn]);

   const togglePower = () => setIsPowerOn((prev) => !prev);

   const currentIndex = allPokemon.findIndex((p: any) => p.id === pokemon?.id);

   const prevPokemon = currentIndex > 0 ? allPokemon[currentIndex - 1] : null;
   const nextPokemon =
      currentIndex < allPokemon.length - 1
         ? allPokemon[currentIndex + 1]
         : null;

   const getNextPokemon = () => {
      if (!scannedId) return;
      // router.replace(nextPokemon?.id as string);
   };
   const getPrevPokemon = () => {
      if (!scannedId) return;
      // router.replace(prevPokemon?.id as string);
   };

   const loading = !pokemon && !!scannedId;

   const value: PokedexContextInterface = {
      pokemon,
      loading,
      error,
      isPowerOn,
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
