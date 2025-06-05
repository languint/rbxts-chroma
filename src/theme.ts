export type Theme = object;

export interface Themes<T extends Theme = Theme> {
	default: T;
	[key: string]: T | undefined; // Allow additional themes
}

export const DefaultThemes = {};

/**
 * @name createTheme
 * @description Create a new theme based upon another.
 * @param base
 * @param override
 * @returns
 */
export function createTheme(base: Theme, override: Partial<Theme>): Theme {
	return {
		...base,
		...override,
	};
}
