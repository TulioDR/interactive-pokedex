import PreviewName from "./PreviewName";
import PreviewNumber from "./PreviewNumber";

type Props = {
   pokemon: any;
};

export default function DataHeader({ pokemon }: Props) {
   return (
      <div className="flex flex-col">
         <PreviewName name={pokemon.name} />
         <PreviewNumber number={pokemon.id} />
      </div>
   );
}
