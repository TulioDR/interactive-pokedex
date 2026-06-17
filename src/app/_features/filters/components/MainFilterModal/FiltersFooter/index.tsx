import useFiltersContext from "../../../context/FiltersContext";
import FilterButton from "../../FilterButton";

type Props = {};

export default function FiltersFooter({}: Props) {
   const { clearAllFilters, closeModal, applyFilters } = useFiltersContext();

   return (
      <div className="h-12 w-full flex justify-between gap-2">
         <div className="hidden md:block">
            <FilterButton icon="close" text="Close" onClick={closeModal} />
         </div>
         <div className="md:hidden">
            <FilterButton icon="close" onClick={closeModal} />
         </div>

         <div className="flex gap-2">
            <div className="hidden md:block">
               <FilterButton
                  icon="refresh"
                  text="Reset"
                  onClick={clearAllFilters}
               />
            </div>
            <div className="md:hidden">
               <FilterButton icon="refresh" onClick={clearAllFilters} />
            </div>
            <div className="hidden md:block">
               <FilterButton
                  icon="check"
                  text="Apply filters"
                  onClick={applyFilters}
               />
            </div>
            <div className="md:hidden">
               <FilterButton icon="check" onClick={applyFilters} />
            </div>
         </div>
      </div>
   );
}
