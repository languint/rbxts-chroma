import React from "@rbxts/react";
import { ChromaProvider, DefaultPalettes, useChroma } from "@rbxts/chroma";
import Object from "@rbxts/object-utils";

export function ThemeSwitcherButton() {
	const { theme, setTheme, currentTheme } = useChroma<typeof DefaultPalettes>();

	return (
		<frame BackgroundColor3={theme.default.background} Size={new UDim2(1,0,1,0)} Position={new UDim2(0.5, 0, 0.5, 0)} AnchorPoint={new Vector2(0.5,0.5)}>
			<uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Center"} FillDirection={"Vertical"} Padding={new UDim(0, 5)}/>
			{
				Object.keys(DefaultPalettes).map((themeName) => (
					<textbutton
						Text={`${themeName}`}
						TextColor3={theme.default.text}
						TextSize={12}
						BackgroundColor3={theme.default.surface}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Size={UDim2.fromOffset(200, 50)}
						Event={{
							MouseButton1Click: () => {
								setTheme(themeName);
							}
						}}
					>
						<uicorner CornerRadius={new UDim(0, 8)}/>
					</textbutton>
				))
			}
		</frame>
	);
}

export function App() {
	return (
		<ChromaProvider theme={DefaultPalettes} currentTheme={"mocha"}>
			<ThemeSwitcherButton />
		</ChromaProvider>
	);
}
