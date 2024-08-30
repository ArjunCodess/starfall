import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { DATA } from "@/app/data";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import Credit from "@/components/credit";

const inter = Inter({ subsets: ["latin"] });

const layoutMetadata = DATA.layoutMetadata;

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
            <html lang="en" suppressHydrationWarning>
                <body className={inter.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        disableTransitionOnChange
                    >
                        <div className="max-w-6xl mx-auto">
                            <Navbar />
                            {children}
                            <Credit />
                            <Separator className="mt-10" />
                            <Footer />
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}