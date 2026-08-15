import { ErrorType } from "../../types/ErrorType";

function PokemonErrorMessage({ error }: { error: ErrorType }) {
  return (
    <div className="h-[50vh] flex items-center justify-center w-full text-zinc-400 font-medium">
      {error === "not-found" && "Pokemon not found"}
      {error === "fetch-error" && "Error fetching Pokémon data"}
      {error === "unknown-error" && "Something went wrong, please try again"}
    </div>
  );
}

export default PokemonErrorMessage;
