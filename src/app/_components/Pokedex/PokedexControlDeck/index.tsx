import CompletePokemonType from "@/app/_types/CompletePokemonType";
import CircularButton from "./CircularButton";
import Image from "next/image";
import ActivePadType from "@/app/_types/ActivePadType";

type Props = {
   pokemon: CompletePokemonType | null;
   changeActivePad: (pad: ActivePadType) => void;
   activePad: ActivePadType;
   getNextPokemon: () => void;
   getPrevPokemon: () => void;
};

export default function PokedexControlDeck({
   pokemon,
   changeActivePad,
   activePad,
   getNextPokemon,
   getPrevPokemon,
}: Props) {
   type CircularButtonProps = {
      position: "top" | "right" | "bottom" | "left";
      pad: ActivePadType;
      onClick: () => void;
   };

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
      <div className="flex w-full gap-10 items-center pt-5 px-10">
         <div className="flex-3 aspect-square relative">
            {circularButtons.map(({ pad, position, onClick }, i) => (
               <CircularButton
                  key={i}
                  position={position}
                  pad={pad}
                  isActive={activePad === pad}
                  onClick={onClick}
                  changeActivePad={changeActivePad}
               />
            ))}
            <div className="w-1/3 absolute h-[50%] bg-black left-0 top-0 rotate-45 origin-bottom flex flex-col justify-between" />
            <div className="w-1/3 absolute h-[50%] bg-black right-0 bottom-0 rotate-45 origin-top flex flex-col justify-between" />
         </div>
         <div className="border-4 border-black bg-[#51AD60] aspect-square flex-2 relative">
            {pokemon && (
               <Image
                  src={pokemon.base.sprites.front_default}
                  alt="sprite"
                  fill
                  sizes="100%"
                  className="object-cover"
               />
            )}
         </div>
      </div>
   );
}
