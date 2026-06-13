import useFiltersContext from "../../../context/FiltersContext";
import ModalButton from "../ModalButton";

type Props = {
   closeFilter: () => void;
};

export default function FiltersFooter({ closeFilter }: Props) {
   const { clearAllFilters } = useFiltersContext();

   return (
      <div className="h-12 w-full flex justify-between gap-2">
         <ModalButton onClick={closeFilter} text="Close" icon="close" />
         <div className="flex gap-2">
            <ModalButton
               onClick={clearAllFilters}
               text="Reset"
               icon="refresh"
            />
            <ModalButton onClick={() => {}} text="Apply filters" icon="check" />
         </div>
      </div>
   );
}
