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
  const { logout, isAuthenticating } = useMoralis();
  const { 
    isAuthenticated, 
    user, 
    setUserData, 
    userError, 
    isUserUpdating,
    refetchUserData
  } = useMoralis();

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
  }, [user])

  if (!isAuthenticated)
  return (
    <Home/>
  );


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
          <Link href={`/streams/${userHan}`}><h1 style={{fontWeight: "100", marginLeft: "10px"}}>@{userHan}</h1></Link>
        </div>
        <FeatureBoxes>
          {streamingEnabled === true ? 
          <StreamingStatus>
            <StatusWrapper>
              <StatusInnerIcon>
                <VideoCameraFrontIcon 
                // color='success'
                htmlColor="#FFEE62"
                fontSize="large" style={{
                  marginRight: "10px", 
                  filter: "brightness(1)"
                  }}/>
              </StatusInnerIcon>
              <StatusInnerText>
                Streaming is Enabled
              </StatusInnerText>
            </StatusWrapper>
          </StreamingStatus>
          :
          <StreamingStatus>
            Streaming is Not Enabled
          </StreamingStatus>
        }

        {monetizationEnabled === true ? 
          <StreamingStatus>
            <StatusWrapper>
              <StatusMonetizationIcon>
                <Image 
                src={PolygonMaticLogo}
                alt="Polygon Matic Logo"                
                />
              </StatusMonetizationIcon>
              <StatusInnerText>
                Monetization is Enabled
              </StatusInnerText>
            </StatusWrapper>
          </StreamingStatus>
          :
          <StreamingStatus>
            Monetization is Not Enabled
          </StreamingStatus>
        }

        </FeatureBoxes>
        <button>Go LIVE</button>
      </Col1>
      <Col2>
      <h1>My Stream Info:</h1>
      <WalletBalanceWrapper>
        <WalletBalanceTokenIcon>
          <Image 
          src={PolygonMaticLogo}
          alt="Polygon Matic Logo"                
          />
        </WalletBalanceTokenIcon>
        <WalletBalanceTokenNum>
          {/* token balance goes here */}
          {userW3ST}
        </WalletBalanceTokenNum>
        <Snackbar 
          open={open} 
          anchorOrigin={{ 
            vertical: 'top',
            horizontal: 'right', 
        }}
          autoHideDuration={6000} 
          onClose={handleClose}
          style={{marginTop: "-50px"}}
          >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          W3S Tokens Synced!
        </Alert>
      </Snackbar>
        <SyncWallet 
            onClick={() => {
              refetchUserData();
              handleClick();
              // setW3sTokensEarned();
              // Router.reload()
            }
            } 
            disabled={isUserUpdating}>
              <SyncWalletInner>
                <UpdateIcon style={{marginLeft: "5px", marginTop: "4px", marginBottom: "-4px", position: "relative"}}/>
                Sync
              </SyncWalletInner>
        </SyncWallet>
      </WalletBalanceWrapper>

      {/* States of Deposit */}
      
        {userW3ST > 9 ? 
          <WithdrawStatusEnabled>
            <StatusWrapper>
              <StatusMonetizationIcon>
                <Image 
                src={PolygonMaticLogo}
                alt="Polygon Matic Logo"                
                />
              </StatusMonetizationIcon>
              <StatusInnerText>
                Withdraw Your W3S
              </StatusInnerText>
            </StatusWrapper>
          </WithdrawStatusEnabled>
          :
          <WithdrawStatusDisabled>
            <StatusWrapper>
              <StatusMonetizationIcon>
                <Image 
                src={PolygonMaticLogo}
                alt="Polygon Matic Logo"                
                />
              </StatusMonetizationIcon>
              <StatusInnerText>
                You Need 10+ W3S
              </StatusInnerText>
            </StatusWrapper>
          </WithdrawStatusDisabled>
        }
      
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
