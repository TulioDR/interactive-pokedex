import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import MainFilterModal from "./MainFilterModal";
import useFiltersContext from "../context/FiltersContext";
import { useRouter } from "next/navigation";

type Props = {
   foundedNumber: number;
};

export default function FiltersContent({ foundedNumber }: Props) {
   const { openModal, clearAllFiltersAndInput, hasActiveDraftFilters } =
      useFiltersContext();

   const router = useRouter();

   const handleClearAllFilters = () => {
      router.replace("/", { scroll: false });
      clearAllFiltersAndInput();
   };

   return (
      <div className="w-full h-14 flex gap-2">
         {/* <FilterInput foundedNumber={foundedNumber} /> */}
         <FilterButton
            icon="tune"
            text="Filters"
            onClick={openModal}
            isActive={hasActiveDraftFilters}
         />
         {/* <FilterButton
            icon="favorite"
            text="Favorites"
            onClick={() => {}}
            favorite
         /> */}
         <FilterButton icon="refresh" onClick={handleClearAllFilters} />
         <MainFilterModal />
      </div>
   );
}
