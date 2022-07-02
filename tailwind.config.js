const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,tsx}'],
  darkMode: 'class',
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100vh',
    },
    extend: {
      maxHeight: {
        '50vh': '50vh',
      },
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['freight-sans-pro', ...defaultTheme.fontFamily.sans],
        serif: [' ff-tisa-web-pro', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        light: '#F6FCFB',
        accent: '#07c38f',
        primary: '#048052',
        hot: '#e83a57',
        dark: '#263154;',
        base: '#2b2d33;',
        subtle: '#666E86',
        rose: colors.rose,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            lineHeight: 1.7,
            fontFamily: ' ff-tisa-web-pro',
            a: {
              color: theme('colors.teal.700'),
              '&:hover': {
                color: theme('colors.teal.800'),
              },
              code: { color: theme('colors.sky.400') },
            },
            h1: {
              fontFamily: 'freight-sans-pro',
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.wide'),
              color: theme('colors.sky.800'),
            },
            h2: {
              fontFamily: 'freight-sans-pro',
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.wide'),
              color: theme('colors.sky.800'),
            },
            h3: {
              fontFamily: 'freight-sans-pro',
              letterSpacing: theme('letterSpacing.wide'),
              color: theme('colors.gray.800'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.rose.600'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '400',
              fontSize: '0.875rem',
              color: theme('colors.teal.700'),
              fontFamily: 'freight-sans-pro',
              marginTop: '-0.125rem',
            },
            'ul li:before': {
              backgroundColor: theme('colors.teal.700'),
              width: '0.175em',
              height: '0.175em',
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.400'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
