import { FiltersProvider } from "../context/FiltersContext";
import FiltersContent from "./FiltersContent";

type Props = {};

export default function Filters({}: Props) {
   return (
      <FiltersProvider>
         <FiltersContent />
      </FiltersProvider>
   );
}
