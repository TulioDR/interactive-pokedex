import ActivePadType from "@/app/_types/ActivePadType";
import CircularInstruction from "../CircularInstruction";

type Props = {
   favorite?: true;
   icon: string;
   text: string;
   isActive: boolean;
   changeActivePad: (pad: ActivePadType) => void;
};

export default function PreviewButton({
   favorite,
   icon,
   text,
   isActive,
   changeActivePad,
}: Props) {
   return (
      <button
         onPointerEnter={() => changeActivePad(favorite ? "favorite" : "open")}
         onPointerLeave={() => changeActivePad(null)}
         className={`flex-1 cursor-pointer rounded-lg flex flex-col items-center justify-center font-medium border-2 border-white
            ${favorite ? "text-[#E60012]" : "text-black/50"}
            ${isActive ? (favorite ? "bg-[#E60012]" : "bg-slate-800") : ""}   
            ${isActive ? "text-white" : "bg-white"}
         `}
      >
         <div
            className={`w-full flex gap-1 items-center justify-center ${favorite ? "" : "flex-row-reverse"}`}
         >
            <CircularInstruction color={favorite ? "red" : "blue"} />
            <span className="material-symbols-rounded">{icon}</span>
         </div>
         <span className="text-xs leading-2.5">{text}</span>
      </button>
   );
}
