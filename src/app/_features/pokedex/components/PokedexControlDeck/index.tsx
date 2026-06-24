import SubScreen from "./SubScreen";
import ActionButtons from "./ActionButtons";
import PowerButton from "../PokedexTop/PowerButton";
import CircularLens from "@/components/CircularLens";

type Props = {};

export default function PokedexControlDeck({}: Props) {
   return (
      <div className="flex w-full justify-center pt-5">
         <div className="flex w-full items-center gap-2">
            <ActionButtons />
            <SubScreen />
            <div className="flex-3 aspect-square relative rounded-2xl">
               <div className="absolute top-0 left-0 aspect-square w-1/2 flex items-end justify-end">
                  <CircularLens status={false} />
               </div>
               <div className="absolute bottom-0 right-0 aspect-square w-1/2">
                  <PowerButton />
               </div>
            </div>
         </div>
      </div>
   );
}
