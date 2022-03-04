import React, { useState, useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Web3Provider from "../context/Web3Context";
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  if (!process.env.NEXT_PUBLIC_MORALIS_APP_ID || !process.env.NEXT_PUBLIC_MORALIS_SERVER_URL) {
    return (
      <>
        <h1>Moralis server not configured</h1>
        <h3>Consult a dev on the team for the environmental variables</h3>
      </>
    )
  }

  return (
    <>
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID || ""} 
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL || ""}
      initializeOnMount={true}
    >
      <Web3Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3Provider>
    </MoralisProvider>
    </>
    )
}

export default MyApp;
