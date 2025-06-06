export interface Palette {
	tokens: {
		[k: string]: Color3;
	};
}

export interface Palettes {
	[k: string]: Palette;
}
