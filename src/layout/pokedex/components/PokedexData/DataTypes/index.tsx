import getTypeColor from "@/utils/getTypeColor";

type Props = { pokemon: any };

export default function DataTypes({ pokemon }: Props) {
   return (
      <div className="gap-2 w-full mx-auto grid grid-cols-2">
         {pokemon.types.map((type: any) => (
            <div
               key={type.type.name}
               style={{ backgroundColor: getTypeColor(type.type.name) }}
               className="rounded-lg flex items-center justify-center py-2 capitalize tracking-wider font-semibold text-xs text-white"
            >
               {type.type.name}
            </div>
         ))}
      </div>
   );
}
