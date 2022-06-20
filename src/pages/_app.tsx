import '@/css/tailwind.css'
import '@/css/prism.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

import PlausibleProvider from 'next-plausible'

const isDevelopment = process.env.NODE_ENV === 'development'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && <ClientReload />}
      <PlausibleProvider
        domain="jdlennoxs.com"
        selfHosted={true}
        scriptProps={{
          src: 'https://analytics.jdlennoxs.com/js/plausible.js',
        }}
      >
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </PlausibleProvider>
    </ThemeProvider>
  )
}
