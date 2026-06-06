import CircularLens from "@/components/CircularLens";
import Filters from "./Filters";
import ModalButton from "./ModalButton";
import ModalContainer from "./ModalContainer";

type Props = {
   closeFilter: () => void;
};

export default function MainFilterModal({ closeFilter }: Props) {
   return (
      <ModalContainer>
         <div className="w-96 h-full overflow-y-auto bg-red-200"></div>
         <div className="w-0.5 h-full bg-outline" />
         <div className="h-full flex-1 flex flex-col gap-5 overflow-hidden text-slate-500">
            <div className="h-12 w-full overflow-hidden flex items-center justify-between">
               <div className="flex gap-5 items-center">
                  <CircularLens />
                  <h2 className="text-4xl font-black text-hover">
                     Pokemon Filters
                  </h2>
               </div>
               <ModalButton onClick={closeFilter} text="Close" icon="close" />
            </div>
            <Filters />
            <div className="h-12 w-full  overflow-hidden flex justify-end gap-5">
               <ModalButton onClick={() => {}} text="Reset" icon="refresh" />
               <ModalButton
                  onClick={() => {}}
                  text="Apply filters"
                  icon="check"
               />
            </div>
         </div>
      </ModalContainer>
   );
}
