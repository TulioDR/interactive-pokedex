import ColorContainer from "./ColorContainer";
import DataHeader from "./DataHeader";
import DataTabs from "./DataTabs";
import DataButtons from "./DataButtons";
import usePokedexContext from "../../context/PokedexContext";

type Props = {};

export default function PokedexData({}: Props) {
   const { pokemon } = usePokedexContext();

   return (
      <ColorContainer>
         {pokemon && (
            <div className="flex-1 w-full flex flex-col overflow-hidden relative">
               <DataHeader pokemon={pokemon} />
               <DataTabs pokemon={pokemon} />
               <DataButtons />
            </div>
         )}
      </ColorContainer>
   );
}
