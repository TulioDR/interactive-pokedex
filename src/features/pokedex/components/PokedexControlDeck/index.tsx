import ActionButtons from "./ActionButtons";
import CircularLens from "@/components/CircularLens";
import { ToggleButton } from "./ToggleButton";
import { PadType } from "../../types/PadType";

type Props = {
  isPowerOn: boolean;
  togglePower: () => void;
  setActivePad: React.Dispatch<React.SetStateAction<PadType>>;
};

export default function PokedexControlDeck({
  isPowerOn,
  togglePower,
  setActivePad,
}: Props) {
  return (
    <div className="w-full pt-2 2xl:pt-5 overflow-hidden">
      <div className="flex justify-between 2xl:h-28 overflow-hidden">
        <ActionButtons setActivePad={setActivePad} />
        <div className="flex 2xl:flex-col justify-center xl:justify-between w-full 2xl:w-auto">
          <CircularLens status={false} isOn={isPowerOn} />
          <div className="2xl:-translate-x-full">
            <ToggleButton icon="power_settings_new" onClick={togglePower} />
          </div>
        </div>
      </div>
    </div>
  );
}
