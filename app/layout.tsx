import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'
import '@/app/globals.css'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stellar',
  description: 'An AI Tool for Chatbot, Image generation, Video generation, Code generation, Music generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
