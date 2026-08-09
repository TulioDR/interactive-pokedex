import { useSearchParams } from "next/navigation";

export default function useCurrentPage(filteredPokemons: any[]) {
  const searchParams = useSearchParams();

  const rawPage = searchParams.get("page");
  const parsedPage = Number(rawPage);
  const currentPage =
    rawPage && Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  const itemsPerPage = 30;
  const totalPages = Math.max(
    Math.ceil(filteredPokemons.length / itemsPerPage),
    1,
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const displayedPokemons = filteredPokemons.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return { totalPages, displayedPokemons, currentPage };
}
