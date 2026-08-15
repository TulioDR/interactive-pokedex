import SkeletonCard from "./SkeletonCard";

function PokemonSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-5 w-full pb-5">
      <div className="grid lg:grid-cols-2 gap-5">
        <SkeletonCard className="min-h-90 lg:min-h-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} className="min-h-80" />
        ))}
        <SkeletonCard className="sm:col-span-2 min-h-80" />
      </div>
      <SkeletonCard className="" />
    </div>
  );
}

export default PokemonSkeleton;
