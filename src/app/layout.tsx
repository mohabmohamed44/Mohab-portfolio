import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollingBackground } from "@/components/scrolling-background";
import { StructuredData } from "@/components/structured-data";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const createSafeUrl = (url?: string) => {
  if (!url) return new URL("https://localhost:3000");
  try {
    return new URL(url);
  } catch {
    return new URL("https://localhost:3000");
  }
};

export const metadata: Metadata = {
  metadataBase: createSafeUrl(DATA.url),
  title: {
    default: `${DATA.name} - Software Engineer & Full-Stack Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Mohab Mohammed",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Python Developer",
    "Django Developer",
    "Competitive Programming",
    "Software Development",
    "Cairo Egypt",
    "Portfolio",
    "Web Development",
    "AI Engineer",
    "Artificial Intelligence",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${DATA.name} - Software Engineer & Full-Stack Developer`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Software Engineer`,
      },
    ],
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
    card: "summary_large_image",
    title: `${DATA.name} - Software Engineer & Full-Stack Developer`,
    description: DATA.description,
    creator: "@MohabMo55",
    images: ["/me.png"],
  },
  verification: {
    google: "-1UewMSv-xSV49yjN0iiQ_0_7DydAAgFmBFs1RIDtSA",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider delayDuration={0}>
            <ScrollingBackground />
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
