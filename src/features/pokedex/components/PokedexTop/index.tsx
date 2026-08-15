interface Props {
  isPowerOn: boolean;
}

export default function PokedexTop({ isPowerOn }: Props) {
  return (
    <div className="flex items-center justify-between mb-2 2xl:mb-4 px-2 z-20">
      <div className="flex gap-2 2xl:gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="w-3 aspect-square relative rounded-full overflow-hidden"
          >
            <span
              className={`absolute inset-0 rounded-full border duration-1000
              ${i === 0 && isPowerOn ? "bg-green-400 border-green-200 animate-pulse" : ""}  
              ${i === 1 && isPowerOn ? "bg-yellow-400 border-yellow-200" : ""}
              ${isPowerOn ? "" : "bg-black/80"}
              `}
            ></span>
          </div>
        ))}
      </div>
      <div className="w-20 2xl:w-24 h-1.5 bg-black/60 rounded-full shadow-inner"></div>
    </div>
  );
}
