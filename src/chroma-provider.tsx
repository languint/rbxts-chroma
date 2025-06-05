import { ChromaContext, ChromaContextValue } from "./chroma-context";
import { Themes } from "./theme";
import React, { useState } from "@rbxts/react";

interface ChromaProviderProps<T extends Themes = Themes> {
	theme: T;
	currentTheme: keyof T;
	children: React.ReactNode;
}

export const ChromaProvider = <T extends Themes = Themes>({
	theme,
	currentTheme: initialTheme,
	children,
}: ChromaProviderProps<T>) => {
	const fallbackTheme = theme["default"];
	const [currentTheme, setCurrentTheme] = useState<keyof T>(initialTheme);

	const activeTheme = theme[currentTheme] ?? fallbackTheme;

	React.useEffect(() => {
		setCurrentTheme(initialTheme);
	}, [initialTheme, theme]);

	return (
		<ChromaContext.Provider
			value={{
				theme: activeTheme,
				currentTheme: tostring(currentTheme),
				setTheme: (v: keyof T) => setCurrentTheme(v),
			}}
		>
			{children}
		</ChromaContext.Provider>
	);
};

export function useChroma<T extends Themes = Themes>() {
	const context = React.useContext(ChromaContext) as ChromaContextValue<T> | undefined;
	if (!context) error("useChroma must be used within a ChromaProvider!");
	return context;
}
