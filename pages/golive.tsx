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
import axios from "axios";

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

import videojs from "video.js";
import "videojs-contrib-hls";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import "video.js/dist/video-js.min.css";
import APIKeyForm from "../components/GoLive/APIKeyForm";
import { APP_STATES } from "../utils/types";

interface Props {
  state: any;
  setApiKey: (apiKey: string) => void;
  createStream: () => void;
}

type  MyPermissionName = PermissionName | 'clipboard-read' | 'clipboard-write';

const copyTextToClipboard = (text: string) => {
  navigator.permissions.query({ name: "clipboard-write" as PermissionName}).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(text);
    }
  });
};

const Home = dynamic(() => import("./index"));

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function GoLive() {
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
  const [w3sTokensEarned, setW3sTokensEarned] = useState(0);
  const userW3ST = user?.get("w3sTokensEarned");
  const [currentStream, setCurrentStream] = useState(0);

  const userAd = user?.get("ethAddress");
  const userUn = user?.get("username");
  const userHan = user?.get("handle");
  const userCurStr = user?.get("currentStream");
  console.log(userCurStr)
  // console.log(user?.attributes.sessionToken)
  // const userStreamEnabled = user?.get("streamingEnabled")
  // const userW3ST = user?.get("w3sTokensEarned")
  // console.log(userW3ST);
  // console.log(userW3ST)

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
    setCurrentStream(user?.get("currentStream"));
    // setW3sTokensEarned(user?.get("w3sTokensEarned"))
    // setW3sTokensEarned(userW3ST)
  }, [user]);

    // VIDEO Livepeer Section
  // const { playbackId, streamIsActive, streamKey } = state;
  const [streamKey, setStreamKey] = useState(null);
  const [streamIsActive, setStreamIsActive] = useState('');
  const [playbackId, setPlaybackId] = useState('');
  const [showRequest, setShowRequest] = React.useState(false);
  const [videoEl, setVideoEl] = React.useState(null);
  const apiKey = process.env.NEXT_PUBLIC_LIVEPEER_API_KEY;

  const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_LIVEPEER_API_KEY;

  const createStream = async () => {
    const response = await axios.post(
      "https://livepeer.com/api/stream",
      {
        name: `${userHan}`,
        profiles: [
          {
            name: "720p",
            bitrate: 2000000,
            fps: 30,
            width: 1280,
            height: 720
          },
          {
            name: "480p",
            bitrate: 1000000,
            fps: 30,
            width: 854,
            height: 480
          },
          {
            name: "360p",
            bitrate: 500000,
            fps: 30,
            width: 640,
            height: 360
          }
        ]
      },
      {
        headers: {
          authorization: "Bearer " + NEXT_PUBLIC_API_KEY
        }
      }
    );

   setStreamKey(response.data.streamKey);
   setPlaybackId(response.data.playbackId);
   setUserData({
     currentStreamStreamKey: response.data.streamKey,
     currentStreamPlaybackId: response.data.playbackId,
    })
  
  };
  


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
        <h1>My Stream Info:</h1>
        <WalletBalanceWrapper>
          Past streams

        </WalletBalanceWrapper>
       
      </Col1>
      <Col2>
        <h1>{currentStream}</h1>
        <button onClick={createStream}>Create Stream</button>
        <h4>StreamKey: {streamKey}</h4>
        <h4>PlaybackId: {playbackId}</h4>
      
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

// export default GoLive;