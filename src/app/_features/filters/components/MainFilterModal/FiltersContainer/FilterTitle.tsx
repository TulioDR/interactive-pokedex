type Props = {};

export default function FilterTitle({}: Props) {
   return (
      <h2
         style={{ writingMode: "vertical-lr" }}
         className="rotate-180 text-5xl font-black text-white tracking-tighter italic"
      >
         Pokemon Filters
      </h2>
   );
}
