import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";
import MainFilterModal from "./MainFilterModal";
import useFiltersContext from "../context/FiltersContext";

type Props = {
  foundedNumber: number;
};

export default function FiltersContent({ foundedNumber }: Props) {
  const { openModal, clearAllFiltersAndInput, hasActiveDraftFilters } =
    useFiltersContext();

  return (
    <div className="w-full flex flex-col md:flex-row gap-2">
      <FilterInput foundedNumber={foundedNumber} />
      <div className="flex h-14 gap-2">
        <FilterButton
          icon="tune"
          text="Filters"
          onClick={openModal}
          isActive={hasActiveDraftFilters}
        />
        <FilterButton
          icon="favorite"
          text="Favorites"
          onClick={() => {}}
          favorite
        />
        <FilterButton icon="refresh" onClick={clearAllFiltersAndInput} />
      </div>
      <MainFilterModal />
    </div>
  );
}
