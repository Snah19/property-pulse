import './global.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};

const Layout = ({children}) => {
  return (
    <html className={poppins.className}>
      <body>
        <header>
          Header
        </header>
        {children}
        <footer>
          Footer
        </footer>
      </body>
    </html>
  );
};

export default Layout;