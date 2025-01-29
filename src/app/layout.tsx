import type { Metadata } from 'next';
import { Outfit as BaseFont } from 'next/font/google';
import '@/app/globals.css';

const baseFont = BaseFont({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export { baseFont };

export const metadata: Metadata = {
  title: 'Prueba Técnica - Delosi',
  description:
    'Implementación de Prueba Técnica que permite Rotar una Matriz en sentido anti-horario',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${baseFont.className} antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
