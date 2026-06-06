type Props = {};

export default function CircularLens({}: Props) {
   return (
      <div className=" h-12 aspect-square relative group/lens">
         <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-200 flex items-center justify-center overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 animate-pulse relative">
               {/* Lens glint */}
               <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full blur-[1px]" />
            </div>
         </div>
         {/* Secondary status lights next to lens */}
         <div className="absolute -right-2 top-0 flex flex-col gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
         </div>
      </div>
   );
}
