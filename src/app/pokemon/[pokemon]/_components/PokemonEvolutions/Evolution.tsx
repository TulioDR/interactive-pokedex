import useThemeContext from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

type Props = {
   node: any;
   pokemon: any;
};

export default function Evolution({ node, pokemon }: Props) {
   const isCurrentSelected = pokemon.base.name === node.name;
   const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${node.id}.png`;

   const { themeColor } = useThemeContext();
   return (
      <Link
         href={`/pokemon/${node.name}`}
         style={{
            backgroundColor: isCurrentSelected ? themeColor : undefined,
         }}
         className={`flex flex-col sm:flex-row items-center p-1 gap-1 outline outline-outline bg-slate-50 rounded-lg w-full shrink-0 
            ${isCurrentSelected ? "text-white pointer-events-none" : "text-hover hover:bg-hover active:bg-hover active:text-white hover:text-white cursor-pointer"}
         `}
      >
         <div className="aspect-square h-16 relative flex items-center justify-center">
            <Image
               src={artworkUrl}
               alt={node.name}
               fill
               sizes="100%"
               className="w-full h-full object-contain"
               onError={(e: any) => {
                  e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${node.id}.png`;
               }}
            />
         </div>
         <div className="text-xs capitalize truncate font-medium tracking-wider">
            {node.name}
         </div>
      </Link>
   );
}
