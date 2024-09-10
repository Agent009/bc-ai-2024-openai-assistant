import Image from "next/image";
import { Inter } from "next/font/google";
import "@app/globals.css";
import { assistantId } from "@app/assistant-config";
import Warnings from "@components/warnings";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assistants API Quickstart - Encode AI Bootcamp (Q3 2024)",
  description: "A quickstart template using the Assistants API with OpenAI",
  icons: {
    icon: "/openai.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <Image className="logo" src="/openai.svg" alt="OpenAI Logo" width={100} height={100} />
      </body>
    </html>
  );
}
