import { Roboto } from '@next/font/google';
import { extendTheme } from '@mui/joy/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = extendTheme({
  fontFamily: {
    body: roboto.style.fontFamily,
  },
});

export default theme;
