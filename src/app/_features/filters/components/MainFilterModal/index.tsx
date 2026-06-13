import ModalContainer from "./ModalContainer";
import useFilterDrawer from "../../hooks/useFilterDrawer";
import ModalPreview from "./ModalPreview";
import FiltersHeader from "./FiltersHeader";
import FiltersBody from "./FiltersBody";
import FiltersFooter from "./FiltersFooter";

type Props = {
   closeFilter: () => void;
   isFilterOpen: boolean;
};

export default function MainFilterModal({ closeFilter, isFilterOpen }: Props) {
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
      <ModalContainer isFilterOpen={isFilterOpen}>
         <ModalPreview previewPokemonPool={previewPokemonPool} />
         <div className="w-0.5 h-full bg-outline" />
         <div className="h-full flex-1 flex flex-col gap-5 text-slate-500">
            <FiltersHeader closeFilter={closeFilter} />
            <FiltersBody
               draft={draft}
               toggleType={toggleType}
               toggleShape={toggleShape}
               toggleGeneration={toggleGeneration}
               setSortBy={setSortBy}
               toggleSpecial={toggleSpecial}
            />
            <FiltersFooter />
         </div>
      </ModalContainer>
   );
}
