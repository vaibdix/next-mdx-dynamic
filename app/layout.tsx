import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://reactDocs.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'React Docs',
    template: '%s | React Docs',
  },
  description: 'Frontend developer, optimist, community builder.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
