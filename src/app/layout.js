import Header from "@/components/common/Header";
import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "practice ",
  description: "Welcome back! Please enter your details.",
  openGraph: {
    title: "practice ",
    description: "Welcome back! Please enter your details.",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "practice  Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "practice ",
    description: "Welcome back! Please enter your details.",
    images: ["/meta-image.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:pt-[113px] md:pt-[87px] pt-[74px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
