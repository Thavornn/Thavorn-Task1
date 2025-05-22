import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import FooterComponent from "@/components/FooterComponent";
import NavigationComponent from "@/components/NavigationComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="  min-w-full container mx-auto">
          <NavigationComponent />

          {children}
        </div>
        <FooterComponent />
      </body>
    </html>
  );
}
