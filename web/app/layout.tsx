import type { Metadata } from 'next';
import './globals.css';
import RevealInit from '@/components/RevealInit';

export const metadata: Metadata = {
  title: 'Testlify',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <RevealInit />
      </body>
    </html>
  );
}
