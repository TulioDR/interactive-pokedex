"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { PadType } from "../types/PadType";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { PokemonCardType } from "@/app/_types/PokemonCardType";
import { useRouter } from "next/navigation";
import usePokedexFetch from "../hooks/usePokedexFetch";

interface PokedexContextInterface {
  pokemon: any | null;
  error: boolean;
  isPowerOn: boolean;
  togglePower: () => void;
  getPrevPokemon: () => void;
  getNextPokemon: () => void;
  activePad: PadType | null;
  setActivePad: React.Dispatch<React.SetStateAction<PadType>>;
  prevPokemon: PokemonCardType | null;
  nextPokemon: PokemonCardType | null;
}

const PokedexContext = createContext({} as PokedexContextInterface);
export default function usePokedexContext() {
  return useContext(PokedexContext);
}

export function PokedexProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { allPokemon } = usePokeDbContext();
  const { pokemon, error, isLoading } = usePokedexFetch();

  const [isPowerOn, setIsPowerOn] = useState(true);
  const [activePad, setActivePad] = useState<PadType>(null);

  useEffect(() => {
    if (!isPowerOn) {
      // here i need to use router to eliminate the scanned pokmon link
    }
  }, [isPowerOn]);

  const togglePower = () => setIsPowerOn((prev) => !prev);

  const currentIndex = allPokemon.findIndex((p: any) => p.id === pokemon?.id);

  const prevPokemon = currentIndex > 0 ? allPokemon[currentIndex - 1] : null;
  const nextPokemon =
    currentIndex < allPokemon.length - 1 ? allPokemon[currentIndex + 1] : null;

  const getNextPokemon = () => {
    // router.replace(nextPokemon?.id as string);
  };
  const getPrevPokemon = () => {
    // router.replace(prevPokemon?.id as string);
  };

  const value: PokedexContextInterface = {
    pokemon,
    error,
    isPowerOn,
    togglePower,
    activePad,
    setActivePad,
    prevPokemon,
    nextPokemon,
    getNextPokemon,
    getPrevPokemon,
  };

  return (
    <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
  );
}
