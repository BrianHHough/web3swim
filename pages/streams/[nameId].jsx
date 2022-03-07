import React, {useState} from 'react'
import { asPath, pathname, useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import {
    ScrollWindowCon,
    FeaturedLiveCon,
    FeaturedLive,
} from "../../components/Stream/StreamElements";
import ReactPlayer from "react-player";

const ROUTE_POST_ID = "streams/[id]";

export default function Streams() {
  const router = useRouter();
  const { 
    isAuthenticated, 
    user, 
    setUserData, 
    userError, 
    isUserUpdating,
    refetchUserData,
    Moralis,
    Session,
    currentUser,
    currentWallet
  } = useMoralis();
  const [minutesStreamed, setMinutesStreamed] = useState(0);
  const userSesh = user?.attributes.sessionToken;

  // const accounts = web3.eth?.getAccounts();
  // const account = accounts[0];
  // console.log(JSON.stringify(accounts))

  const handleProgress = (secs) => {
    setMinutesStreamed(secs);
  };

  const minutesStreamedCalc = (minutesStreamed / 60).toFixed(1);
  // console.log(Moralis.User.current())
  // console.log(user.attributes.sessionToken)
  console.log(user)
  console.log(user?.get("ethAddress"))
  // console.log(account?.account)
  
  

  const navigate = (id) =>
    router.push({
      pathname: ROUTE_POST_ID,
      query: { id }
    });

    const userAd = user?.get("ethAddress");
    const userHan = user?.get("handle");
    const dynamicHandle = router.query.nameId;
    // const currentUser = Moralis.User.current();
    console.log(router.asPath) // renders: /streams/brianhhough
    console.log(router.pathname) // renders: /streams/[nameId]
    console.log(router.query.nameId) // renders: brianhhough
    

  return (
    <>  
      {isAuthenticated ? 
      <>
      {userHan === dynamicHandle ?
      // I am the streamer
      <>
        <h1>Your stream is live: @{userHan}!</h1>
        <p>You&apos;re live right now!</p>
      </>
      :
      // I'm not the streamer
      <>
        <h1>Welcome to @{dynamicHandle}&apos;s stream</h1>
        <p>You&apos;re watching their stream live!</p>
        {/* {userHan} */}
      </>
      }
      <ScrollWindowCon>
        <FeaturedLiveCon>
            <FeaturedLive>
                <ReactPlayer
                    // url="https://cdn.livepeer.com/hls/b3b2vu0v69tz6rem/index.m3u8"
                    url={`https://cdn.livepeer.com/hls/${currentStreamPlaybackId}/index.m3u8`}
                    // url=""
                    width="100%"
                    height="100%"
                    controls={true}
                    // playing={false}
                    // muted={true}
                    onProgress={(e) => handleProgress(e.playedSeconds)}
                >
                </ReactPlayer>
            </FeaturedLive>
            {console.log(minutesStreamed)}
            <div>
              <h3>Minutes watched: {minutesStreamedCalc}</h3>
              <button>Add to Wallet</button>
            </div>
        </FeaturedLiveCon>
    </ScrollWindowCon>
    </>
    : 
    <>
    you need to login
    </>
  }
  </>
  );
}