import Header from "@/src/componetns/header/Header";
import "./globals.css";
import Footer from "@/src/componetns/footer/Footer";

export const metadata = {
  title: "CodePenta",
  description: "CodePenta Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
