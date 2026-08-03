import usePokedexContext from "../../../context/PokedexContext";
import { PadType } from "../../../types/PadType";
import ActionButton from "./ActionButton";

type Props = {};

export default function ActionButtons({}: Props) {
  type CircularButtonProps = {
    position: "top" | "right" | "bottom" | "left";
    pad: PadType;
    onClick: () => void;
  };

  // This button work the following way:
  // When you click a button it will fid the id of the button in the screen
  // And it will click it. That is it

  const { setActivePad, activePad } = usePokedexContext();

  const circularButtons: CircularButtonProps[] = [
    {
      position: "top",
      pad: "open",
      onClick: () => {},
    },
    {
      position: "right",
      pad: "next",
      onClick: () => {},
    },
    {
      position: "left",
      pad: "favorite",
      onClick: () => {},
    },
    {
      position: "bottom",
      pad: "prev",
      onClick: () => {},
    },
  ];

  return (
    <div className="h-full aspect-square relative hidden 2xl:block">
      <div className="w-full h-full relative">
        {circularButtons.map(({ pad, position, onClick }, i) => (
          <ActionButton
            key={i}
            position={position}
            pad={pad}
            isActive={activePad === pad}
            onClick={onClick}
            changeActivePad={setActivePad}
          />
        ))}
        <div className="w-1/3 absolute h-[50%] bg-black left-0 top-0 rotate-45 origin-bottom flex flex-col justify-between" />
        <div className="w-1/3 absolute h-[50%] bg-black right-0 bottom-0 rotate-45 origin-top flex flex-col justify-between" />
      </div>
    </div>
  );
}
