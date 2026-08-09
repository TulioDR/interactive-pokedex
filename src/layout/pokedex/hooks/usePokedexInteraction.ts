import { useCallback, useEffect, useState } from "react";
import { PadType } from "../types/PadType";
import useQueryParams from "@/hooks/useQueryParams";

export default function usePokedexInteraction() {
  const { routerReplace, getParams } = useQueryParams();

  const [activePad, setActivePad] = useState<PadType>(null);
  const [isPowerOn, setIsPowerOn] = useState(true);
  const togglePower = () => setIsPowerOn((prev) => !prev);

  const changePokemon = useCallback(
    (pokemonName?: string) => {
      const params = getParams();
      if (pokemonName) params.set("scanned", pokemonName);
      else params.delete("scanned");
      routerReplace(params);
    },
    [routerReplace, getParams],
  );

  useEffect(() => {
    if (!isPowerOn) changePokemon();
  }, [isPowerOn, changePokemon]);

  return { isPowerOn, activePad, setActivePad, togglePower, changePokemon };
}
