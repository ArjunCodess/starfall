import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { layoutMetadata } from "@/app/data";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(layoutMetadata.url),
    title: {
        default: layoutMetadata.metadataTitle,
        template: '',
    },
    description: layoutMetadata.metadataDescription,
    openGraph: {
        title: layoutMetadata.metadataTitle,
        url: layoutMetadata.url,
        siteName: layoutMetadata.metadataTitle,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: layoutMetadata.metadataTitle,
        card: "summary_large_image",
    },
    verification: {
        google: "",
        yandex: "",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        disableTransitionOnChange
                    >
                        <div className="max-w-6xl mx-auto h-[100vh]">
                            <Navbar />
                            {children}
                            <Separator className="mt-20" />
                            <Footer />
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}