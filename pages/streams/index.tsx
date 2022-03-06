import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
`;

function AllStreamsGrid (): JSX.Element {

  return (
    <>
    <Head>
      <title>web3swim</title>
      <meta name="description" content="web3swim is a content creation monetization videoverse for web3" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/web3swim-banner-image.png" />
    </Head>
    <h1>
        All of the web3swim streams:
    </h1>
    
    </>
  )
}

export default AllStreamsGrid
