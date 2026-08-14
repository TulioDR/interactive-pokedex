import usePokedexFetch from "@/layout/pokedex/hooks/usePokedexFetch";
import { useScanEvent } from "@/layout/pokedex/hooks/useScanEvent";
import ScanAnimation from "./ScanAnimation";
import PreviewMessage from "./PreviewMessage";
import LoadingSpinner from "./LoadingSpinner";
import PokedexData from "./PokedexData";
import { PadType } from "../../types/PadType";

interface Props {
  rawIdentifier: string | undefined;
  activePad: PadType;
  changePokemon: (pokemonName: string) => void;
}

function PokedexScreen({ rawIdentifier, activePad, changePokemon }: Props) {
  const { scannedPokemon } = useScanEvent();
  const { pokemon, error } = usePokedexFetch(rawIdentifier);

  const isLoading = !!rawIdentifier && !pokemon && !error;
  const showScan = !!scannedPokemon && scannedPokemon !== pokemon?.name;

  return (
    <div className="relative overflow-hidden w-full h-full scan-target-zone">
      {isLoading && <LoadingSpinner />}
      {pokemon && (
        <PokedexData
          pokemon={pokemon}
          activePad={activePad}
          changePokemon={changePokemon}
        />
      )}
      {!pokemon && !isLoading && <PreviewMessage error={error} />}
      {showScan && (
        <ScanAnimation onComplete={() => changePokemon(scannedPokemon)} />
      )}
    </div>
  );
}

export default PokedexScreen;
