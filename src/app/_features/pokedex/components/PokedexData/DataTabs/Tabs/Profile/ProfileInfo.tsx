type Props = {
   infoName: string;
   infoText: string;
};

export default function ProfileInfo({ infoName, infoText }: Props) {
   return (
      <div className="flex flex-col gap-0.5">
         <span className="uppercase font-bold tracking-wider text-xs text-white/80">
            {infoName}
         </span>
         <span className="text-sm font-black text-white">{infoText}</span>
      </div>
   );
}
