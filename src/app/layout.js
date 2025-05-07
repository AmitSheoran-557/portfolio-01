import Header from "@/components/common/Header";
import "./globals.css";
import Footer from "@/components/common/Footer";
import PageLoader from "@/components/common/PageLoader";

export const metadata = {
  title: "Portfolio",
  description: "Welcome back! Please enter your details.",
  openGraph: {
    title: "Portfolio",
    description: "Welcome back! Please enter your details.",
    images: [
      {
        url: "/meta-data-img.webp",
        width: 800,
        height: 600,
        alt: "Portfolio Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Welcome back! Please enter your details.",
    images: ["/meta-data-img.webp"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:pt-[113px] md:pt-[87px] pt-[74px]">
        <PageLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
