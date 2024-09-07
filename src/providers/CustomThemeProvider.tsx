'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from 'sonner'

export default function CustomThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      closeButton
      richColors
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}
