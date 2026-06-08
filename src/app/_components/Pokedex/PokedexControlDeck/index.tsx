import SubScreen from "./SubScreen";
import ActionButtons from "./ActionButtons";

type Props = {};

export default function PokedexControlDeck({}: Props) {
   return (
      <div className="flex w-full gap-10 items-center pt-5 px-10">
         <ActionButtons />
         <SubScreen />
      </div>
   );
}
