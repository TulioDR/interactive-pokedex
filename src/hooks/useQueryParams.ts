"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getParams = useCallback(
    (paramType?: "new"): URLSearchParams => {
      if (paramType === "new") return new URLSearchParams();
      else return new URLSearchParams(searchParams.toString());
    },
    [searchParams],
  );

  const routerReplace = useCallback(
    (params: URLSearchParams) => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname],
  );

  return { routerReplace, getParams };
}
