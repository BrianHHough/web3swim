import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMoralis } from "react-moralis";
import MetaMaskLogo from "../../assets/MetaMask_Logo.webp"
import Blockie from "../../components/Profile/Blockies"

import {
  NavBarCon,
  NavBarInner,
  NavBarLogoCon,
  LogoText,
  NavBarLogoRandomQuote,
  SearchCon,
  SearchInput,
  SearchIcon,
  NavItems,
  NavItemsAuthed,
  LoginWithMetaMask,
  MetaMaskLogoCon,
  LoginWithMetaMaskText,
  NavItemButton,
  NavItemButtonProfile,
  NavItemText
} from "./NavBarElements"

// Style Imports
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LogoutIcon from '@mui/icons-material/Logout';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NavBar(): JSX.Element[] | any {
    const { 
        account,
        authenticate, 
        isAuthenticated, 
        isAuthenticating,
        logout,
        user,
        authError,
        auth
    } = useMoralis();

    const userAd = user?.get("ethAddress");
    const userUn = user?.get("username");

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  return (
    <>
    <NavBarCon>
      <NavBarInner>

        <Link href="/" passHref>
        <NavBarLogoCon>
          <LogoText>{"{"}web3swim{"}"}</LogoText>
          <NavBarLogoRandomQuote>
            All content all the time
          </NavBarLogoRandomQuote>
        </NavBarLogoCon>
        </Link>

        <SearchCon>
          <SearchInput placeholder="Search the videoverse..."/>
          <SearchIcon>
            <TravelExploreIcon fontSize='large'/>
          </SearchIcon>
        </SearchCon>

        <Snackbar 
          open={open} 
          autoHideDuration={6000} 
          onClose={handleClose}
          anchorOrigin={{ 
            vertical: 'top',
            horizontal: 'right', }}
          style={{
            marginTop: "80px"
          }}
        >
          {/* <Alert 
            onClose={handleClose} 
            severity="success" 
            sx={{ width: '100%' }}
          >
            Login successful!
          </Alert> */}
          {isAuthenticated ?
          <Alert 
            onClose={handleClose} 
            severity="success" 
            sx={{ width: '100%' }}
          >
            Login successful!
          </Alert>
          : 
          <Alert 
            onClose={handleClose} 
            severity="error" 
            sx={{ width: '100%' }}
          >
            {authError}
          </Alert>
          }
        </Snackbar>

        

        <NavItems>
          {!isAuthenticated ? 
          <>
          <LoginWithMetaMask>
            <MetaMaskLogoCon>
              {isAuthenticating ? 
                <CircularProgress 
                thickness={5.5}
                style={{color: 'orange', padding: "6px"}}/>
              : 
                <Image src={MetaMaskLogo} alt="MetaMask Logo" width="100%" height="100%">
                </Image>
              }
            </MetaMaskLogoCon>
            <LoginWithMetaMaskText
              onClick={() => authenticate(
                {signingMessage:"Sign this gas-less transaction to enter the web3swim videoverse."
              })
            }
            >
              Connect
            </LoginWithMetaMaskText>
          </LoginWithMetaMask>
          </>
          : 
          <>
          <NavItemButton 
            id="Logout Button"
            onClick={() => logout()}
              disabled={isAuthenticating}
              authError={() => handleClick()}  
          >
            <MetaMaskLogoCon>
              <LogoutIcon fontSize='large' style={{color: "black"}}/>
            </MetaMaskLogoCon>
          </NavItemButton>

          <Link href="/profile" passHref>
            <NavItemButtonProfile>
              <MetaMaskLogoCon>
                <Blockie 
                currentWallet scale={4}
                className="blockieStyle"
                />
              </MetaMaskLogoCon>
              <NavItemText
              >
                {user? 
                userAd.substring(0,6) + "..." + userAd.slice(-4)
                : 
                "0x0000.0000"
              }
              </NavItemText>
            </NavItemButtonProfile>
          </Link>
          </>
          }
          {/* <div>Test</div> */}
        </NavItems>
      </NavBarInner>
     
    </NavBarCon>
    </>
  )
}

export default NavBar