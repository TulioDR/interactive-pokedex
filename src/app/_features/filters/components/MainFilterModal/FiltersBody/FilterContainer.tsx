type Props = {
   children: React.ReactNode;
   icon: string;
   name: string;
   className?: string;
   innerClassName?: string;
   description: string;
};

export default function FilterContainer({
   children,
   icon,
   name,
   className = "",
   innerClassName = "",
   description,
}: Props) {
   return (
      <div className={`flex flex-col overflow-hidden gap-2  ${className}`}>
         <div className="flex items-end gap-1">
            <div className="flex gap-1 items-center">
               <span className="material-symbols-rounded">{icon}</span>
               <div className="font-black uppercase">{name}</div>
            </div>

            <div className="text-xs opacity-70 -translate-y-0.5">
               ({description})
            </div>
         </div>

         <div
            className={`flex-1 w-full bg-slate-200/50 border-2 border-outline rounded-lg overflow-hidden p-2 grid gap-2 ${innerClassName}`}
         >
            {children}
         </div>
      </div>
   );
}
