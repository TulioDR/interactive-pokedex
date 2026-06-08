import getPokemonId from "@/utils/getPokemonId";
import CircularInstruction from "./CircularInstruction";
import usePokedexContext from "@/app/_context/PokedexContext";

type Props = {
   reverse?: true;
   pokemon: { name: string; id: number } | null;
   isActive: boolean;
   onClick: () => void;
};

export default function NavigationButton({
   reverse,
   pokemon,
   isActive,
   onClick,
}: Props) {
   const { setActivePad } = usePokedexContext();

   if (!pokemon)
      return (
         <div className="flex-1 h-full flex items-center justify-center text-center text-xs text-black/50">
            <span>{`No ${reverse ? "previous" : "next"} pokemon`}</span>
         </div>
      );
   return (
      <button
         onPointerEnter={() => setActivePad(reverse ? "prev" : "next")}
         onPointerLeave={() => setActivePad(null)}
         onClick={onClick}
         className={`flex-1 h-full cursor-pointer flex px-2 justify-between items-center text-black/50  
            ${reverse ? "flex-row-reverse rounded-l-full " : " rounded-r-full"}
            ${isActive ? "bg-hover text-white" : ""}
         `}
      >
         <div
            className={`flex flex-col  ${reverse ? "items-end" : "items-start"}`}
         >
            <span className="text-xs opacity-70 leading-3">
               {getPokemonId(pokemon.id)}
            </span>
            <span className="text-xs capitalize font-semibold leading-3">
               {pokemon.name}
            </span>
         </div>
         <CircularInstruction color={reverse ? "green" : "yellow"} />
         {/* <div
            className={`h-full flex items-center group-hover:text-white ${reverse ? "rotate-180" : ""}`}
         >
            <span className="material-symbols-rounded">chevron_right</span>
         </div> */}
      </button>
   );
}
