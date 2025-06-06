import { source } from "@rbxts/vide";
import { DefaultPalettesType } from "../chroma-palettes";
import { Palettes } from "../types/palette";

export interface ChromaContext<P extends Palettes = DefaultPalettesType> {
	currentPalette: keyof P;
}

const chromaState = source<ChromaContext>();

export function useChroma(client?: ChromaContext) {
	const value = chromaState();
	if (value !== undefined) return value;

	assert(client !== undefined, "No palette has been set.");
	chromaState(client);
	return client;
}
