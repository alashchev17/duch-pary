const config: import('tailwindcss').Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Custom brand colors
        brand: {
          primary: '#958F60',
          'primary-75': 'rgba(149, 143, 96, 0.75)',
          'primary-50': 'rgba(149, 143, 96, 0.5)',
          'primary-25': 'rgba(149, 143, 96, 0.25)',
          bg: '#233129',
          'non-accent-1': '#27372E',
          'non-accent-2': '#827D53',
        },
        primary: '#958F60',
        'dark-green': '#233129',
        'non-accent-1': '#27372E',
        'non-accent-2': '#827D53',
      },
      fontFamily: {
        spectral: ['var(--font-spectral)', 'serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        nevduplenysh: ['var(--font-nevduplenysh)', 'serif'],
      },
      fontSize: {
        'h1-desktop': [
          '48px',
          {
            lineHeight: '80%',
            fontWeight: '500',
          },
        ],
        'h2-desktop': [
          '64px',
          {
            lineHeight: '80%',
            fontWeight: '400',
          },
        ],
        'h3-desktop': [
          '32px',
          {
            lineHeight: '115%',
            fontWeight: '400',
          },
        ],
        'h4-desktop': [
          '24px',
          {
            lineHeight: '110%',
            fontWeight: '400',
          },
        ],
        'block-name': [
          '20px',
          {
            letterSpacing: '10%',
            fontWeight: '500',
          },
        ],
        menu: [
          '20px',
          {
            lineHeight: '100%',
            fontWeight: '600',
          },
        ],
        body: [
          '20px',
          {
            lineHeight: '125%',
            fontWeight: '400',
          },
        ],

        // Mobile sizes
        'h1-mobile': [
          '26px',
          {
            lineHeight: '80%',
            fontWeight: '500',
          },
        ],
        'h2-mobile': [
          '48px',
          {
            lineHeight: '80%',
            fontWeight: '400',
          },
        ],
        'h3-mobile': [
          '22px',
          {
            lineHeight: '115%',
            fontWeight: '400',
          },
        ],
        'h4-mobile': [
          '18px',
          {
            lineHeight: '110%',
            fontWeight: '400',
          },
        ],
      },
      borderRadius: {
        design: '8px',
      },
    },
  },
}

export default config
