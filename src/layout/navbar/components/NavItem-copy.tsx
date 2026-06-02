type Props = {
   icon: string;
   text: string;
   isSelected?: boolean;
};

export default function NavItem({ icon, text, isSelected }: Props) {
   return (
      <div
         className={`h-full flex items-center gap-1 relative ${isSelected ? "text-[#E60012]" : "text-black/50"}`}
      >
         <span
            style={{ fontVariationSettings: `'FILL' ${isSelected ? 1 : 0}` }}
            className="material-symbols-rounded text-3xl!"
         >
            {icon}
         </span>

         <span className="font-black">{text}</span>
         {isSelected && (
            <div className="h-1 bg-[#E60012] w-full absolute bottom-0 left-0"></div>
         )}
      </div>
   );
}
