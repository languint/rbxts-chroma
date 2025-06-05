import React from "@rbxts/react";
import { Themes } from "./theme";

export interface ChromaContextValue<T extends Themes = Themes> {
	theme: T[keyof T];
	setTheme: (theme: keyof T) => void;
	currentTheme: keyof T;
}

export function createChromaContext<T extends Themes>(): React.Context<ChromaContextValue<T> | undefined> {
	return React.createContext<ChromaContextValue<T> | undefined>(undefined);
}

export const ChromaContext = React.createContext<ChromaContextValue<Themes> | undefined>(undefined);
