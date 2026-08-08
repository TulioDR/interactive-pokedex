import { useEffect, useState } from "react";
import { PadType } from "../types/PadType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function usePokedexInteraction() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activePad, setActivePad] = useState<PadType>(null);

  const [isPowerOn, setIsPowerOn] = useState(true);
  const togglePower = () => setIsPowerOn((prev) => !prev);

  useEffect(() => {
    if (!isPowerOn) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("scanned");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [isPowerOn, searchParams]);

  // It is used on pokemon scan, or when pressing next or prev pokemon
  const changePokemon = (pokemonName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("scanned", pokemonName);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { isPowerOn, activePad, setActivePad, togglePower, changePokemon };
}
