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

   const { getNextPokemon, getPrevPokemon, setActivePad, activePad } =
      usePokedexContext();

   const circularButtons: CircularButtonProps[] = [
      {
         position: "top",
         pad: "open",
         onClick: () => {},
      },
      {
         position: "right",
         pad: "next",
         onClick: getNextPokemon,
      },
      {
         position: "left",
         pad: "favorite",
         onClick: () => {},
      },
      {
         position: "bottom",
         pad: "prev",
         onClick: getPrevPokemon,
      },
   ];

   return (
      <div className="flex-3 aspect-square relative">
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
   );
}
