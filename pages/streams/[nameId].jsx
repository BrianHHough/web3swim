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
    Moralis
  } = useMoralis();
  const [minutesStreamed, setMinutesStreamed] = useState(0);

  const handleProgress = (secs) => {
    setMinutesStreamed(secs);
  };

  const minutesStreamedCalc = (minutesStreamed / 60).toFixed(1);
  
  

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
      <>
        <h1>Your stream is live: @{userHan}!</h1>
      </>
      :
      <>
        <h1>Welcome to @{dynamicHandle}&apos;s stream</h1>
      </>
      }
      <>
        
      </>
      {/* <h3> Your account is: {userAd}</h3> */}
      <ScrollWindowCon>
        <FeaturedLiveCon>
            <FeaturedLive>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=eGUpw1SRh5s"
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