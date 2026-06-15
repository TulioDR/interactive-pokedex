import useFiltersContext from "../../../context/FiltersContext";
import ModalButton from "../ModalButton";

type Props = {};

export default function FiltersFooter({}: Props) {
   const { clearAllFilters, closeModal, applyFilters } = useFiltersContext();

   return (
      <div className="h-12 w-full flex justify-between gap-2">
         <ModalButton onClick={closeModal} text="Close" icon="close" />
         <div className="flex gap-2">
            <ModalButton
               onClick={clearAllFilters}
               text="Reset"
               icon="refresh"
            />
            <ModalButton
               onClick={applyFilters}
               text="Apply filters"
               icon="check"
            />
         </div>
      </div>
   );
}
