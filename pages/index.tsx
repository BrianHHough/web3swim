import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "@emotion/styled";
import ThemeToggle from "../components/Theme/ThemeToggle";


const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <main>
        <h1>web3swim</h1>
        <h4>We are ready to rock</h4>
        {/* <ThemeToggle /> */}
      </main>
    </Container>
  )
}

export default Home
