import ModalButton from "../ModalButton";

type Props = {};

export default function FiltersFooter({}: Props) {
   return (
      <div className="h-12 w-full  flex justify-end gap-2">
         <ModalButton onClick={() => {}} text="Reset" icon="refresh" />
         <ModalButton onClick={() => {}} text="Apply filters" icon="check" />
      </div>
   );
}
