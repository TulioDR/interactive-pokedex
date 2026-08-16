import { FiltersProvider } from "../context/FiltersContext";
import FiltersContent from "./FiltersContent";

type Props = {
  foundedNumber: number;
  showFavorites: boolean;
  toggleFavorites: () => void;
};

export default function Filters({
  foundedNumber,
  showFavorites,
  toggleFavorites,
}: Props) {
  return (
    <FiltersProvider>
      <FiltersContent
        showFavorites={showFavorites}
        toggleFavorites={toggleFavorites}
        foundedNumber={foundedNumber}
      />
    </FiltersProvider>
  );
}
