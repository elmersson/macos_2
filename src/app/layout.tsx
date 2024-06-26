import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import QueryProvider from '@/components/providers/query-client';
import { SFPRO } from '../assets/fonts/SFPRO';
import { StoreProvider } from '@/components/providers/store-provider';

const sfpro = SFPRO;

export const metadata: Metadata = {
  title: 'Rasmus Elmersson',
  description: 'Generated by create next app'
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={sfpro.className}>
          <StoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
              storageKey="macos-theme"
            >
              {children}
            </ThemeProvider>
          </StoreProvider>
        </body>
      </html>
    </QueryProvider>
  );
}
