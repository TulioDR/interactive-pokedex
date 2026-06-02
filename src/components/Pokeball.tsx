type Props = {};

export default function Pokeball({}: Props) {
   return (
      <div className="h-full aspect-square flex items-center justify-center">
         <div className="h-full aspect-square rounded-full bg-[#E60012] flex items-center justify-center overflow-hidden relative">
            <div className="aspect-square rounded-full bg-white w-[55%]"></div>
            <div className="absolute w-full h-[10%] bg-white top-1/2 -translate-y-1/2 left-0"></div>
            <div className="absolute aspect-square rounded-full h-[30%] bg-[#E60012] z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
         </div>
      </div>
   );
}
