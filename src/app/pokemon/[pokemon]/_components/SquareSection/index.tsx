import SectionContainer from "../SectionContainer";

type Props = {
   icon: string;
   name: string;
   data: string;
};

export default function SquareSection({ icon, name, data }: Props) {
   return (
      <SectionContainer className="">
         <div className="w-full h-full flex flex-col items-center justify-center gap-1 text-center ">
            <div className="aspect-square flex items-center justify-center rounded-lg h-12 bg-slate-50 outline outline-outline">
               <span className="material-symbols-rounded">{icon}</span>
            </div>
            <span className="text-sm tracking-wider text-slate-500 font-medium mt-1">
               {name}
            </span>
            <span className="text-base font-bold uppercase">{data}</span>
         </div>
      </SectionContainer>
   );
}
