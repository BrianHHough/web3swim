import styled from "styled-components";

export const ScrollWindowCon = styled.div`
  overflow: auto;
  height: calc(100vh - 21vh);
`;

export const FeaturedLiveCon = styled.div`
  justify-content: center;
  align-content: center;
  text-align: center;
  padding-top: 2vh;
  position: relative;
  display: flex;

  @media (max-height: 540px) {
      width: 100%;
  }
`;

export const FeaturedLive = styled.div`
  width: 750px; // 1920 / 40 = 48 x 2 = 96 x 3 = 288 x 2 = 576
  height: 424px; // 1080 / 40 = 27 x 2 = 54 x 3 = 162 x 3 = 324
  background: #000;
  position: relative;
`;