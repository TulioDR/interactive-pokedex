import getPokemonId from "@/utils/getPokemonId";

type Props = {
   number: number;
};

export default function PreviewNumber({ number }: Props) {
   return (
      <div className=" text-xs text-white uppercase tracking-wide -translate-y-0.75">
         {getPokemonId(number)}
      </div>
   );
}
