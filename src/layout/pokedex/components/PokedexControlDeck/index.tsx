import SubScreen from "./SubScreen";
import ActionButtons from "./ActionButtons";
import PowerButton from "../PokedexTop/PowerButton";
import CircularLens from "@/components/CircularLens";

type Props = {};

export default function PokedexControlDeck({}: Props) {
  return (
    <div className="w-full pt-2 2xl:pt-5 overflow-hidden">
      <div className="flex gap-2 2xl:h-28 overflow-hidden">
        <ActionButtons />
        <SubScreen />
        <div className="flex 2xl:flex-col justify-between w-full 2xl:w-auto gap-2 2xl:gap-0">
          <CircularLens status={false} />
          <PowerButton />
        </div>
      </div>
    </div>
  );
}
