import getPokemonId from "@/utils/getPokemonId";

type Props = {
   id: number;
};

export default function CardNumber({ id }: Props) {
   return (
      <div className="z-10 text-white absolute top-full left-4 font-semibold text-xs">
         <div className="">{getPokemonId(id)}</div>
      </div>
   );
}
