import React, {useState} from 'react'
import {
    ScrollWindowCon,
    FeaturedStreamCon,
    FeaturedStream,
    FeaturedMiniStreamsCon,
    MiniStream
} from "./HomeElements"
import ReactPlayer from "react-player";

const HomeHero = () => {
    const [playingFeatured, setPlayingFeatured] = useState(true);

  return (
    <>
    <ScrollWindowCon>

        <FeaturedStreamCon>
            <FeaturedStream>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=eGUpw1SRh5s"
                    width="100%"
                    height="100%"
                    controls={true}
                    autoPlay={true}
                    muted={true}
                    playing={playingFeatured}
                >
                </ReactPlayer>
            </FeaturedStream>
        </FeaturedStreamCon>

        <FeaturedMiniStreamsCon>
            <MiniStream>
                <ReactPlayer
                    url="https://youtu.be/Yro7uSPTbcg"
                    width="100%"
                    height="100%"
                    controls={true}
                    autoPlay={true}
                    muted={true}
                    playing={playingFeatured}
                >
                </ReactPlayer>
            </MiniStream>

            <MiniStream>
                <ReactPlayer
                    url="https://youtu.be/YIZn0Ab0HJw"
                    width="100%"
                    height="100%"
                    controls={true}
                    autoPlay={true}
                    muted={true}
                    playing={playingFeatured}
                >
                </ReactPlayer>
            </MiniStream>

            <MiniStream>
                <ReactPlayer
                    url="https://youtu.be/a6-yniz3l1g"
                    width="100%"
                    height="100%"
                    controls={true}
                    autoPlay={true}
                    muted={true}
                    playing={playingFeatured}
                >
                </ReactPlayer>
            </MiniStream>

        </FeaturedMiniStreamsCon>

    </ScrollWindowCon>
    </>
  )
}

export default HomeHero;