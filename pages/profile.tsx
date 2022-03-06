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
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PolygonMaticLogo from "../assets/polygon-matic_Logo.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@mui/material';

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
  const [handle, setHandle] = useState('');
  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');
  const [channelTag, setChannelTag] = useState('');
  const [streamingEnabled, setStreamingEnabled] = useState();
  const [monetizationEnabled, setMonetizationEnabled] = useState();
  const [w3sTokensEarned, setW3sTokensEarned] = useState(0)
  const userW3ST = user?.get("w3sTokensEarned")

  const userAd = user?.get("ethAddress");
  const userUn = user?.get("username");
  const userHan = user?.get("handle");
  const userChName = user?.get("channelName");
  const userChDes = user?.get("channelDescription");
  const userChTag = user?.get("channelTag");
  // const userStreamEnabled = user?.get("streamingEnabled")
  // const userW3ST = user?.get("w3sTokensEarned")
  // console.log(userW3ST);
  console.log(userW3ST)

  const [open, setOpen] = useState(false);
  const [editingHandle, setEditingHandle] = useState(false);
  const [editingChannelName, setEditingChannelName] = useState(false);
  const [editingChannelDescription, setEditingChannelDescription] = useState(false);
  const [editingChannelTag, setEditingChannelTag] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // Edit Handle
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredHandle = event.target.value;
    setHandle(enteredHandle);
  };

  // Edit Channel Name
  const inputHandler2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredChannelName = event.target.value;
    setChannelName(enteredChannelName);
  };

  // Edit Channel Description
  const inputHandler3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredChannelDescription = event.target.value;
    setChannelDescription(enteredChannelDescription);
  };

  // Edit Channel Tag
  // const options = ["Tech", "NonTech"]
  const inputHandler4 = (e: React.ChangeEvent<HTMLInputElement>
    // , nativeEvent: any, isDefaultPrevented: any, isPropagationStopped: any, persist: any
    ) => {
    const enteredChannelTag = e.target.value;
    setChannelTag(enteredChannelTag);
  };

  const handleSave = () => {
    setUserData({
        // email: email === "" ? undefined : email,
        handle: handle === "" ? undefined : handle,
        channelName: channelName === "" ? undefined : channelName,
        channelDescription: channelDescription === "" ? undefined : channelDescription,
        channelTag: channelTag === "" ? undefined : channelTag
    })
  }

  useEffect(() => {
    // if (!user) return null;
    setUsername(user?.get("username"))
    setEmail(user?.get("email"))
    setHandle(user?.get("handle"))
    setChannelName(user?.get("channelName"))
    setChannelDescription(user?.get("channelDescription"))
    setChannelTag(user?.get("channelTag"))
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

        {/* Edit Handle */}
        <div style={{display: "flex", height: "60px"}}>
          <h1>My handle is: </h1>
          <h1 style={{fontWeight: "100", marginLeft: "10px"}}>
        {!editingHandle ?
          <div style={{cursor: "pointer"}}>
            @
            <Link href={`/streams/${userHan}`} passHref>
              {userHan}
            </Link>
          </div>
          :
          <input 
            value={handle}
            onChange={inputHandler}
            ></input>
          }
          </h1>
          {!editingHandle ?
          <AppRegistrationIcon 
            style={{
              marginTop: "24px",
              marginLeft: "10px",
              cursor: "poitner"
              }}
            onClick={() => setEditingHandle(true)}
            />
            :
            <CheckCircleIcon
              style={{
                marginTop: "24px",
                marginLeft: "10px",
                cursor: "poitner"
                }}
              onClick={() => {
                setEditingHandle(false);
                handleSave();
              }
              }
            />
            }
        </div>
        
        {/* Channel Title */}
        <div style={{display: "flex", height: "60px", marginBottom: "-8px"}}>
          <h2>Channel Title: </h2>
          <h2 style={{fontWeight: "100", marginLeft: "10px"}}>
        {!editingChannelName ?
          <div style={{cursor: "pointer"}}>
              {userChName}
          </div>
          :
          <input 
            value={channelName}
            onChange={inputHandler2}
            ></input>
          }
          </h2>
          {!editingChannelName ?
          <AppRegistrationIcon 
            style={{
              marginTop: "24px",
              marginLeft: "10px",
              cursor: "poitner"
              }}
            onClick={() => setEditingChannelName(true)}
            />
            :
            <CheckCircleIcon
              style={{
                marginTop: "24px",
                marginLeft: "10px",
                cursor: "poitner"
                }}
              onClick={() => {
                setEditingChannelName(false);
                handleSave();
              }
              }
            />
            }
        </div>

        {/* Channel Description */}
        <div style={{display: "flex", height: "60px", marginBottom: "-10px"}}>
          <h4>Description: </h4>
          <h4 style={{fontWeight: "100", marginLeft: "10px"}}>
        {!editingChannelDescription ?
          <div style={{cursor: "pointer"}}>
              {userChDes}
          </div>
          :
          <input 
            value={channelDescription}
            onChange={inputHandler3}
            ></input>
          }
          </h4>
          {!editingChannelDescription ?
          <AppRegistrationIcon 
            style={{
              marginTop: "15px",
              marginLeft: "10px",
              cursor: "poitner"
              }}
            onClick={() => setEditingChannelDescription(true)}
            />
            :
            <CheckCircleIcon
              style={{
                marginTop: "24px",
                marginLeft: "10px",
                cursor: "poitner"
                }}
              onClick={() => {
                setEditingChannelDescription(false);
                handleSave();
              }
              }
            />
            }
        </div>

        {/* Channel Tag */}
        <div style={{display: "flex", height: "60px", marginBottom: "20px"}}>
          <h4>Tag: </h4>
          <h4 style={{fontWeight: "100", marginLeft: "10px"}}>
        {!editingChannelTag ?
          <div style={{cursor: "pointer"}}>
              {userChTag}
          </div>
          :
          <FormControl style={{background: "white", width: "200px", marginTop: "-15px"}}>
            <InputLabel>Categories</InputLabel>
              <Select 
              value={channelTag}
              // onChange={(e) => inputHandler4(e)}
              onChange={(e) => {setChannelTag(e.target.value)}}
              // options={options}
              >
                <MenuItem value={"Anime"}>Anime</MenuItem>
                <MenuItem value={"Creative"}>Creative</MenuItem>
                <MenuItem value={"Education"}>Education</MenuItem>
                <MenuItem value={"Live"}>Live</MenuItem>
                <MenuItem value={"Sports"}>Sports</MenuItem>
                <MenuItem value={"Tech"}>Tech</MenuItem>
              </Select>
          </FormControl>
          // <input 
          //   value={userChTag}
          //   onChange={inputHandler4}
          //   ></input>
          }
          </h4>
          {!editingChannelTag ?
          <AppRegistrationIcon 
            style={{
              marginTop: "15px",
              marginLeft: "10px",
              cursor: "poitner"
              }}
            onClick={() => setEditingChannelTag(true)}
            />
            :
            <CheckCircleIcon
              style={{
                marginTop: "24px",
                marginLeft: "10px",
                cursor: "poitner"
                }}
              onClick={() => {
                setEditingChannelTag(false);
                handleSave();
              }
              }
            />
            }
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
        {/* <button>Go LIVE</button> */}
      </Col1>
      <Col2>
      <h1>My Wallet Balance:</h1>
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
