import { flags } from '@sdnsdev/env'
import { cn } from '@sdnsdev/utils'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'

import Analytics from '@/components/analytics'
import Hello from '@/components/hello'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import SignInModal from '@/components/sign-in-modal'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants'
import '@/styles/globals.css'

import Providers from './providers'

type LayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: '@sdnsdev',
    siteId: '1436386523184783369',
    creator: '@sdnsdev',
    creatorId: '1436386523184783369'
  },
  keywords: ['sdnsdev', 'SadnessNetwork', 'Sadness', 'Rust', 'Actix', 'Next.js', 'React', 'TypeScript', 'Node.js'],
  creator: 'sdnsdev',
  openGraph: {
    url: SITE_URL,
    type: 'website',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en-US'
  },
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: {
    color: '#000000'
  }
}

const calcom = localFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-title'
})

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <html
      lang='en-US'
      className={cn(GeistSans.variable, GeistMono.variable, calcom.variable, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Hello />
          <Header />
          <main id='skip-nav' className='mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8'>
            {children}
          </main>

          <Footer />
          {flags.analytics ? <Analytics /> : null}
          <SignInModal />
          <Image
            width={1512}
            height={550}
            className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
            src='/images/gradient-background-top.png'
            alt=''
            role='presentation'
            priority
          />
          <Image
            width={1512}
            height={447}
            className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2'
            src='/images/gradient-background-bottom.png'
            alt=''
            role='presentation'
            priority
          />
        </Providers>
      </body>
    </html>
  )
}

export default Layout
