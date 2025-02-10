import { Montserrat, Inter, Manrope } from 'next/font/google';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import PulseButton from './components/PulseButton';
import "./globals.css";

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });
const inter = Inter({ subsets: ['latin'], weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${inter.className}`}>
        <Navbar />
        {/* <PulseButton /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
