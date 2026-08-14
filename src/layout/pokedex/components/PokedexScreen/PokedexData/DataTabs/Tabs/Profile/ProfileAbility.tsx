type Props = {
   item: any;
};

export default function ProfileAbility({ item }: Props) {
   return (
      <div
         key={item.ability.name}
         className={`px-2 py-0.5 rounded font-bold uppercase tracking-wide ${
            item.is_hidden ? "bg-purple-500 text-white" : "bg-white text-black"
         }`}
      >
         {item.ability.name.replace("-", " ")}
         {item.is_hidden && (
            <span className="text-[10px] ml-1 opacity-60">(HIDDEN)</span>
         )}
      </div>
   );
}
