import SubScreen from "./SubScreen";
import ActionButtons from "./ActionButtons";
import CircularLens from "@/components/CircularLens";
import { ToggleButton } from "./ToggleButton";
import { PadType } from "../../types/PadType";

type Props = {
  pokemon: any;
  togglePower: () => void;
  setActivePad: React.Dispatch<React.SetStateAction<PadType>>;
  isLoading: boolean;
};

export default function PokedexControlDeck({
  togglePower,
  setActivePad,
  isLoading,
  pokemon,
}: Props) {
  return (
    <div className="w-full pt-2 2xl:pt-5 overflow-hidden">
      <div className="flex gap-4 2xl:h-28 overflow-hidden">
        <ActionButtons setActivePad={setActivePad} />
        <SubScreen pokemon={pokemon} isLoading={isLoading} />
        <div className="flex 2xl:flex-col justify-between w-full 2xl:w-auto gap-2 2xl:gap-0">
          <CircularLens status={false} />
          <ToggleButton icon="power_settings_new" onClick={togglePower} />
        </div>
      </div>
    </div>
  );
}
