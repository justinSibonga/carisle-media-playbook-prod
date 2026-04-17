import Image from "next/image";

interface TeamMemberImageProps {
  src: string;
  name: string;
  size?: "sm" | "lg";
  priority?: boolean;
}

/**
 * Optimized Team Member Image Component
 * 
 * Server Component - images are optimized and served from server
 * for faster initial load times
 */
export function TeamMemberImage({
  src,
  name,
  size = "sm",
  priority = false,
}: TeamMemberImageProps) {
  const dimensions = size === "lg" ? 180 : 130;

  return (
    <div className={`relative ${size === "lg" ? "h-[170px]" : "h-[130px]"}`}>
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover object-top"
        sizes={`${dimensions}px`}
        priority={priority}
      />
    </div>
  );
}
