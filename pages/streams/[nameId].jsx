import React, {useState} from 'react'
import { useRouter } from "next/router";
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
    // const currentUser = Moralis.User.current();

  return (
    <>
      <h1>Welcome to my stream</h1>
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
  );
}