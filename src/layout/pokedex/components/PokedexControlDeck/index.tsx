import SubScreen from "./SubScreen";
import ActionButtons from "./ActionButtons";
import PowerButton from "../PokedexTop/PowerButton";
import CircularLens from "@/components/CircularLens";

type Props = {};

export default function PokedexControlDeck({}: Props) {
   return (
      <div className="w-full pt-5">
         <div className="flex gap-2 h-28 w-full">
            <ActionButtons />
            <SubScreen />
            <div className="flex flex-col justify-between">
               <CircularLens status={false} />
               <PowerButton />
            </div>
         </div>
      </div>
   );
}
