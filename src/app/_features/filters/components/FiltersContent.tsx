import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import MainFilterModal from "./MainFilterModal";

type Props = {};

export default function FiltersContent({}: Props) {
   const [isFilterOpen, setIsFilterOpen] = useState(false);
   const openFilter = () => setIsFilterOpen(true);
   const closeFilter = () => setIsFilterOpen(false);

   return (
      <div className="w-full h-14 mt-30 flex gap-2">
         <FilterInput />
         <FilterButton icon="tune" text="Filters" onClick={openFilter} />
         <FilterButton
            icon="favorite"
            text="Favorites"
            onClick={() => {}}
            favorite
         />
         <FilterButton icon="refresh" square onClick={() => {}} />
         <MainFilterModal
            isFilterOpen={isFilterOpen}
            closeFilter={closeFilter}
         />
      </div>
   );
}
