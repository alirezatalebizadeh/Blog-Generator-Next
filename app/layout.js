import { Inter } from "next/font/google";
import "./ui/globals.css";
import "./ui/css-reset.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "سازنده محتوای مغز هوشمند",
  description: "سازنده ی محتوای مورد نیاز کاربر با هوش مصنوعی و فقط با یک کلیک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-white">{children}</body>
    </html>
  );
}
