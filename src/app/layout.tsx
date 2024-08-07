import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./styles/globals.sass";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "URL shortener",
    description: "a basic url shortener application",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="de" className="dark">
            <body className={inter.className + " h-full"}>
            <NextUIProvider className="dark text-foreground bg-background h-full">
                {/*<Header></Header>*/}
                <main className="h-full">{children}</main>
                {/*<Footer></Footer>*/}
            </NextUIProvider>
            </body>
        </html>
    );
}
