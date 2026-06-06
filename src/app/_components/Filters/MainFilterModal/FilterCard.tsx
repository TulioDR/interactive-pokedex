type Props = {
   fixedHeight?: true;
   text: string;
   icon?: string;
};

export default function FilterCard({ fixedHeight, text, icon }: Props) {
   return (
      <div
         className={`w-full rounded-lg outline outline-outline border-2 hover:bg-slate-600 hover:text-white border-white bg-white flex flex-col items-center justify-center
         ${fixedHeight ? "h-14" : ""}
      `}
      >
         {icon && <span className="material-symbols-rounded">{icon}</span>}
         <span className="text-xs xl:text-sm capitalize font-black leading-3">
            {text}
         </span>
      </div>
   );
}
