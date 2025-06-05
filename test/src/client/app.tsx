import React from "@rbxts/react";
import { ChromaProvider, useChroma } from "@rbxts/chroma";

const myThemes = {
	light: {
		background: Color3.fromHex("#FFFFFF"),
		foreground: Color3.fromHex("#000000"),
	},
	dark: {
		background: Color3.fromHex("#000000"),
		foreground: Color3.fromHex("#FFFFFF"),
	},
	default: {
		background: Color3.fromHex("#FFFFFF"),
		foreground: Color3.fromHex("#000000"),
	},
};

export function ThemeSwitcherButton() {
	const { theme, setTheme, currentTheme } = useChroma<typeof myThemes>();

	return (
		<textbutton
			Text={`Switch Theme: ${currentTheme}`}
			TextColor3={theme.foreground}
			BackgroundColor3={theme.background}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromOffset(200, 50)}
			Event={{
				MouseButton1Click: () => {
					if (currentTheme === "dark") {
						setTheme("light");
					} else {
						setTheme("dark");
					}
				},
			}}
		/>
	);
}

export function App() {
	return (
		<ChromaProvider theme={myThemes} currentTheme={"light"}>
			<ThemeSwitcherButton />
		</ChromaProvider>
	);
}
