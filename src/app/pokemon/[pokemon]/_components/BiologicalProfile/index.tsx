import { CompletePokemonType } from "../../types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";
import BiologicalData from "./BiologicalData";
import { POKEMON_BODIES } from "@/app/_features/filters/constants/POKEMON_DATA/POKEMON_BODIES";

type Props = {
  pokemon: CompletePokemonType;
};

export default function BiologicalProfile({ pokemon }: Props) {
  const heightInMeters = pokemon.base.height / 10;
  const weightInKilograms = pokemon.base.weight / 10;

  const growthRate =
    pokemon.species?.growth_rate?.name?.replace("-", " ") ?? "Unknown";

  const matchingBodyTypes = Object.keys(POKEMON_BODIES).filter((key) =>
    POKEMON_BODIES[key].includes(pokemon.base.id),
  );

  const bodyTypeFormatted =
    matchingBodyTypes.length > 0
      ? matchingBodyTypes.map((type) => type.replace("-", " ")).join(", ")
      : "Unknown";

  return (
    <SectionContainer>
      <SectionTitle title="Biological Profile" icon="genetics" />
      <div className="w-full flex flex-col gap-4">
        <BiologicalData name="Height" data={`${heightInMeters} m`} />
        <BiologicalData name="Weight" data={`${weightInKilograms} kg`} />
        <BiologicalData name="Body Type" data={bodyTypeFormatted} />
        <BiologicalData name="Growth Rate" data={growthRate} />
      </div>
    </SectionContainer>
  );
}
