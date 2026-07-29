import getPokemonId from "@/utils/getPokemonId";

type Props = {
  pokemon: any;
};

export default function DataHeader({ pokemon }: Props) {
  return (
    <div className="flex flex-col">
      <div className="font-medium text-base 2xl:text-lg text-white uppercase">
        {pokemon.name}
      </div>
      <div className=" text-xs text-white uppercase tracking-wide opacity-70">
        {getPokemonId(pokemon.id)}
      </div>
    </div>
  );
}
