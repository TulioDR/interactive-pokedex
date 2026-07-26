import useThemeContext from "@/context/ThemeContext";

type Props = {
   autoHeight?: true;
   text: string;
   icon?: string;
   onClick: () => void;
   isActive: boolean;
};

export default function FilterCard({
   autoHeight,
   text,
   icon,
   onClick,
   isActive,
}: Props) {
   const { themeColor } = useThemeContext();

   return (
      <button
         style={{ backgroundColor: isActive ? themeColor : undefined }}
         onClick={onClick}
         className={`w-full rounded-lg cursor-pointer outline outline-outline border-2 hover:bg-slate-600 hover:text-white bg-white border-white flex flex-col items-center justify-center
         ${autoHeight ? "h-14 2xl:h-auto" : "h-14"}
         ${isActive ? "text-white" : ""}
      `}
      >
         {icon && <span className="material-symbols-rounded">{icon}</span>}
         <span className="text-xs xl:text-sm capitalize font-black leading-3">
            {text}
         </span>
      </button>
   );
}
