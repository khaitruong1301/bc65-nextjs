import { Inter,Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"],weight:['300','400','700','900'] });


export const metadata = {
  title: "NextJs BC65",
  description: "Nextjs app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        
        {/* <Header /> */}
          {children}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script> */}
      </body>
    
    </html>
  );
}
