import { useCallback, useEffect, useState } from "react";
import { PadType } from "../types/PadType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function usePokedexInteraction() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activePad, setActivePad] = useState<PadType>(null);

  const [isPowerOn, setIsPowerOn] = useState(true);
  const togglePower = () => setIsPowerOn((prev) => !prev);

  const changePokemon = useCallback(
    (pokemonName?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (pokemonName) params.set("scanned", pokemonName);
      else params.delete("scanned");

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  useEffect(() => {
    if (!isPowerOn) changePokemon();
  }, [isPowerOn, searchParams, changePokemon]);

  return { isPowerOn, activePad, setActivePad, togglePower, changePokemon };
}
