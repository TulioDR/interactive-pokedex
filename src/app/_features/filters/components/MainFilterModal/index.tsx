import ModalPreview from "./ModalPreview";
import FiltersBody from "./FiltersBody";
import FiltersFooter from "./FiltersFooter";
import FiltersContainer from "./FiltersContainer";

type Props = {
   closeFilter: () => void;
   isFilterOpen: boolean;
};

export default function MainFilterModal({ closeFilter, isFilterOpen }: Props) {
   return (
      <FiltersContainer closeFilter={closeFilter} isFilterOpen={isFilterOpen}>
         <ModalPreview />
         <div className="w-0.5 h-full bg-outline" />
         <div className="h-full flex-1 flex flex-col gap-5 ">
            <FiltersBody />
            <FiltersFooter closeFilter={closeFilter} />
         </div>
      </FiltersContainer>
   );
}
