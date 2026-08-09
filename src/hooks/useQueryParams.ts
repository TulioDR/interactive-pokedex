"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getParams = (paramType?: "new"): URLSearchParams => {
    if (paramType === "new") return new URLSearchParams();
    else return new URLSearchParams(searchParams.toString());
  };

  const routerReplace = (params: URLSearchParams) => {
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { routerReplace, getParams };
}
