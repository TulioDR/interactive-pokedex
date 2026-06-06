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
         <div className="h-full flex-1 flex flex-col gap-5 text-slate-500">
            <div className="h-12 w-full flex items-center justify-between">
               <div className="flex gap-2 items-center h-full">
                  <div className="outline-2 outline-outline aspect-square rounded-full flex items-center justify-center">
                     <CircularLens status={false} />
                  </div>
                  <h2 className="text-4xl font-black text-hover">
                     Pokemon Filters
                  </h2>
               </div>
               <ModalButton onClick={closeFilter} text="Close" icon="close" />
            </div>
            <Filters />
            <div className="h-12 w-full  flex justify-end gap-2">
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
