type Props = {};

export default function PokedexTop({}: Props) {
   return (
      <div className="h-19 py-4 w-full">
         <div className="aspect-square h-12 rounded-full bg-slate-900 border-4 border-slate-200 flex items-center justify-center overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 animate-pulse relative">
               {/* Lens glint */}
               <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full blur-[1px]" />
            </div>
         </div>
      </div>
   );
}
