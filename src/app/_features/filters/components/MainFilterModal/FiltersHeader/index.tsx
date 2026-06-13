import ModalButton from "../ModalButton";
import FilterTitle from "./FilterTitle";

type Props = {
   closeFilter: () => void;
};

export default function FiltersHeader({ closeFilter }: Props) {
   return (
      <div className="h-12 w-full flex items-center justify-between">
         <FilterTitle />
         <ModalButton onClick={closeFilter} text="Close" icon="close" />
      </div>
   );
}
