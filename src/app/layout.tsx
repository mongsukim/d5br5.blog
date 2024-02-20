import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';
import { baseDomain, blogDesc, blogName } from '@/config/const';
import '@/config/globals.css';
import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';
import { Provider as ThemeProvider } from '@/layouts/theme/Provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    siteName: blogName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogName,
    description: blogDesc,
    // images: [imageURL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full scroll-smooth' suppressHydrationWarning>
      <body className={cn(inter.className, 'flex min-h-screen flex-col')}>
        <ThemeProvider>
          <Header />
          <main className='mt-[64px] flex flex-1 flex-col'>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
