type Props = {
   color: "blue" | "yellow" | "red" | "green";
};

export default function CircularInstruction({ color }: Props) {
   return (
      <div
         className={`w-4 aspect-square border-2 border-black rounded-full
      ${color === "blue" ? "bg-cyan-500" : ""}
      ${color === "yellow" ? "bg-yellow-500" : ""}
      ${color === "red" ? "bg-red-500" : ""}
      ${color === "green" ? "bg-green-500" : ""}
   `}
      ></div>
   );
}
