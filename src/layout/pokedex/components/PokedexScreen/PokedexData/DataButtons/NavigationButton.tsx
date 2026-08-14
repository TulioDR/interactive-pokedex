import getPokemonId from "@/utils/getPokemonId";
import CircularInstruction from "./CircularInstruction";

type Props = {
  reverse?: true;
  pokemon: { name: string; id: number } | null;
  isActive: boolean;
  onClick: () => void;
  id: string;
};

export default function NavigationButton({
  reverse,
  id,
  pokemon,
  isActive,
  onClick,
}: Props) {
  if (!pokemon)
    return (
      <div
        className={`h-full flex-1 px-2 flex items-center text-center text-[10px] 2xl:text-xs text-black/50 
        ${reverse ? "" : "justify-end"}
      `}
      >
        <span>{`No ${reverse ? "previous" : "next"}`}</span>
      </div>
    );
  return (
    <button
      onClick={onClick}
      id={id}
      className={`flex-1 h-full cursor-pointer flex gap-2 px-2 items-center justify-end text-black/50 hover:bg-hover hover:text-white active:bg-hover active:text-white
        ${reverse ? "flex-row-reverse " : ""}
        ${isActive ? "bg-hover text-white" : ""}
      `}
    >
      <div
        className={`flex flex-col text-[10px] 2xl:text-xs ${reverse ? "items-start" : "items-end"}`}
      >
        <span className="opacity-70 leading-3">{getPokemonId(pokemon.id)}</span>
        <span className="capitalize font-semibold leading-3">
          {pokemon.name}
        </span>
      </div>
      <CircularInstruction color={reverse ? "green" : "yellow"} />
    </button>
  );
}
