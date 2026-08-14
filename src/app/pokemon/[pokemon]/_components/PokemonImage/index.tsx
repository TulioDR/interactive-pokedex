import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";
import { CompletePokemonType } from "../../types/CompletePokemonType";
import Image from "next/image";
interface Props {
  pokemon: CompletePokemonType;
}

function PokemonImage({ pokemon }: Props) {
  const jaNameObj = pokemon.species.names.find(
    (n: any) => n.language.name === "ja-hrkt",
  );
  return (
    <SectionContainer className="flex flex-col uppercase">
      <SectionTitle icon="" title={pokemon.base.name} />
      <div className="flex items-center justify-center flex-1">
        <div className="h-full aspect-square relative">
          <Image
            src={pokemon.base.sprites.other["official-artwork"].front_default}
            alt={pokemon.base.name}
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-end text-3xl">
        {jaNameObj ? jaNameObj.name : "N/A"}
      </div>
    </SectionContainer>
  );
}

export default PokemonImage;
