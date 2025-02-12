import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines a list of class names into a single string, merging and cleaning up any conflicts using `clsx` and `tailwind-merge`.
 *
 * @param {ClassValue[]} inputs - The class names or objects to be combined.
 * @returns {string} The combined and cleaned class name string.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


/**
 * Checks if the current environment is development.
 * This is useful to conditionally apply development-specific logic.
 *
 * @returns {boolean} True if the environment is 'development', otherwise false.
 */
export const inDevEnvironment =
    !!process && process.env.NODE_ENV === 'development'
