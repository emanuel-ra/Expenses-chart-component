/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: theme => ({
        'DM-Sans':['DM Sans', 'sans-serif']
      }),
      backgroundColor: theme => ({
        'soft-red':'var(--soft-red)' ,
        'cyan':'var(--cyan)' ,
        'dark-brown':'var(--dark-brown)' ,
        'medium-brown':'var(--medium-brown)' ,
        'cream':'var(--cream)' ,
        'very-pale-orange':'var(--very-pale-orange)' ,
      }),
      textColor:theme=>({
        'dark-brown':'var(--dark-brown)' ,
        'medium-brown':'var(--medium-brown)' ,
      }),
      borderColor:theme=>({
        'medium-brown':'var(--medium-brown)' ,
      }),
    },
  },
  plugins: [],
}
