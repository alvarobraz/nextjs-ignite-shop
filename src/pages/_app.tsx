import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { DefaultHeader } from '@/components/Header'
import { BagProductsProvider } from '../context/BagProductsContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <BagProductsProvider>
        <DefaultHeader />
        <Component {...pageProps} />
      </BagProductsProvider>
    </Container>
  )
}