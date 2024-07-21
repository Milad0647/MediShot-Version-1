import Localfont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header/Header";
import 'swiper/css';
const SFProDisplay = Localfont({
  src: [
    {
      path: "../public/fonts/SFPRODISPLAYBLACK.otf",
      weight: "700",
      style: "Black",
    },
    {
      path: "../public/fonts/SFPRODISPLAYBOLD.otf",
      weight: "600",
      style: "Bold",
    },
    {
      path: "../public/fonts/SFPRODISPLAYREGULAR.otf",
      weight: "500",
      style: "Regular",
    },
    {
      path: "../public/fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "400",
      style: "Medium",
    },
    {
      path: "../public/fonts/SFPRODISPLAYLIGHT.otf",
      weight: "300",
      style: "Light",
    },
  ],
});
export async function generateMetadata() {
  return {
    metadataBase: new URL("https://medi-shots.vercel.app/"),
    title: "MediShots",
    description:
      "Picture Perfect Care, Simplified",
    keywords:
      "Picture Perfect Care, Simplified",
    author: "MediShots",
    robots: {
      index: false,
      follow: false,
    },
    icons: [
      {
        rel: "icon",
        type: "image/jpg",
        sizes: "32x32",
        url: "/Logo/Logo.svg",
      },
      {
        rel: "icon",
        type: "image/jpg",
        sizes: "16x16",
        url: "/Logo/Logo.svg",

      },
      {
        rel: "apple-touch-icon",
        type: "image/jpg",
        sizes: "76x76",
        url: "/Logo/Logo.svg",

      },
    ],
    openGraph: {
      images: "/Logo/Logo.svg",
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SFProDisplay.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
