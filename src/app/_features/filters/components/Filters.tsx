import { FiltersProvider } from "../context/FiltersContext";
import FiltersContent from "./FiltersContent";

type Props = { foundedNumber: number };

export default function Filters({ foundedNumber }: Props) {
   return (
      <FiltersProvider>
         <FiltersContent foundedNumber={foundedNumber} />
      </FiltersProvider>
   );
}
