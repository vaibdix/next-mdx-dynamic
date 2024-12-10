/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        prose: '750px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '750px',
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            color: null,
            'p, li': {
              color: 'inherit',
            },
            'h1, h2, h3, h4': {
              color: 'inherit',
              'scroll-margin-top': '6rem',
            },
            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
              },
              textDecoration: 'none',
            },
            pre: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
              color: 'var(--tw-prose-pre-code)',
            },
            code: {
              color: 'inherit',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}