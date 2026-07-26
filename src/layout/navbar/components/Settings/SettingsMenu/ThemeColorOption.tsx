import MenuItem from "./MenuItem";

type Props = {
   color: string;
   onClick: () => void;
   text: string;
   dropdown?: true;
   onPointerEnter?: () => void;
   onPointerLeave?: () => void;
};

export default function ThemeColorOption({
   color,
   onClick,
   text,
   dropdown,
   onPointerEnter,
   onPointerLeave,
}: Props) {
   return (
      <MenuItem
         onClick={onClick}
         onPointerEnter={onPointerEnter}
         onPointerLeave={onPointerLeave}
      >
         <div className="w-ful flex justify-between items-center h-full">
            <div className="flex items-center gap-2 h-full">
               <div
                  style={{ backgroundColor: color }}
                  className="h-8 overflow-hidden aspect-square rounded-full border-4 border-black outline outline-outline"
               />
               <span>{text}</span>
            </div>
            {dropdown && (
               <span className="material-symbols-rounded">chevron_right</span>
            )}
         </div>
      </MenuItem>
   );
}
