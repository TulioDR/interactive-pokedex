type Props = {};

export default function PokedexTop({}: Props) {
   return (
      <div className="flex items-center justify-between mb-4 px-2 z-20">
         <div className="flex gap-4">
            <span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse border border-blue-200 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-200"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 border border-green-200"></span>
         </div>
         <div className="w-24 h-1.5 bg-black/60 rounded-full shadow-inner"></div>
      </div>
   );
}
