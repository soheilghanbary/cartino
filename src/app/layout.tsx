import '@/assets/globals.css';
import { Header } from '@/components/header';
import { QueryProvider } from '@/components/providers/query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ToastProvider } from '@/components/providers/toast-provider';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const font = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="theme-color" href="#14B8A6" />
      </head>
      <body className={font.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            enableColorScheme
            defaultTheme="light"
          >
            <main className="container mx-auto space-y-4 p-4">
              <Header />
              <section>{children}</section>
            </main>
            <ToastProvider />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
