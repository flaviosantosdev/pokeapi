'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head>
        <title>Toolz.me | PokeAPI</title>
      </Head>
      <body>
        <ChakraProvider resetCSS theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
