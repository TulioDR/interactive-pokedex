import ScanAnimation from "./ScanAnimation";
import PreviewMessage from "./PreviewMessage";
import PokedexData from "./PokedexData";
import PokedexContainer from "./PokedexContainer";
import PokedexControlDeck from "./PokedexControlDeck";
import PokedexInnerScreen from "./PokedexInnerScreen";
import usePokedexContext from "../context/PokedexContext";
import PokedexTop from "./PokedexTop";
import LoadingSpinner from "./LoadingSpinner";
import { useScanEvent } from "../hooks/useScanEvent";

type Props = {};

export default function PokedexContent({}: Props) {
  const { pokemon, error } = usePokedexContext();
  const { scannedPokemon } = useScanEvent();

  return (
    <PokedexContainer>
      <PokedexTop />
      <PokedexInnerScreen>
        {!pokemon && <LoadingSpinner />}
        {pokemon && <PokedexData pokemon={pokemon} />}
        {!pokemon && <PreviewMessage error={error} />}
        {!!scannedPokemon && <ScanAnimation scanningPokemon={scannedPokemon} />}
      </PokedexInnerScreen>
      <PokedexControlDeck />
    </PokedexContainer>
  );
}
