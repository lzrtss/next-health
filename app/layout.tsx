import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { ThemeProvider } from '@/components/ui/theme-provider';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'NextHealth',
  description:
    'NextHealth – convenient online doctor appointment app. Find specialists, book visits, get reminders, and keep all your health records in one place. Fast booking, reliable support, and care for your health.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-grey-dark text-white font-sans antialiased',
          ${fontSans.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
