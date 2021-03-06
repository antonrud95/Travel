module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '35px',
        xl: '48px',
       },
       borderRadius: {
         '5px': '5px',
         '8px': '8px'
       },
       borderWidth: {
        '3': '3px'
       },
       textColor: {
         'black': '#0F2137',
         'purple': '#8D448B',
         'main': '#02073E',
         'grey': '#566272',
         'blue': '#006DFE',
         'hovered': 'rgba(255, 255, 255, 0.6)'
       },
       padding: {
         5: '5px',
         8: '8px',
         13: '13px',
         15: '15px',
         20: '20px',
         25: '25px',
         30: '30px',
         35: '35px',
         40: '40px',
         42: '42px',
         45: '45px',
         56: '56px',
         60: '60px',
         70: '70px',
         95: '95px',
         100: '100px',
         110: '110px',
         131: '131px',
         150: '150px',
         200: '200px',
         230: '230px',
         270: '270px',
         372: '372px'
       },
       margin: {
        4: '4px',
        6: '6px',
        11: '11px',
        xxs: '10px',
        xs: '20px',
        16: '16px',
        24: '24px',
        25: '25px',
        sm: '30px',
        32: '32px',
        35: '35px',
        45: '45px',
        xl: '48px',
        58: '58px',
        64: '64px',
        xxl: '70px',
        82: '82px',
        100: '100px',
        108: '108px',
        120: '120px',
        160: '160px',
        223: '223px',
        50: '-50%'
       },
       letterSpacing: {
         'button': '-0.16px',
         'title': '-1.5px'
       },
       borderColor: {
        'purple': '#8D448B'
       },
       backgroundColor: {
         'hero': '#F6F8FB',
         'purple': '#8D448B',
         'grey': '#DADADA',
         'tutorials': '#F8FAFC',
         'blue': '#1B7DFF',
         'black-block': 'rgba(21, 24, 36, 0.6)',
         'dark': '#0E1D28'
       },
       height: {
         354: '354px',
         283: '283px',
         200: '200px',
         170: '170px',
         31: '31px',
         xl: '55px',
         md: '28px',
         50: '50px',
         66: '66px',
         2: '2px'
       },
       boxShadow: {
         'input': '0px 10px 50px rgba(48, 98, 145, 0.08)'
       },
       maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        1410: '1410px',
        1326: '1326px',
        1298: '1298px',
        1262: '1262px',
        1232: '1232px',
        1146: '1146px',
        1118: '1118px',
        822: '822px',
        650: '650px',
        633: '633px',
        626: '626px',
        580: '580px',
        521: '521px',
        546: '546px',
        500: '500px',
        470: '470px',
        415: '415px',
        410: '410px',
        386: '386px',
        310: '310px',
        297: '297px',
        265: '265px',
        260: '260px',
        230: '230px',
        135: '135px',
        100: '100px',
        66: '66px',
        50: '50px'
       },
       maxHeight: {
         230: '230px',
         60: '60px',
         50: '50px',
         28: '28px'
       },
       fontFamily: {
        'play': ['Playfair Display', 'serif'],
       },
       minWidth: {
        597: '597px'
       },
       width: {
         '32%': '32%',
         110: '110px',
         260: '260px',
         597: '597px',
         50: '50px',
         '49%': '49%'
       },
       zIndex: {
        '-10': '-10',
         '1000': 1000
       }
    },
  },
  variants: {
    extend: {
      margin: ['hover'],
      transitionProperty: ['hover', 'focus'],
      transitionDelay: ['hover', 'focus'],
    },
  },
  plugins: [],
}
