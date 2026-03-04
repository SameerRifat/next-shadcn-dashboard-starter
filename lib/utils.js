// lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


/**
 * getPortalProps — returns the dir prop for portal-rendered elements.
 * Required workaround for tw-animate-css logical slide animation bug.
 *
 * Usage:
 *   import { getPortalProps } from "@/lib/utils"
 *   <DropdownMenuContent {...getPortalProps(dir)}>
 */
export function getPortalProps(dir) {
    return dir !== "ltr" ? { dir } : {}
}