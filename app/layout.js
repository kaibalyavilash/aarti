import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: {
    default: "Aarti Steel — Special & Alloy Steel, Since 1979",
    template: "%s — Aarti Steel",
  },
  description:
    "Aarti Steel: 44 years of special and alloy steelmaking in Cuttack, Odisha — scrap-based, circular steel for automotive, defence, energy and rail.",
  metadataBase: new URL("https://www.aartisteelsltd.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <RevealObserver />
        <SmoothScroll />
      </body>
    </html>
  );
}
