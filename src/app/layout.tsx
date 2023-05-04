import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google';
import Header from '../components/header';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal']
});

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Activeminds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" type="image/x-icon" href="favicon.ico"/>
      </head>
      <body className="font-sans font-mono bg-white">
        <Header />
        {children}
      </body>
    </html>
  )
}
