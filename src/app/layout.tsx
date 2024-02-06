import type {Metadata} from "next";
import {Inter, Roboto} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({subsets: ["latin"]});
const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "No. 0 Fulana",
    description: "Calon Kepala Desa Kedawang",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={roboto.className}>{children}</body>
        </html>
    );
}
