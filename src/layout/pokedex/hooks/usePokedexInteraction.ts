import { useEffect, useState } from "react";
import { PadType } from "../types/PadType";
import { usePathname, useRouter } from "next/navigation";

export default function usePokedexInteraction() {
  const router = useRouter();
  const pathName = usePathname();

  const [activePad, setActivePad] = useState<PadType>(null);

  const [isPowerOn, setIsPowerOn] = useState(true);
  const togglePower = () => setIsPowerOn((prev) => !prev);

  useEffect(() => {
    if (!isPowerOn) {
      router.replace(pathName, { scroll: false });
    }
  }, [isPowerOn]);
  return { isPowerOn, activePad, setActivePad, togglePower };
}
