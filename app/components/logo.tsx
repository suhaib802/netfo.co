export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizes = {
    small: "h-6",
    default: "h-8",
    large: "h-10",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizes[size]} aspect-square rounded-lg bg-brand-500 flex items-center justify-center`}>
        <svg viewBox="0 0 32 32" fill="none" className="h-[60%] w-[60%]" aria-hidden="true">
          <path d="M8 8L16 4L24 8V16L16 28L8 16V8Z" fill="white" fillOpacity="0.9" />
          <path d="M16 4L24 8V16L16 28" fill="white" fillOpacity="0.7" />
        </svg>
      </div>
      <span className={`font-semibold tracking-tight ${size === "large" ? "text-2xl" : size === "small" ? "text-lg" : "text-xl"}`}>
        netfo
      </span>
    </div>
  );
}
