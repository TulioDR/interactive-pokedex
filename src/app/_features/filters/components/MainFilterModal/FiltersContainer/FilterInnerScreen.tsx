type Props = {
   children: React.ReactNode;
};

export default function FilterInnerScreen({ children }: Props) {
   return (
      <div className="w-full h-full p-2 lg:p-4 bg-slate-200 border-2 border-white rounded-3xl lg:rounded-lg rounded-bl-none relative">
         {/* <div className="w-2 aspect-square rounded-full bg-black absolute top-2 left-2" />
         <div className="w-2 aspect-square rounded-full bg-black absolute top-2 right-2" />
         <div className="w-2 aspect-square rounded-full bg-black absolute bottom-2 left-2" />
         <div className="w-2 aspect-square rounded-full bg-black absolute bottom-2 right-2" /> */}
         <div className="w-full h-full bg-slate-100 rounded-2xl border-4 border-black flex overflow-hidden p-2 lg:p-5 gap-5">
            {children}
         </div>
      </div>
   );
}
