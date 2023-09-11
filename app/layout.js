import "./globals.css";

export const metadata = {
  title: "CodePenta",
  description: "CodePenta Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
