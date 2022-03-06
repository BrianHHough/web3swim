import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "@emotion/styled";
import ThemeToggle from "../components/Theme/ThemeToggle";
import HomeHero from "../components/Home"
import Blockie from "../components/Profile/Blockies"
import { useMoralis } from "react-moralis";
import dynamic from "next/dynamic";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PolygonMaticLogo from "../assets/polygon-matic_Logo.png"
import Router from 'next/router'
import UpdateIcon from '@mui/icons-material/Update';
import Link from 'next/link';

import {
  ProfileOuterCon,
  ProfileInnerCon,
  Col1,
  Col2,
  BlockieCon,
  VerifiedCheck,
  FeatureBoxes,
  StreamingStatus,
  StatusWrapper,
  StatusInnerIcon,
  StatusMonetizationIcon,
  StatusInnerText,
  WalletBalanceTokenIcon,
  WalletBalanceTokenNum,
  WalletBalanceWrapper,
  WithdrawStatusDisabled,
  WithdrawStatusEnabled,
  SyncWallet,
  SyncWalletInner,
} from "../components/Profile/ProfileElements";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Home = dynamic(() => import("./index"));

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
`;

export default function Profile () {
  const { 
    isAuthenticated, 
    user, 
    setUserData, 
    userError, 
    isUserUpdating,
    refetchUserData,
    Moralis
  } = useMoralis();
  const [numOfUsers, setNumOfUsers] = useState('');

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [handle, setHandle] = useState();
  const [streamingEnabled, setStreamingEnabled] = useState();
  const [monetizationEnabled, setMonetizationEnabled] = useState();
  const [w3sTokensEarned, setW3sTokensEarned] = useState(0)
  const userW3ST = user?.get("w3sTokensEarned")

  const userAd = user?.get("ethAddress");
  const userUn = user?.get("username");
  const userHan = user?.get("handle");
  console.log(user?.attributes.sessionToken)
  // const userStreamEnabled = user?.get("streamingEnabled")
  // const userW3ST = user?.get("w3sTokensEarned")
  // console.log(userW3ST);
  console.log(userW3ST)

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSave = () => {
    setUserData({
        email: email === "" ? undefined : email,
        handle: handle === "" ? undefined : handle
    })
  }

  useEffect(() => {
    // if (!user) return null;
    setUsername(user?.get("username"))
    setEmail(user?.get("email"))
    setHandle(user?.get("handle"))
    setStreamingEnabled(user?.get("streamingEnabled"))
    setMonetizationEnabled(user?.get("monetizationEnabled"))
    // setW3sTokensEarned(user?.get("w3sTokensEarned"))
    setW3sTokensEarned(userW3ST)
  }, [user]);

  // Moralis.Cloud.run('get_nr_users').then(res=> {
  //   // JSON.stringify turns response into string
  //   const users = JSON.stringify(res)
  //   console.log(users)
  //   setNumOfUsers(users)
  // }).catch(err=> console.log(err))
  


  return (
    <>
    <Head>
      <title>web3swim</title>
      <meta name="description" content="web3swim is a content creation monetization videoverse for web3" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/web3swim-banner-image.png" />
    </Head>

    <ProfileOuterCon>
    <ProfileInnerCon>
    {user? 
    <>
      <Col1>
        <BlockieCon>
          <Blockie 
            currentWallet scale={14}
            className="blockieStyleProfile"
          /> 
          <VerifiedCheck>
            <CheckCircleOutlineIcon 
              fontSize='large' htmlColor="#FFED62" 
            /> 
          </VerifiedCheck>
        </BlockieCon>
        <div style={{display: "flex", height: "60px"}}>
          <h1>Hi, my name is: </h1>
          <h1 style={{fontWeight: "100", marginLeft: "10px"}}>
            {userAd.substring(0,6) + "..." + userAd.slice(-4)}</h1>
        </div>
        <div style={{display: "flex", height: "60px", marginBottom: "20px"}}>
          <h1>My handle is: </h1>
          {userHan === undefined ? 
          <></>
          :
          <Link href={`/streams/${userHan}`} passHref><h1 style={{fontWeight: "100", marginLeft: "10px"}}>@{userHan}</h1></Link>
        }
          </div>
       
      </Col1>
      <Col2>
      <h1>My Stream Info:</h1>
      <WalletBalanceWrapper>
        Past streams

      </WalletBalanceWrapper>
      
      </Col2>
    
    </>
    :
    <div>Try Logging in</div>
    }
    </ProfileInnerCon>
    </ProfileOuterCon>
    </>
  )
}
