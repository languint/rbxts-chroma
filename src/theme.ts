export type Theme = object;

export type Themes<T extends string = string, V = Theme> = {
	[K in T]: V;
};
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
