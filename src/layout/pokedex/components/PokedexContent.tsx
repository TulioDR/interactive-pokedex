"use client";

import ScanAnimation from "./ScanAnimation";
import PreviewMessage from "./PreviewMessage";
import PokedexData from "./PokedexData";
import PokedexContainer from "./PokedexContainer";
import PokedexControlDeck from "./PokedexControlDeck";
import PokedexInnerScreen from "./PokedexInnerScreen";
import PokedexTop from "./PokedexTop";
import LoadingSpinner from "./LoadingSpinner";
import { useScanEvent } from "../hooks/useScanEvent";
import usePokedexInteraction from "../hooks/usePokedexInteraction";
import usePokedexFetch from "../hooks/usePokedexFetch";

interface Props {
  pokemonName: string;
}

function PokedexContent({ pokemonName }: Props) {
  const { scannedPokemon } = useScanEvent();
  const { pokemon, error, isLoading } = usePokedexFetch(pokemonName);
  const { isPowerOn, activePad, setActivePad, togglePower, changePokemon } =
    usePokedexInteraction();

  return (
    <PokedexContainer>
      <PokedexTop />
      <PokedexInnerScreen isPowerOn={isPowerOn}>
        {isLoading && <LoadingSpinner />}
        {pokemon && (
          <PokedexData
            pokemon={pokemon}
            activePad={activePad}
            changePokemon={changePokemon}
          />
        )}
        {!pokemon && <PreviewMessage error={error} />}
        {!!scannedPokemon && (
          <ScanAnimation onComplete={() => changePokemon(scannedPokemon)} />
        )}
      </PokedexInnerScreen>
      <PokedexControlDeck
        isLoading={isLoading}
        pokemon={pokemon}
        togglePower={togglePower}
        setActivePad={setActivePad}
      />
    </PokedexContainer>
  );
}

export default PokedexContent;
