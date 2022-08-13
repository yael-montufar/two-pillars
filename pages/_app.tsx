import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import GlobalStyles from './../styles/GlobalStyles'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faShieldCheck } from '@fortawesome/pro-solid-svg-icons'

library.add(
  faLock,
  faTruckFast,
  faShieldCheck,
)

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
