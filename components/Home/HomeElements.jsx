import styled from "styled-components";

export const ScrollWindowCon = styled.div`
  overflow: auto;
  height: calc(100vh - 21vh);
`;

export const FeaturedStreamCon = styled.div`
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

export const FeaturedStream = styled.div`
  width: 576px; // 1920 / 40 = 48 x 2 = 96 x 3 = 288 x 2 = 576
  height: 324px; // 1080 / 40 = 27 x 2 = 54 x 3 = 162 x 3 = 324
  background: #000;
  position: relative;
`;

export const MiniStream = styled.div`
  width: 288px; // 1920 / 40 = 48 x 2 = 96 x 3 = 288
  height: 162px; // 1080 / 40 = 27 x 2 = 54 x 3 = 162
  background: #000;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
`;

export const FeaturedMiniStreamsCon = styled.div`
  justify-content: center;
  align-content: center;
  text-align: center;
  padding-top: 2vh;
  position: relative;
  display: flex;
  height: 10px !important;
`;