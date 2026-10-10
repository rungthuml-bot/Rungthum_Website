/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-thai)', 'var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'var(--font-ibm-thai)', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: 'var(--bg-primary)',
          primary: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          subtle: 'var(--bg-surface-subtle)',
        },
        editorial: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          border: 'var(--border-color)',
          'border-subtle': 'var(--border-subtle)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          fg: 'var(--accent-fg)',
          subtle: 'var(--accent-subtle)',
        },
      },
      maxWidth: {
        content: '1240px',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '10px',
        xl: '12px',
      },
      boxShadow: {
        editorial: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'editorial-hover': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
