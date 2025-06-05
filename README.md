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
import { ChromaProvider, useChroma, DefaultThemes, createTheme } from "@rbxts/chroma";

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
        <ChromaProvider theme={myThemes} currentTheme="light">
            <MyComponent />
        </ChromaProvider>
    );
}

function MyComponent() {
    const { theme, setTheme } = useChroma<typeof myThemes>();

    return (
        <frame
            BackgroundColor3={theme.background}
            Event={{
                MouseButton1Click: () => setTheme(myThemes.dark),
            }}
        >
            <textlabel Text="Hello, Chroma!" TextColor3={theme.foreground} />
        </frame>
    );
}
```

---

## 🧩 API

### `ChromaProvider`

Wrap your app to provide theme context.

**Props:**

- `theme: Themes` — An object containing your theme variants (e.g., `light`, `dark`, `gray`, etc.).
- `currentTheme: keyof Themes` — The key of the active theme.
- `children: React.ReactNode` — Your app's components.

### `useChroma()`

A hook to access the current theme and a setter.

**Returns:**

- `theme: Theme` — The current theme object.
- `setTheme: (theme: Theme) => void` — Function to update the theme.

### `createTheme(base, override)`

Utility to create a new theme by overriding properties of a base theme.

**Example:**

```ts
const darkTheme = createTheme(lightTheme, { background: Color3.fromHex("#000000") });
```

---

## 📝 Notes

- You can add as many theme variants as you want (e.g., `"gray"`, `"solarized"`, etc.).
- If an invalid `currentTheme` is provided, ChromaProvider will fall back to the `default` theme and warn.
- All theme tokens should be present in each theme object for consistency.

---

## 🛠️ License

MIT
