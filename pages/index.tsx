import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "@emotion/styled";
import ThemeToggle from "../components/Theme/ThemeToggle";
import HomeHero from "../components/Home"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
`;

const Home: NextPage = () => {
  

  return (
    <>
    <Head>
      <title>web3swim</title>
      <meta name="description" content="web3swim is a content creation monetization videoverse for web3" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/web3swim-banner-image.png" />
    </Head>
    
    <HomeHero/>
    </>
  )
}

export default Home
