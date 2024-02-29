import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import React from "react";
import {GlobalContextProvider} from "./context/store";

// const inter = Inter({subsets: ["latin"]});
const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "No. 4 Syareb",
    description: "Calon Kepala Desa Kedawang",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <GlobalContextProvider>
            {children}
        </GlobalContextProvider>
        </body>
        </html>
    );
}
