import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '500', '600', '700', '800']});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.description}`
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/favicon.svg',
      href: '/favicon.svg'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
