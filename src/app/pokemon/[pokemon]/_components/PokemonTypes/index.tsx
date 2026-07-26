import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";
import getTypeColor from "@/utils/getTypeColor";

type Props = {
   pokemon: CompletePokemonType;
};

export default function PokemonTypes({ pokemon }: Props) {
   return (
      <SectionContainer className="">
         <SectionTitle icon="interests" title="Types" />
         <div className="flex flex-col gap-2 h-full ">
            {pokemon.base.types.map((type: any) => (
               <div
                  key={type.type.name}
                  style={{ backgroundColor: getTypeColor(type.type.name) }}
                  className="rounded-lg flex items-center justify-center py-4 capitalize tracking-wider font-semibold text-sm text-white"
               >
                  {type.type.name}
               </div>
            ))}
         </div>
      </SectionContainer>
   );
}
