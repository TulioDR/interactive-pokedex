import { useState } from "react";
import { PadType } from "../types/PadType";
import useQueryParams from "@/hooks/useQueryParams";

export default function usePokedexInteraction() {
  const { routerReplace, getParams } = useQueryParams();

  const [activePad, setActivePad] = useState<PadType>(null);
  const [isPowerOn, setIsPowerOn] = useState(true);

  const changePokemon = (pokemonName?: string) => {
    const params = getParams();
    if (pokemonName) params.set("scanned", pokemonName);
    else params.delete("scanned");
    routerReplace(params);
  };

  const togglePower = () => {
    const nextPowerState = !isPowerOn;
    setIsPowerOn(nextPowerState);
    if (!nextPowerState) changePokemon();
  };

  return { isPowerOn, activePad, setActivePad, togglePower, changePokemon };
}
