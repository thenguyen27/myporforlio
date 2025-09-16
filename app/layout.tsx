import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devtrails.io.vn"),
  title: "Nguyen Tran - Developer Portfolio",
  description:
    "Passionate developer focused on Clean Code, System Performance, and Optimization Techniques",
  openGraph: {
    title: "Nguyen Tran - Developer Portfolio",
    description:
      "Passionate developer focused on Clean Code, System Performance, and Optimization Techniques",
    url: "https://devtrails.io.vn/",
    siteName: "DevTrails",
    images: [
      {
        url: "/images/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Nguyen Tran Portfolio Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Tran - Developer Portfolio",
    description:
      "Passionate developer focused on Clean Code, System Performance, and Optimization Techniques",
    images: ["/images/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="shortcut icon" sizes="32x32" href="/resources/images/logo.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}