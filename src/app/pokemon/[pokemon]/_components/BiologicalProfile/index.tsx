import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";
import BiologicalData from "./BiologicalData";

type Props = {
   pokemon: CompletePokemonType;
};

export default function BiologicalProfile({ pokemon }: Props) {
   return (
      <SectionContainer>
         <SectionTitle title="Biological Profile" icon="genetics" />
         <div className="w-full flex flex-col gap-2">
            {/* <BiologicalData name="Height" data={`${pokemon.height} m`} />
            <BiologicalData name="Weight" data={`${pokemon.weight} kg`} />
            <BiologicalData name="Body Type" data={pokemon.body_type} /> */}
            <BiologicalData name="Growth Rate" data="Medium Fast" />
         </div>
      </SectionContainer>
   );
}
