import getTypeColor from "@/utils/getTypeColor";

type Props = {
   types: any[];
};

export default function PreviewTypes({ types }: Props) {
   return (
      <div className="grid grid-rows-2 grid-cols-1 gap-2 flex-1 h-full">
         {types.map((type) => (
            <div
               key={type.type.name}
               style={{
                  backgroundColor: getTypeColor(type.type.name),
               }}
               className="text-white rounded-lg text-sm font-bold border-2 border-white flex items-center justify-center uppercase"
            >
               {type.type.name}
            </div>
         ))}
      </div>
   );
}
