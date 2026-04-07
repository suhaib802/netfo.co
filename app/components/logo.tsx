import Image from "next/image";

export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const heights = {
    small: 20,
    default: 28,
    large: 36,
  };

  const h = heights[size];

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Netfo"
        width={140}
        height={h}
        className="h-auto max-w-[100px] sm:max-w-[130px]"
        style={{ height: "auto" }}
        priority
      />
    </div>
  );
}
