import { useState } from "react";

type Props = {
   icon: string;
   text?: string;
   favorite?: true;
   onClick: () => void;
   isActive?: boolean;
};

export default function FilterButton({
   icon,
   text,
   favorite,
   onClick,
   isActive,
}: Props) {
   const [isHovered, setIsHovered] = useState(false);

   const isOn = isActive || isHovered;

   return (
      <button
         onClick={onClick}
         onPointerEnter={() => setIsHovered(true)}
         onPointerLeave={() => setIsHovered(false)}
         className={`h-full rounded-lg flex justify-center items-center relative cursor-pointer shadow-md outline outline-outline
            ${!text ? "aspect-square" : "px-5 gap-1 flex-1 md:flex-auto"}
            ${
               isOn
                  ? favorite
                     ? "text-white bg-[#E60012]"
                     : "text-white bg-hover"
                  : favorite
                    ? "text-[#E60012] bg-white"
                    : "text-black/60 bg-white"
            }
         `}
      >
         <span
            style={{ fontVariationSettings: `'FILL' ${isActive ? 1 : 0}` }}
            className="material-symbols-rounded text-3xl!"
         >
            {icon}
         </span>
         {text && <span className="font-bold text-sm">{text}</span>}
      </button>
   );
}
