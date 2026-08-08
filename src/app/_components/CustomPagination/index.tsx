import { usePagination } from "@mantine/hooks";
import PaginationButton from "./PaginationButton";
import PaginationDots from "./PaginationDots";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  total: number;
  page: number;
};

export default function CustomPagination({ total, page }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const page = searchParams.get("page");
    const parsedPage = Number(page);
    const isValidPage =
      page !== null && Number.isInteger(parsedPage) && parsedPage > 0;

    if (!isValidPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [searchParams]);

  const pagination = usePagination({
    total,
    page,
    onChange,
    initialPage: 1,
    siblings: 1,
    boundaries: 1,
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
