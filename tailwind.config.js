/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridRowSpan: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    'row-span-1',
    'row-span-2',
    'row-span-3',
    'row-span-4',
    'row-span-5',
    'row-span-6',
    {
      pattern: /bg-(blue|sky|purple|fuchsia|pink|indigo)-(400|600)/,
      variants: ['dark'],
    },
    {
      pattern: /text-(blue|sky|purple|fuchsia|pink|indigo)-(100|600)/,
      variants: ['dark'],
    },
    {
      pattern: /border-(blue|sky|purple|fuchsia|pink|indigo)-(500|700)/,
      variants: ['dark'],
    },
  ]
}
