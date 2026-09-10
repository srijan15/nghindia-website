import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nghindia.com"),
  title: "NGH Hypnotherapy Certification in India | Dr. Maruti Sharma",
  description:
    "NGH Consulting Hypnotist certification in India by Dr. Maruti Sharma, RCI-registered Clinical Psychologist (Assoc.). Online, in person, or retreat.",
  openGraph: {
    images: ["/images/og-nghindia.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-nghindia.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrument.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)]">
        <ScrollProgress />
        <CustomCursor />
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
