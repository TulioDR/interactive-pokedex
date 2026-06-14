import ModalPreview from "./ModalPreview";
import FiltersBody from "./FiltersBody";
import FiltersFooter from "./FiltersFooter";
import FiltersContainer from "./FiltersContainer";

type Props = {};

export default function MainFilterModal({}: Props) {
   return (
      <FiltersContainer>
         <ModalPreview />
         <div className="w-0.5 h-full bg-outline" />
         <div className="h-full flex-1 flex flex-col gap-5 ">
            <FiltersBody />
            <FiltersFooter />
         </div>
      </FiltersContainer>
   );
}
