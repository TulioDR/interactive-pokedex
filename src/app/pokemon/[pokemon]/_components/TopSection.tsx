import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SquareSection from "./SquareSection";

type Props = {
   pokemon: CompletePokemonType;
};

export default function TopSection({ pokemon }: Props) {
   const classification =
      pokemon.species.genera.find((g: any) => g.language.name === "en")
         ?.genus || "Unknown Category";

   const habitat = pokemon.species.habitat?.name || "unknown";

   return (
      <div className="grid grid-cols-4 gap-5">
         <SquareSection icon="fingerprint" name="Class" data={classification} />
         <SquareSection icon="timeline" name="Generation" data="GEN I" />
         <SquareSection icon="map" name="Region" data="Kanto" />
         <SquareSection icon="forest" name="Habitat" data={habitat} />
      </div>
   );
}
