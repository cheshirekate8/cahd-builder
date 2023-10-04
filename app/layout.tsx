import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local';

const hn = localFont({ src: '../public/fonts/HelveticaNeue.otf' });

export const metadata: Metadata = {
  title: 'CAHD Builder',
  description: 'A Cards Against Humanity Deck Builder created by Katie Young',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hn.className}>{children}</body>
    </html>
  )
}
