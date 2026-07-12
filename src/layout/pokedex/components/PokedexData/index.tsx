import DataHeader from "./DataHeader";
import DataTabs from "./DataTabs";
import DataButtons from "./DataButtons";
import { CompletePokemonType } from "../../types/CompletePokemonType";

type Props = { pokemon: CompletePokemonType };

export default function PokedexData({ pokemon }: Props) {
   return (
      <div className="absolute inset-0 flex flex-col overflow-hidden">
         <DataHeader pokemon={pokemon} />
         <DataTabs pokemon={pokemon} />
         <DataButtons />
      </div>
   );
}
