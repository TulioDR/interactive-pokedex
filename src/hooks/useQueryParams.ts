"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParam = (
    paramsToUpdate: Record<string, string | number | null | undefined> | string,
    value?: string | number | null,
  ) => {
    // 1. Clonamos los parámetros actuales de la barra de navegación
    const currentParams = new URLSearchParams(searchParams.toString());

    // siempre va a ser una string por lo tanto puedo eliminar el objeto
    // 2. Si nos pasan un objeto con varios params: setParam({ page: 2, scanned: 'pikachu' })
    if (typeof paramsToUpdate === "string") {
      if (value === null || value === undefined) {
        currentParams.delete(paramsToUpdate);
      } else {
        currentParams.set(paramsToUpdate, String(value));
      }
    }
    // 4. Ejecutamos el router.replace automáticamente
    const queryString = currentParams.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });
  };

  /**
   * Elimina un parámetro específico preservando el resto
   * Ejemplo: deleteParam("scanned")
   */
  const deleteParam = (paramName: string) => {
    setParam(paramName, null);
  };

  return { setParam, deleteParam };
}
