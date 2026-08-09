import { usePagination } from "@mantine/hooks";
import PaginationButton from "./PaginationButton";
import PaginationDots from "./PaginationDots";
import useQueryParams from "@/hooks/useQueryParams";

type Props = {
  total: number;
  page: number;
};

export default function CustomPagination({ total, page }: Props) {
  const { getParams, routerReplace } = useQueryParams();
  const handlePageChange = (newPage: number) => {
    const params = getParams();
    params.set("page", newPage.toString());
    routerReplace(params);
  };

  const pagination = usePagination({
    total,
    page,
    onChange: handlePageChange,
  });

  return (
    <div className="h-14 sticky bottom-5 z-10 rounded-lg ml-auto flex shadow-md outline outline-outline border-white border-2 bg-white w-max overflow-hidden text-black/50">
      <PaginationButton
        onClick={() => pagination.previous()}
        disabled={page === 1}
      >
        <span className="material-symbols-rounded">chevron_left</span>
      </PaginationButton>

      {pagination.range.map((item, index) => {
        if (item === "dots") {
          return <PaginationDots key={`dots-${index}`} />;
        }
        const isActive = item === page;
        return (
          <PaginationButton
            key={item}
            onClick={() => pagination.setPage(item)}
            isActive={isActive}
          >
            {item}
          </PaginationButton>
        );
      })}

      <PaginationButton
        onClick={() => pagination.next()}
        disabled={page === total}
      >
        <span className="material-symbols-rounded">chevron_right</span>
      </PaginationButton>
    </div>
  );
}
