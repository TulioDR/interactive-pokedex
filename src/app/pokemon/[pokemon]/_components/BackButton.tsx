import useThemeContext from "@/context/ThemeContext";
import useQueryParams from "@/hooks/useQueryParams";
import Link from "next/link";

function BackButton() {
  const { themeColor } = useThemeContext();

  const { getParams } = useQueryParams();
  const params = getParams();

  return (
    <Link
      href={`/?${params.toString()}`}
      style={{ backgroundColor: themeColor }}
      className="h-14 px-5 flex justify-center items-center gap-2 outline outline-outline rounded-full cursor-pointer text-white hover:bg-white! shadow-md hover:text-black"
    >
      <span className="material-symbols-rounded text-xl!">arrow_back</span>
      <span className="text-sm">Go back</span>
    </Link>
  );
}

export default BackButton;
