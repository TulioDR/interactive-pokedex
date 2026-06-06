import useThemeContext from "@/context/ThemeContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

export default function FilterInput({}: Props) {
   const [isFocused, setIsFocused] = useState(false);

   const searchParams = useSearchParams();
   const currentQuery = searchParams.get("search_query") || "";
   const [inputValue, setInputValue] = useState("");

   const router = useRouter();

   useEffect(() => {
      // If the input value matches what's already in the URL, don't do anything
      if (inputValue === currentQuery) return;

      const timer = setTimeout(() => {
         if (inputValue) {
            // Using router.replace prevents flooding the browser history back-stack
            router.replace(`/?search_query=${encodeURIComponent(inputValue)}`);
         } else {
            router.replace("/"); // Clear parameter if input is empty
         }
      }, 300);

      return () => clearTimeout(timer); // Cleanup timer if user types another character before 300ms
   }, [inputValue, currentQuery, router]);

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      window.scrollTo({ top: 0, behavior: "instant" });
   };

   const { themeColor } = useThemeContext();

   const [isHovered, setIsHovered] = useState(false);

   return (
      <div
         onPointerEnter={() => setIsHovered(true)}
         onPointerLeave={() => setIsHovered(false)}
         style={{ borderColor: isHovered || isFocused ? themeColor : "white" }}
         className={`flex-1 flex h-full outline outline-outline bg-white rounded-lg shadow-md border-2 px-2`}
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
      </div>
   );
}
