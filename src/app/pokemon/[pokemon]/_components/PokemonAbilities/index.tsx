import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";

type Props = {
   pokemon: CompletePokemonType;
};

export default function PokemonAbilities({ pokemon }: Props) {
   return (
      <SectionContainer className="">
         <SectionTitle icon="star" title="Abilities" />
         <div className="opacity-85 font-semibold flex flex-col gap-2 h-full text-sm">
            <div className="flex-1 w-full bg-slate-50 outline outline-outline rounded-lg flex items-center justify-between capitalize px-5">
               Pressure
            </div>
            <div className="flex-1 w-full bg-slate-50 outline outline-outline rounded-lg flex items-center justify-between capitalize px-5">
               Overgrow
            </div>
         </div>
      </SectionContainer>
   );
}
