export default function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white z-20 ">
      <div className="animate-spin pointer-events-none w-full aspect-square flex items-center justify-center">
        <span className="material-symbols-rounded text-6xl!">
          progress_activity
        </span>
      </div>
    </div>
  );
}
