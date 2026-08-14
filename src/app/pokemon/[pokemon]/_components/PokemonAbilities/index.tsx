import { CompletePokemonType } from "../../types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";

type Props = {
  pokemon: CompletePokemonType;
};

export default function PokemonAbilities({ pokemon }: Props) {
  return (
    <SectionContainer className="">
      <SectionTitle icon="star" title="Abilities" />
      <div className="font-semibold flex flex-col gap-2 h-full text-sm">
        {pokemon.base.abilities.map((item: any, index: number) => (
          <div
            key={item.ability.name + index}
            className="py-4 w-full bg-slate-50 outline outline-outline rounded-lg flex items-center justify-between capitalize px-5"
          >
            <span> {item.ability.name.replace("-", " ")}</span>
            {item.is_hidden && (
              <span className="text-[10px] ml-1 opacity-60">(HIDDEN)</span>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
