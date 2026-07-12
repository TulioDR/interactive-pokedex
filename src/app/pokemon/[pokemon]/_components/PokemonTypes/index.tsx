import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";

type Props = {
   pokemon: CompletePokemonType;
};

export default function PokemonTypes({ pokemon }: Props) {
   return (
      <SectionContainer className="">
         <SectionTitle icon="interests" title="Types" />
         <div className="opacity-85 font-semibold flex flex-col gap-2 h-full text-sm text-white">
            <div className="flex-1 w-full bg-green-400 rounded-lg flex items-center justify-center py-2">
               Grass
            </div>
            <div className="flex-1 w-full bg-green-400 rounded-lg flex items-center justify-center py-2">
               Grass
            </div>
         </div>
      </SectionContainer>
   );
}
