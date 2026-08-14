import { PadType } from "../../../types/PadType";

type Props = {
  position: "top" | "right" | "bottom" | "left";
  pad: PadType;
  changeActivePad: (pad: PadType) => void;
  id: string;
};

export default function ActionButton({
  position,
  changeActivePad,
  pad,
  id,
}: Props) {
  const handleClick = () => {
    const button = document.getElementById(id);
    if (button) {
      button.click();
    }
  };

  return (
    <button
      onClick={handleClick}
      onPointerEnter={() => changeActivePad(pad)}
      onPointerLeave={() => changeActivePad(null)}
      className={`w-1/3 aspect-square rounded-full absolute bg-black border-4 border-black z-10 cursor-pointer
        ${position === "top" || position === "bottom" ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2"}
        ${position === "top" ? "top-0" : ""}
        ${position === "right" ? "right-0" : ""}
        ${position === "bottom" ? "bottom-0" : ""}
        ${position === "left" ? "left-0" : ""}
      `}
    >
      <div
        className={`rounded-full w-full h-full hover:opacity-80 active:opacity-80
               ${pad === "favorite" ? "bg-red-500" : ""}
               ${pad === "open" ? "bg-cyan-500" : ""}
               ${pad === "next" ? "bg-yellow-500" : ""}
               ${pad === "prev" ? "bg-green-500" : ""}
            `}
      ></div>
    </button>
  );
}
