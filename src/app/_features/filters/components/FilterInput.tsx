import useThemeContext from "@/context/ThemeContext";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useFiltersContext from "../context/FiltersContext";
import useQueryParams from "@/hooks/useQueryParams";

type Props = {
  foundedNumber: number;
};

export default function FilterInput({ foundedNumber }: Props) {
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get("search_query") || "";

  const { themeColor } = useThemeContext();
  const { routerReplace, getParams } = useQueryParams();
  const { inputValue, setInputValue } = useFiltersContext();

  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inputValue === currentQuery) return;
    const timer = setTimeout(() => {
      const params = getParams();
      params.set("page", "1");
      if (inputValue) {
        params.set("search_query", inputValue);
      } else {
        params.delete("search_query");
      }
      routerReplace(params);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, currentQuery, routerReplace, getParams]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      style={{ borderColor: isHovered || isFocused ? themeColor : "white" }}
      className={`md:flex-1 flex h-14  outline outline-outline bg-white rounded-lg shadow-md border-2 px-2`}
    >
      <div className="h-full aspect-square flex items-center justify-center">
        <span className="material-symbols-rounded text-3xl! text-black/50">
          search
        </span>
      </div>
      <input
        type="text"
        placeholder="Search pokémons..."
        className="flex-1 h-full bg-transparent outline-none text-sm text-black/80 placeholder:text-black/30 font-bold"
        value={inputValue}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="h-full flex items-end">
        <span className="text-xs opacity-30  italic font-black">
          {`${foundedNumber} founded`}
        </span>
      </div>
    </div>
  );
}
