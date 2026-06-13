import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import MainFilterModal from "./MainFilterModal";
import useFiltersContext from "../context/FiltersContext";

type Props = {};

export default function FiltersContent({}: Props) {
   const { isModalOpen, openModal, closeModal } = useFiltersContext();

   return (
      <div className="w-full h-14 mt-30 flex gap-2">
         <FilterInput />
         <FilterButton icon="tune" text="Filters" onClick={openModal} />
         <FilterButton
            icon="favorite"
            text="Favorites"
            onClick={() => {}}
            favorite
         />
         <FilterButton icon="refresh" square onClick={() => {}} />
         <MainFilterModal isFilterOpen={isModalOpen} closeFilter={closeModal} />
      </div>
   );
}
