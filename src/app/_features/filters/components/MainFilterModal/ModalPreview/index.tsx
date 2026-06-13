import PreviewCard from "./PreviewCard";
import PreviewMessage from "./PreviewMessage";
import useFiltersContext from "../../../context/FiltersContext";

type Props = {};

export default function ModalPreview({}: Props) {
   const { previewPokemonPool, hasActiveDraftFilters } = useFiltersContext();

   return (
      <div className="w-96 h-full flex flex-col gap-5 overflow-hidden ">
         <h3 className="text-2xl font-black text-hover flex items-center">
            Preview
         </h3>
         <div className="w-full flex-1 overflow-y-scroll overscroll-none border-y-2 border-outline">
            {hasActiveDraftFilters ? (
               previewPokemonPool.length > 0 ? (
                  <div className="w-full grid grid-cols-2 gap-2 pr-2 content-start">
                     {previewPokemonPool.map((pokemon) => (
                        <PreviewCard key={pokemon.id} pokemon={pokemon} />
                     ))}
                  </div>
               ) : (
                  <PreviewMessage text="No pokemons found" />
               )
            ) : (
               <PreviewMessage text="No active filters" />
            )}
         </div>
      </div>
   );
}
