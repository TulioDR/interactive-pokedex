type Props = {
   stat: any;
   index: number;
};

export default function BaseStat({ stat, index }: Props) {
   return (
      <div className="flex flex-col items-center w-full">
         <div className="flex justify-between w-full text-xs">
            <span className="text-white">{stat.name}</span>
            <span
               className={`
               ${index === 0 ? "text-emerald-400" : ""}
               ${index === 1 ? "text-red-400" : ""}
               ${index === 2 ? "text-blue-400" : ""}
               ${index === 3 ? "text-pink-400" : ""}
               ${index === 4 ? "text-purple-400" : ""}
               ${index === 5 ? "text-yellow-400" : ""} 
            `}
            >
               {stat.value}
            </span>
         </div>
         <div className="h-2 rounded-full w-full bg-black/20 border border-white/20 overflow-hidden">
            <div
               style={{ width: `${stat.percentage}%` }}
               className={`h-full
                  ${index === 0 ? "bg-emerald-500" : ""}
                  ${index === 1 ? "bg-red-500" : ""}
                  ${index === 2 ? "bg-blue-500" : ""}
                  ${index === 3 ? "bg-pink-500" : ""}
                  ${index === 4 ? "bg-purple-500" : ""}
                  ${index === 5 ? "bg-yellow-500" : ""}   
               `}
            />
         </div>
      </div>
   );
}
