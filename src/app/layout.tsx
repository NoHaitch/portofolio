import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

import CustomThemeProvider from '@/providers/CustomThemeProvider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Francisco Portfolio',
  description: 'Francisco Web Portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <noscript>
          <style>{`
            .js-only { display: none; }
            .no-js-message { 
              display: block;
              padding: 1rem;
              background-color: #ffdd57;
              color: #3e3e3e;
              text-align: center;
            }
          `}</style>
          <div className='no-js-message'>
            This website works best with JavaScript enabled. Some features may
            be limited without it.
          </div>
        </noscript>

        <CustomThemeProvider>
          <div className='flex justify-center'>
            <div className='w-[95%] max-w-7xl md:w-[90%]'>
              <Header />
              <main className='grow'>{children}</main>
              <Footer />
            </div>
          </div>
        </CustomThemeProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
          document.body.classList.add('js-enabled');
        `
          }}
        />
      </body>
    </html>
  )
}
