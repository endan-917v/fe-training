import { ReactNode } from "react";
import { cn } from "../../lib/utils";

export default function Button({
  variant = "primary",
  className,
  children,
}: {
  variant?: "primary" | "mono";
  className?: string;
  children: ReactNode;
}) {
  const defaultClasses =
    "px-5 py-3 lg:px-7 lg:py-4 rounded-xl text-sm w-full lg:w-fit font-medium flex gap-2 items-center justify-center";
  const usedClasses = cn(
    {
      "bg-primary-600 text-white": variant === "primary",
    },
    {
      "bg-white text-gray-700 border border-gray-300 shadow-xs":
        variant === "mono",
    },
    defaultClasses,
    className
  );
  return <button className={usedClasses}>{children}</button>;
}
