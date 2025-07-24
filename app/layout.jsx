import './global.css';
import 'photoswipe/dist/photoswipe.css';

import AuthProvider from '@/components/providers/auth-provider';
import { GlobalProvider } from '@/context/global-context';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { poppins } from '@/fonts';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';

export const metadata = {
  title: {
    template: "%s | PropertyPulse",
    default: "PropertyPulse"
  },
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};

const Layout = ({children}) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html className={poppins.className}>
          <body className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default Layout;