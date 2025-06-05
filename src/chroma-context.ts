import React from "@rbxts/react";
import { Theme, Themes } from "./theme";

export const ChromaContext = React.createContext<
	| {
			theme: Theme;
			setTheme: (theme: keyof Themes) => void;
			currentTheme: string;
	  }
	| undefined
>(undefined);
