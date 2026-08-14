import { useEffect, useState } from "react";

export const useScanEvent = () => {
  const [scannedPokemon, setScannedPokemon] = useState<string | null>(null);

  useEffect(() => {
    const handleScannedChange = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      setScannedPokemon(customEvent.detail);
    };

    window.addEventListener(
      "pokemon-scanned",
      handleScannedChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        "pokemon-scanned",
        handleScannedChange as EventListener,
      );
    };
  }, []);

  return { scannedPokemon };
};
