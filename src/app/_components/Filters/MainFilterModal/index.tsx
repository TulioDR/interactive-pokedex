import CircularLens from "@/components/CircularLens";
import Filters from "./Filters";
import ModalButton from "./ModalButton";
import ModalContainer from "./ModalContainer";
import FilterTitle from "./FilterTitle";
import useFilterDrawer from "@/app/_hooks/useFilterDrawer";
import Image from "next/image";
import getPokemonId from "@/utils/getPokemonId";

type Props = {
   closeFilter: () => void;
};

export default function MainFilterModal({ closeFilter }: Props) {
   const {
      draft,
      previewPokemonPool,
      hasActiveDraftFilters,
      toggleType,
      toggleShape,
      toggleGeneration,
      setSortBy,
      toggleSpecial,
      clearAllFilters,
      applyFilters,
   } = useFilterDrawer();

   return (
      <ModalContainer>
         <div className="w-96 h-full flex flex-col gap-5 overflow-hidden ">
            <h3 className="text-2xl font-black text-hover h-12 flex items-center">
               Preview
            </h3>
            <div className="w-full flex-1 overflow-y-scroll overscroll-none">
               <div className="min-h-max w-full grid grid-cols-2 gap-2 pr-2">
                  {previewPokemonPool.map((pokemon, i) => (
                     <div key={i} className="w-full h-12 flex gap-1">
                        <div className="h-full aspect-square relative">
                           <Image
                              src={pokemon.image}
                              alt={pokemon.name}
                              fill
                              sizes="100%"
                              className="object-contain"
                           />
                        </div>
                        <div className="h-full flex-1 flex flex-col justify-center">
                           <div className="text-xs opacity-70">
                              {getPokemonId(pokemon.id)}
                           </div>
                           <div className="text-sm truncate capitalize">
                              {pokemon.name}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="w-0.5 h-full bg-outline" />
         <div className="h-full flex-1 flex flex-col gap-5 text-slate-500">
            <div className="h-12 w-full flex items-center justify-between">
               <FilterTitle />
               <ModalButton onClick={closeFilter} text="Close" icon="close" />
            </div>
            <Filters
               draft={draft}
               toggleType={toggleType}
               toggleShape={toggleShape}
               toggleGeneration={toggleGeneration}
               setSortBy={setSortBy}
               toggleSpecial={toggleSpecial}
            />
            <div className="h-12 w-full  flex justify-end gap-2">
               <ModalButton onClick={() => {}} text="Reset" icon="refresh" />
               <ModalButton
                  onClick={() => {}}
                  text="Apply filters"
                  icon="check"
               />
            </div>
         </div>
      </ModalContainer>
   );
}
