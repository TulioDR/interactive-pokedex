import { useEffect, useState } from "react";
import { PadType } from "../types/PadType";

export default function usePokedexInteraction() {
  const [activePad, setActivePad] = useState<PadType>(null);

  const [isPowerOn, setIsPowerOn] = useState(true);
  const togglePower = () => setIsPowerOn((prev) => !prev);

  useEffect(() => {
    if (!isPowerOn) {
      // here i need to use router to eliminate the scanned pokmon link
    }
  }, [isPowerOn]);
  return { isPowerOn, activePad, setActivePad, togglePower };
}
