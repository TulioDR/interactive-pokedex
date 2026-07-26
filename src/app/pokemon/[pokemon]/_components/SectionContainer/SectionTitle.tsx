type Props = {
   children?: React.ReactNode;
   title: string;
   icon: string;
};

export default function SectionTitle({ children, title, icon }: Props) {
   return (
      <div className="flex justify-between items-end border-b border-outline pb-1 ">
         <div className="flex items-center gap-1 text-slate-700 ">
            <span className="material-symbols-rounded ">{icon}</span>
            <div className="text-base font-bold tracking-wider">{title}</div>
         </div>
         {children}
      </div>
   );
}
