import CircularInstruction from "./CircularInstruction";

type Props = {
  favorite?: true;
  icon: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
  id: string;
};

export default function PreviewButton({
  favorite,
  id,
  icon,
  text,
  isActive,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      id={id}
      className={`flex-1 h-9 2xl:h-11 cursor-pointer rounded-lg flex flex-col items-center justify-center font-medium border border-white hover:text-white active:text-white
            ${
              favorite
                ? "text-[#E60012] hover:bg-[#E60012] active:bg-[#E60012]"
                : "text-black/50 hover:bg-hover active:bg-hover"
            }
            ${isActive ? (favorite ? "bg-[#E60012]" : "bg-hover") : ""}   
            ${isActive ? "text-white" : "bg-white"}
         `}
    >
      <div
        className={`w-full flex gap-1 items-center justify-center ${favorite ? "" : "flex-row-reverse"}`}
      >
        <CircularInstruction color={favorite ? "red" : "blue"} />
        <span className="material-symbols-rounded">{icon}</span>
      </div>
      <span className="text-xs leading-2.5 hidden 2xl:block">{text}</span>
    </button>
  );
}
