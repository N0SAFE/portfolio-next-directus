import { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind.config";

const config: Config = {
    content: [
        "./**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./providers/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            animationDuration: {
                "6s": "6s"
            },
            colors: {
                firstColor: "#00d9ff",
                secondColor: "#5252e0",
                hover: "rgb(0, 217, 255, 0.7)",
                hoverSecond: "rgb(80, 82, 224, 0.7)"
            }
        }
    },
    darkMode: "class",
    presets: [sharedConfig]
};
export default config;
