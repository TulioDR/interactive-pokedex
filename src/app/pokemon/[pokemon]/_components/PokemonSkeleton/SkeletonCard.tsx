interface Props {
  className?: string;
}

function SkeletonCard({ className }: Props) {
  return (
    <div
      className={`bg-slate-300 rounded-lg p-5 lg:p-10 shadow-md flex items-center justify-center ${className}`}
    >
      <div className="h-26 aspect-square"></div>
    </div>
  );
}

export default SkeletonCard;
