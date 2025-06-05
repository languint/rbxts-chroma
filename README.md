# 🎨 @rbxts/chroma

A lightweight theming system for creating context-aware UI themes in Roblox with [@rbxts/react](https://github.com/littensy/rbxts-react).

---

## ✨ Features

- Easy integration with `@rbxts/react`
- `ChromaProvider` to wrap your app with theme context
- `useChroma()` hook for accessing and updating the current theme
- Supports many custom modes (e.g., dark, light, gray, etc.)
- Utility to create themes based on overrides

---

## 📦 Installation

```bash
npm install @rbxts/chroma
```

---

## 🚀 Quickstart

```tsx
import React from "@rbxts/react";
import { ChromaProvider, useChroma, createTheme } from "@rbxts/chroma";

// Define your themes
const myThemes = {
    light: {
        background: Color3.fromHex("#FFFFFF"),
        foreground: Color3.fromHex("#000000"),
        // ...other tokens
    },
    dark: {
        background: Color3.fromHex("#000000"),
        foreground: Color3.fromHex("#FFFFFF"),
        // ...other tokens
    },
    default: {
        background: Color3.fromHex("#FFFFFF"),
        foreground: Color3.fromHex("#000000"),
        // ...other tokens
    },
};

export function App() {
    return (
        <ChromaProvider<typeof myThemes> theme={myThemes} currentTheme="light">
            <MyComponent />
        </ChromaProvider>
    );
}

function MyComponent() {
    const { theme, setTheme, currentTheme } = useChroma<typeof myThemes>();

    return (
        <frame
            BackgroundColor3={theme.background}
            Event={{
                MouseButton1Click: () => setTheme("dark"),
            }}
        >
            <textlabel Text={`Hello, Chroma! Current: ${currentTheme}`} TextColor3={theme.foreground} />
        </frame>
    );
}
```

Chroma comes with `DefaultPalettes` for an easier quickstart, see the example below with a theme switcher.
```tsx
import React from "@rbxts/react";
import { ChromaProvider, DefaultPalettes, useChroma } from "@rbxts/chroma";
import Object from "@rbxts/object-utils";

export function ThemeSwitcherButton() {
    const { theme, setTheme, currentTheme } = useChroma<typeof DefaultPalettes>();

    return (
        <frame
            BackgroundColor3={theme.default.background}
            Size={new UDim2(1, 0, 1, 0)}
            Position={new UDim2(0.5, 0, 0.5, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)}
        >
            <uilistlayout
                HorizontalAlignment={"Center"}
                VerticalAlignment={"Center"}
                FillDirection={"Vertical"}
                Padding={new UDim(0, 5)}
            />
            {Object.keys(DefaultPalettes).map((themeName) => (
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
                        },
                    }}
                >
                    <uicorner CornerRadius={new UDim(0, 8)} />
                </textbutton>
            ))}
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
```

---

## 📝 Notes

- You can add as many theme variants as you want (e.g., `"gray"`, `"solarized"`, etc.).
- If an invalid `currentTheme` is provided, ChromaProvider will fall back to the `default` theme and warn.
- All theme tokens should be present in each theme object for consistency.

---

## 🛠️ License

MIT
