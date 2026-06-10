import CircularLens from "@/components/CircularLens";
import PowerButton from "./PowerButton";

type Props = {};

export default function PokedexTop({}: Props) {
   return (
      <div className="h-19 py-4 w-full flex items-center justify-between">
         <CircularLens />
         <PowerButton />
      </div>
   );
}
