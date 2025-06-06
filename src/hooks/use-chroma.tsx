import { source } from "@rbxts/vide";
import { DefaultPalettesType, DefaultPaletteTokens } from "../chroma-palettes";
import { Palette, Palettes } from "../types/palette";

export interface ChromaContext<P extends Palettes = DefaultPalettesType> {
	currentPalette: keyof P;
	tokens: Palette["tokens"];
}

const chromaState = source<ChromaContext>();

export function useChroma(client?: ChromaContext) {
	const value = chromaState();
	if (value !== undefined) return value;

	assert(client !== undefined, "No palette has been set.");
	chromaState(client);
	return client;
}
