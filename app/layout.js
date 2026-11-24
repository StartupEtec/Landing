import { Bricolage_Grotesque, Inter } from 'next/font/google';
import ChatWidget from '@/components/ChatWidget';
import './tokens.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

export const metadata = {
  title: 'Laborin — Conecta con profesionales e independientes',
  description:
    'Laborin conecta clientes con profesionales independientes para servicios puntuales, con perfiles verificados y pagos protegidos.',
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fc' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1020' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
