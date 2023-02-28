import resolveConfig from "tailwindcss/resolveConfig";
import { content, theme } from "../../tailwind.config.cjs";

const fullConfig = resolveConfig({
  content,
  theme,
});

export const themeColors = fullConfig.theme?.colors;
