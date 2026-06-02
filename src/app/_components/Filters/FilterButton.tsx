type Props = {
   icon: string;
   text?: string;
   isSelected?: boolean;
   favorite?: true;
   square?: true;
};

export default function FilterButton({
   icon,
   text,
   isSelected,
   favorite,
   square,
}: Props) {
   return (
      <button
         className={`h-full rounded-lg flex justify-center items-center relative cursor-pointer bg-white shadow-md
            ${
               favorite
                  ? "text-[#E60012] hover:bg-[#E60012] hover:text-white active:bg-[#E60012] active:text-white"
                  : "text-black/60 hover:bg-slate-800 hover:text-white active:bg-slate-800 active:text-white"
            }   
            ${square ? "aspect-square" : "px-5 gap-1"}
         `}
      >
         <span
            style={{ fontVariationSettings: `'FILL' ${isSelected ? 1 : 0}` }}
            className="material-symbols-rounded text-3xl!"
         >
            {icon}
         </span>
         {text && <span className="font-bold text-sm">{text}</span>}
      </button>
   );
}
