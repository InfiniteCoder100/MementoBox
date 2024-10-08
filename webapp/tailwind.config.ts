import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', 
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary)',
        'primary-400': 'var(--primary-400)',
        'primary-alt': 'var(--primary-alt)',
        secondary: 'var(--secondary)',
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        'bg-hover': 'var(--bg-hover)',
        fg: 'var(--fg)',
        'fg-disabled': 'var(--fg-disabled)',
        border: 'var(--border)',
        invalid: 'var(--invalid)',
        disabled: 'var(--disabled)',
        watermark: 'var(--watermark)',
        'dark-bg': '#1a1a1a', 
        'dark-fg': '#f0f0f0', 
      },
    },
  },
  plugins: [],
}
export default config
