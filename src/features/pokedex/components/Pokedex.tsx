"use client";

import PokedexContainer from "./PokedexContainer";
import PokedexControlDeck from "./PokedexControlDeck";
import PokedexTop from "./PokedexTop";
import { useState } from "react";
import { PadType } from "../types/PadType";
import { AnimatePresence } from "framer-motion";
import PokedexScreen from "./PokedexScreen";
import CRTAnimation from "./CRTAnimation";
import usePokedexInteraction from "../hooks/usePokedexInteraction";
import { useParams, useSearchParams } from "next/navigation";

export default function Pokedex() {
  const [activePad, setActivePad] = useState<PadType>(null);

  const { isPowerOn, togglePower, changePokemon } = usePokedexInteraction();

  const params = useParams();
  const routeParam = params?.pokemon as string | undefined;

  const searchParams = useSearchParams();
  const queryParam = searchParams.get("scanned");

  const rawIdentifier = queryParam || routeParam;

  return (
    <PokedexContainer>
      <PokedexTop />
      <div className="w-full flex-1 rounded-2xl bg-gray-900 border-5 2xl:border-10 border-black relative overflow-hidden">
        <AnimatePresence>
          {isPowerOn && (
            <CRTAnimation>
              <PokedexScreen
                key={rawIdentifier}
                rawIdentifier={rawIdentifier}
                activePad={activePad}
                changePokemon={changePokemon}
              />
            </CRTAnimation>
          )}
        </AnimatePresence>
      </div>

      <PokedexControlDeck
        togglePower={togglePower}
        setActivePad={setActivePad}
      />
    </PokedexContainer>
  );
}
