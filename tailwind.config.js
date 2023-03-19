// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  darkMode: 'class',
  theme: {
    screens: {
      sm: { min: '0px', max: '767px' },
      md: { min: '768px', max: '975px' },
      lg: { min: '976px', max: '1439px' },
      xl: { min: '1440px' }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    colors: {
      main: '#111111',
      white: '#ffffff',
      purple: {
        100: '#9845E8'
      },
      blue: {
        100: '#33D2FF',
        200: '#6CACE4'
      },
      pink: {
        100: '#DD5789'
      },
      gray: {
        100: '#C4C4C4',
        200: '#383838'
      },
      transparent: 'transparent'
    },
    width: {
      '30px': '1.875rem',
      '210px': '13.125rem',
      '214px': '13.375rem',
      '246px': '15.375rem',
      '510px': '31.875rem',
      '527px': '32.9375rem',
      '1078px': '67.375rem',
      full: '100%'
    },
    height: {
      '30px': '1.875rem',
      '60px': '3.75rem',
      '112px': '7rem'
    },
    extend: {
      // fontFamily: {
      //   sans: ['var(--primary-font)'],
      // },
      // https://vercel.com/design/color
      colors: {
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA'
        }
      },
      backgroundImage: ({ theme }) => ({
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.500'
        )}, 50px, ${theme('colors.gray.800')} 50%)`
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.pink')
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink')
          }
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white')
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white')
          }
        },
        loading: {
          '0%': {
            opacity: '.2'
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)'
          },
          to: {
            opacity: '.2'
          }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)'
          }
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1
          },
          '40%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
};
