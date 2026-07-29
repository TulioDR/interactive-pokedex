import ScanAnimation from "./ScanAnimation";
import PreviewMessage from "./PreviewMessage";
import PokedexData from "./PokedexData";
import PokedexContainer from "./PokedexContainer";
import PokedexControlDeck from "./PokedexControlDeck";
import PokedexInnerScreen from "./PokedexInnerScreen";
import usePokedexContext from "../context/PokedexContext";
import PokedexTop from "./PokedexTop";
import LoadingSpinner from "./LoadingSpinner";

type Props = {};

export default function PokedexContent({}: Props) {
  const { pokemon, error, loading, draggedId } = usePokedexContext();

  const showScan = !!draggedId;
  // const showScan = !!draggedId && draggedId !== selectedId;
  const showMessage = !pokemon && !loading;

  return (
    <PokedexContainer>
      <PokedexTop />
      <PokedexInnerScreen>
        {loading && <LoadingSpinner />}
        {pokemon && <PokedexData pokemon={pokemon} />}
        {showMessage && <PreviewMessage error={error} />}
        {showScan && <ScanAnimation draggedId={draggedId} />}
      </PokedexInnerScreen>
      <PokedexControlDeck />
    </PokedexContainer>
  );
}
