import getTypeColor from "@/utils/getTypeColor";

type Props = {
   types: string[];
};

export default function PokemonTypes({ types }: Props) {
   return (
      <div className="grid grid-cols-2 gap-2 w-full h-full px-2 py-10">
         {types.map((t) => (
            <div
               key={t}
               style={{ backgroundColor: getTypeColor(t) }}
               className="rounded-md text-white flex items-center justify-center uppercase text-xs font-extrabold py-4"
            >
               {t}
            </div>
         ))}
      </div>
   );
}
