import "./globals.css";

export const metadata = {
  title: "Kuro Development",
  description: "Premium FiveM Development • Scripts • Optimization • Custom Systems",
  icons: {
    icon: "/kuro-icon.png",
    shortcut: "/kuro-icon.png",
    apple: "/kuro-icon.png",
  },
  openGraph: {
    title: "Kuro Development",
    description: "FiveM development services",
    url: "https://kurodev.store",
    siteName: "Kuro Development",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}