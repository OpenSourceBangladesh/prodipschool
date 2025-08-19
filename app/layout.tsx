import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prodip.pages.dev"),
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "প্রদীপ স্কুল",
    "Prodip School",
    "শিক্ষা",
    "Education",
    "সুবিধাবঞ্চিত শিশু",
    "Underprivileged Children",
    "বাংলাদেশ",
    "Bangladesh",
    "সেবামূলক উদ্যোগ",
    "Service Initiative",
    "শিক্ষার আলো",
    "Light of Education",
    "দরিদ্র শিশু",
    "Poor Children",
  ],
  title: "প্রদীপ স্কুল | সুবিধাবঞ্চিত শিশুদের শিক্ষার আলো",
  description:
    "প্রদীপ স্কুল একটি সেবামূলক উদ্যোগ, যার লক্ষ্য সুবিধাবঞ্চিত ও দরিদ্র শিশুদের শিক্ষার আলো পৌঁছে দেওয়া।",
  openGraph: {
    title: "প্রদীপ স্কুল | সুবিধাবঞ্চিত শিশুদের শিক্ষার আলো",
    description:
      "প্রদীপ স্কুল একটি সেবামূলক উদ্যোগ, যার লক্ষ্য সুবিধাবঞ্চিত ও দরিদ্র শিশুদের শিক্ষার আলো পৌঁছে দেওয়া।",
    url: "https://prodip.pages.dev",
    siteName: "প্রদীপ স্কুল",
    images: [
      {
        url: "/photos_extra/og.png",
        width: 1200,
        height: 630,
        alt: "প্রদীপ স্কুল | সুবিধাবঞ্চিত শিশুদের শিক্ষার আলো",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={hindSiliguri.className}>{children}</body>
    </html>
  );
}
