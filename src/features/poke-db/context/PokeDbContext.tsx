"use client";

import { PokemonCardType } from "@/app/_types/PokemonCardType";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface PokeContextType {
  allPokemon: PokemonCardType[];
  syncProgress: number;
  isSyncing: boolean;
}

const PokeDbContext = createContext({} as PokeContextType);
export default function usePokeDbContext() {
  return useContext(PokeDbContext);
}

export function PokeDbProvider({ children }: { children: ReactNode }) {
  const [allPokemon, setAllPokemon] = useState<PokemonCardType[]>([]);
  const [syncProgress, setSyncProgress] = useState(0);
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    async function initializeDatabase() {
      const cached = localStorage.getItem("poke_sandbox_db");

      // 2. Si existe en caché, simulamos el llenado suave de la barra en 1 segundo
      if (cached) {
        const data = JSON.parse(cached);
        setAllPokemon(data);

        // Llenamos la barra rápidamente
        setSyncProgress(100);

        // Esperamos 1 segundo para que la animación/barra se complete visualmente
        setTimeout(() => {
          setIsSyncing(false);
        }, 2000);
        return;
      }

      // 3. Si no hay nada en caché, realizamos la descarga por bloques
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        const masterList = await res.json();

        const fullDatabase: PokemonCardType[] = [];
        const batchSize = 50;

        for (let i = 0; i < masterList.results.length; i += batchSize) {
          const chunk = masterList.results.slice(i, i + batchSize);

          const chunkDetails = await Promise.all(
            chunk.map(async (item: any) => {
              try {
                const dRes = await fetch(item.url);
                const d = await dRes.json();

                const speciesRes = await fetch(d.species.url);
                const speciesData = await speciesRes.json();

                const jaNameObj = speciesData.names.find(
                  (n: any) => n.language.name === "ja-hrkt",
                );

                return {
                  id: d.id,
                  name: d.name,
                  original_name: jaNameObj ? jaNameObj.name : "",
                  image: d.sprites.other["official-artwork"].front_default,
                  types: d.types.map((t: any) => t.type.name),
                };
              } catch (err) {
                console.error(err);
                return null;
              }
            }),
          );

          fullDatabase.push(...chunkDetails.filter(Boolean));

          const progress = Math.round(
            (fullDatabase.length / masterList.results.length) * 100,
          );
          setSyncProgress(progress);
        }

        localStorage.setItem("poke_sandbox_db", JSON.stringify(fullDatabase));
        setAllPokemon(fullDatabase);
      } catch (error) {
        console.error("Error during Pokemon database sync:", error);
      } finally {
        setIsSyncing(false);
      }
    }

    initializeDatabase();
  }, []);

  const value: PokeContextType = {
    allPokemon,
    syncProgress,
    isSyncing,
  };

  return (
    <PokeDbContext.Provider value={value}>{children}</PokeDbContext.Provider>
  );
}
