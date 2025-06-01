import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Layouts/Layout'
import { store } from '../store'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function App({ Component, pageProps }: AppProps) {
    return (
     <Provider store = {store}>
          <Layout>
               <Component {...pageProps} />
          </Layout>
     </Provider>
            )
}
