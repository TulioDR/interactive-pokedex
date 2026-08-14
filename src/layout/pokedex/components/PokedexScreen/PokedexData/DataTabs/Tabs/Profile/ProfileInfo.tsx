type Props = {
   infoName: string;
   infoText: string;
};

export default function ProfileInfo({ infoName, infoText }: Props) {
   return (
      <div className="flex flex-col gap-0.5 bg-black/20 p-2 rounded-lg border border-white/20">
         <span className="uppercase font-bold tracking-wider text-xs text-white/80">
            {infoName}
         </span>
         <span className="text-sm font-black text-white capitalize">
            {infoText}
         </span>
      </div>
   );
}
