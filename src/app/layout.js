import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata = {
  title: "안산 미르노래광장",
  description: "안산 노래광장 최고의 퍼블릭 가라오케",
  link1: "https://fonts.googleapis.com",
  link2: "https://fonts.gstatic.com",
  link3: "https://fonts.googleapis.com/css2?family=Nosifer&display=swap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
