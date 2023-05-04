const createRange = (start, end, step = 1, formatter = (v) => v) =>
  new Array(Math.floor((end - start) / step) + 1)
    .fill()
    .map((_, i) => i * step + start)
    .reduce((acc, val) => {
      acc[val] = `${formatter(val)}`
      return acc
    }, {})

module.exports = {
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      current: 'currentColor',
      transparent: 'transparent',
    },
    stroke: (theme) => theme('colors'),
    fill: (theme) => theme('colors'),
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
    },
    screens: {
      '2xs': '320px',
      xs: '375px',
      s: '425px',
      m: '768px',
      l: '1024px',
      xl: '1440px',
      '2xl': '1536px',
      ...createRange(400, 2500, 50, (val) => `${val}px`),
    },
    fontSize: createRange(0, 200, 1, (val) => `${val / 10}rem`),
    lineHeight: createRange(0, 160, 1, (val) => val / 100),
    spacing: createRange(0, 1600, 1, (val) => `${val / 10}rem`),
    borderWidth: createRange(0, 100, 1, (val) => `${val}px`),
    letterSpacing: createRange(0, 10, 1, (val) => `${val / 100}em`),
    opacity: createRange(0, 100, 5, (val) => val / 100),
    zIndex: createRange(0, 10),
    transitionDuration: {
      DEFAULT: '500ms',
      ...createRange(0, 2000, 50, (val) => `${val}ms`),
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.23, 1, 0.32, 1)',
      'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
      'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
      'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
      'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
      'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
      'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
      'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    extend: {
      borderRadius: createRange(0, 100, 1, (val) => `${val / 10}rem`),
    },
  },
  plugins: [],
}
