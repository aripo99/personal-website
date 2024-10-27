import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react';
import TopNavBar from '@/components/TopNavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'aripo',
  description: 'My personal website',
  icons: {
    icon: '/images/avatar.jpg',
    shortcut: '/images/avatar.jpg',
    apple: '/images/avatar.jpg',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="justify-center items-center flex p-10">
                <TopNavBar />
            </div>
            {children}
	          <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

