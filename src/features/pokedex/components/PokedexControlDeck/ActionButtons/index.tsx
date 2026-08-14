import {
  FAVORITE_BUTTON_ID,
  FULL_PAGE_BUTTON_ID,
  NEXT_BUTTON_ID,
  PREV_BUTTON_ID,
} from "@/features/pokedex/constants/BUTTONS_IDS";
import { PadType } from "../../../types/PadType";
import ActionButton from "./ActionButton";

type Props = {
  setActivePad: React.Dispatch<React.SetStateAction<PadType>>;
};

export default function ActionButtons({ setActivePad }: Props) {
  type CircularButtonProps = {
    position: "top" | "right" | "bottom" | "left";
    pad: PadType;
    id: string;
  };

  // This button work the following way:
  // When you click a button it will fid the id of the button in the screen
  // And it will click it. That is it

  const circularButtons: CircularButtonProps[] = [
    {
      position: "top",
      pad: "open",
      id: FULL_PAGE_BUTTON_ID,
    },
    {
      position: "right",
      pad: "next",
      id: NEXT_BUTTON_ID,
    },
    {
      position: "left",
      pad: "favorite",
      id: FAVORITE_BUTTON_ID,
    },
    {
      position: "bottom",
      pad: "prev",
      id: PREV_BUTTON_ID,
    },
  ];

  return (
    <div className="h-full aspect-square relative hidden 2xl:block">
      <div className="w-full h-full relative">
        {circularButtons.map(({ pad, position, id }, i) => (
          <ActionButton
            key={i}
            position={position}
            pad={pad}
            id={id}
            changeActivePad={setActivePad}
          />
        ))}
        <div className="w-1/3 absolute h-[50%] bg-black left-0 top-0 rotate-45 origin-bottom flex flex-col justify-between" />
        <div className="w-1/3 absolute h-[50%] bg-black right-0 bottom-0 rotate-45 origin-top flex flex-col justify-between" />
      </div>
    </div>
  );
}
