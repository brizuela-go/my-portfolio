"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ParticlesComponent from "@/components/Particles";

const inter = Inter({ subsets: ["latin"] });

import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Juan Brizuela</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* description */}

        <title>Juan Brizuela</title>

        <meta
          name="description"
          content="Full Stack Developer | Personal Portfolio of Juan Brizuela"
        />
        <meta name="image" content="https://www.juanbrizuela.com.mx/logo.png" />

        <meta itemProp="name" content="Juan Brizuela" />
        <meta
          itemProp="description"
          content="Full Stack Developer | Personal Portfolio of Juan Brizuela"
        />
        <meta
          itemProp="image"
          content="https://www.juanbrizuela.com.mx/logo.png"
        />

        <meta property="og:title" content="Juan Brizuela" />
        <meta
          property="og:description"
          content="Full Stack Developer | Personal Portfolio of Juan Brizuela"
        />
        <meta
          property="og:image"
          content="https://previews.dropbox.com/p/thumb/ACDYTqexJd1N8_cellMCWDhoBQUH6YoRSn_h8AfOnuoBjrAYnLj4bVXhP-pSbAnZEF8hkk9KAlR_FK-aI3NFphKgxTJRjterbgOcDwE9NB2SdaEK5ZlqpAHyvx0dxZShLrzRwq0dYISlxI54wZ2PuDRPJwvmwpKATbQZZUggzJVwq1Tx76qrLT0PDIHzHDaONtX5oN_5npzi22L9iPCxfJdk63Oy8uYFXbbva8OE3_DjDHUTcnIevCb2TA3ZS35LBtD2xibFpRTsuas0j2qrsw0P2XbwDMmo3sWkgQt0kB2l6-zfZjEjRfoIZbLs3LJnh4iKSMFaiXfOtLIt300Y-hyO/p.png"
        />
        <meta property="og:url" content="https://www.juanbrizuela.com.mx/" />
        <meta property="og:site_name" content="Juan Brizuela" />
        <meta property="og:locale" content="en_MX" />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Juan Brizuela" />
        <meta
          property="twitter:description"
          content="Full Stack Developer | Personal Portfolio of Juan Brizuela"
        />
        <meta
          property="twitter:image:src"
          content="https://previews.dropbox.com/p/thumb/ACDYTqexJd1N8_cellMCWDhoBQUH6YoRSn_h8AfOnuoBjrAYnLj4bVXhP-pSbAnZEF8hkk9KAlR_FK-aI3NFphKgxTJRjterbgOcDwE9NB2SdaEK5ZlqpAHyvx0dxZShLrzRwq0dYISlxI54wZ2PuDRPJwvmwpKATbQZZUggzJVwq1Tx76qrLT0PDIHzHDaONtX5oN_5npzi22L9iPCxfJdk63Oy8uYFXbbva8OE3_DjDHUTcnIevCb2TA3ZS35LBtD2xibFpRTsuas0j2qrsw0P2XbwDMmo3sWkgQt0kB2l6-zfZjEjRfoIZbLs3LJnh4iKSMFaiXfOtLIt300Y-hyO/p.png"
        />

        {/* link manifest json */}
        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" href="apple-icon-180.png" />

        <meta name="apple-mobile-web-app-capable" content="yes" />

        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2048-2732.jpg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2732-2048.jpg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1668-2388.jpg"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2388-1668.jpg"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1536-2048.jpg"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2048-1536.jpg"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1668-2224.jpg"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2224-1668.jpg"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1620-2160.jpg"
          media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2160-1620.jpg"
          media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1290-2796.jpg"
          media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2796-1290.jpg"
          media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1179-2556.jpg"
          media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2556-1179.jpg"
          media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1284-2778.jpg"
          media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2778-1284.jpg"
          media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1170-2532.jpg"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2532-1170.jpg"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1125-2436.jpg"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2436-1125.jpg"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1242-2688.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2688-1242.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-828-1792.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1792-828.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1242-2208.jpg"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-2208-1242.jpg"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-750-1334.jpg"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1334-750.jpg"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-640-1136.jpg"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-1136-640.jpg"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
      </head>
      {/* <AnimatePresence mode="wait"> */}
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <motion.div key={pathName} className="h-screen"> */}
          {/* <Transition /> */}
          <header>
            <Navbar />
          </header>
          <Sidebar />
          <ParticlesComponent />
          {children}
          <Analytics />
          {/* </motion.div> */}
        </ThemeProvider>
      </body>
      {/* </AnimatePresence> */}
    </html>
  );
}
