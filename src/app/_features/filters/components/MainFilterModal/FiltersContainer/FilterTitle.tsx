type Props = {};

export default function FilterTitle({}: Props) {
   return (
      <h2
         style={{ writingMode: "vertical-lr" }}
         className="rotate-180 text-2xl xl:text-3xl 2xl:text-4xl font-black text-white tracking-tighter italic"
      >
         Pokemon Filters
      </h2>
   );
}
