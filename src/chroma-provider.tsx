import { ChromaContext } from "./chroma-context";
import { Themes } from "./theme";
import React, { useState } from "@rbxts/react";

interface ChromaProviderProps {
	theme: Themes;
	currentTheme: keyof Themes;
	children: React.ReactNode;
}

export const ChromaProvider: React.FunctionComponent<ChromaProviderProps> = ({
	theme,
	currentTheme: initialTheme,
	children,
}) => {
	const fallbackTheme = theme["default"];
	const [currentTheme, setCurrentTheme] = useState<keyof Themes>(initialTheme);

	const activeTheme = theme[currentTheme] ?? fallbackTheme;

	React.useEffect(() => {
		setCurrentTheme(initialTheme);
	}, [initialTheme, theme]);

	return (
		<ChromaContext.Provider
			value={{
				theme: activeTheme,
				currentTheme: currentTheme as string,
				setTheme: (v: keyof Themes) => setCurrentTheme(v),
			}}
		>
			{children}
		</ChromaContext.Provider>
	);
};

export function useChroma<T extends Themes = Themes>() {
	const context = React.useContext(ChromaContext) as
		| {
				theme: T[keyof T];
				setTheme: (themeKey: keyof T) => void;
				currentTheme: keyof T;
		  }
		| undefined;
	if (!context) error("useChroma must be used within a ChromaProvider!");
	return context;
}
