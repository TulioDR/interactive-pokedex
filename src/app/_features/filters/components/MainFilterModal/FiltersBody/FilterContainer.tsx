type Props = {
   icon: string;
   name: string;
   children: React.ReactNode;
   className?: string;
};

export default function FilterContainer({
   icon,
   name,
   children,
   className,
}: Props) {
   return (
      <div
         className={`flex flex-col overflow-hidden gap-2 shrink-0

            ${className ? className : ""}
         `}
      >
         <div className="flex gap-1 items-center">
            <span className="material-symbols-rounded">{icon}</span>
            <div className="font-black uppercase">{name}</div>
         </div>
         <div className="flex-1 w-full bg-slate-200/50  border-2 border-outline rounded-lg overflow-hidden p-2">
            {children}
         </div>
      </div>
   );
}
