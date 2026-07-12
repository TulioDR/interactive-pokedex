import PreviewName from "./PreviewName";
import PreviewNumber from "./PreviewNumber";

type Props = {
   pokemon: any;
};

export default function DataHeader({ pokemon }: Props) {
   return (
      <div className="flex items-start gap-2 py-2 px-4">
         <PreviewName name={pokemon.base.name} />
         <PreviewNumber number={pokemon.base.id} />
      </div>
   );
}
