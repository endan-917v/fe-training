import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function borrowed from shadcn-ui library for formatting Tailwind classes
 * @param inputs 
 * @returns String
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}