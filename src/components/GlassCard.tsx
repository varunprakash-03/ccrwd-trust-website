import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-lg p-6 bg-card",
        hover && "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
