import getTypeColor from "@/utils/getTypeColor";

type Props = {
   type: any;
};

export default function EntryType({ type }: Props) {
   return (
      <div
         style={{
            backgroundColor: getTypeColor(type.type.name),
         }}
         className="text-white rounded-lg text-sm font-bold border py-1 px-5 border-outline flex items-center justify-center uppercase"
      >
         {type.type.name}
      </div>
   );
}
