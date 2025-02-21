import { Providers } from "@/components";
import ScrollToTop from "@/components/marketing/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
                <Providers>
                    <Toaster richColors theme="light" position="top-center" />
                    {children}
                    <ScrollToTop />
                </Providers>
            </body>
        </html>
    );
};
