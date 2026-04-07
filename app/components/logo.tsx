import Image from "next/image";

export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const heights = {
    small: 24,
    default: 32,
    large: 40,
  };

  const h = heights[size];

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Netfo"
        width={Math.round(h * 4)}
        height={h}
        className="h-auto"
        style={{ height: h, width: "auto" }}
        priority
      />
    </div>
  );
}
