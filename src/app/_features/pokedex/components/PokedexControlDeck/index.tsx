import SubScreen from "./SubScreen";
import ActionButtons from "./ActionButtons";

type Props = {};

export default function PokedexControlDeck({}: Props) {
   return (
      <div className="flex w-full justify-center pt-5">
         <div className="flex w-[70%] items-center">
            <ActionButtons />
            <div className="h-full w-[10%]"></div>
            <SubScreen />
         </div>
      </div>
   );
}
