type Props = {
   children: React.ReactNode;
};

export default function PokedexInnerScreen({ children }: Props) {
   return (
      <div className="scan-target-zone flex flex-col w-full flex-1 rounded-bl-[64px] rounded-tr-lg bg-gray-200 p-4 pb-0 relative overflow-hidden border-2 border-white">
         <div className="bg-linear-to-br from-cyan-400 to-blue-600 border-4 relative border-black rounded-lg flex-1 w-full overflow-hidden">
            {children}
         </div>
         <div className="h-16 w-full flex justify-end py-4">
            <div className="aspect-square h-full flex flex-col justify-between">
               {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-full h-1 bg-black" />
               ))}
            </div>
         </div>
      </div>
   );
}
