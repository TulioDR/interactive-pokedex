import PreviewName from "./PreviewName";
import PreviewNumber from "./PreviewNumber";

type Props = {
   pokemon: any;
};

export default function DataHeader({ pokemon }: Props) {
   return (
      <div className="flex items-end gap-1">
         <PreviewName name={pokemon.base.name} />
         <PreviewNumber number={pokemon.base.id} />
      </div>
   );
}
