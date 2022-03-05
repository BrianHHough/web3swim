import styled from "styled-components";

export const BlockieCon = styled.div`
    height: 112px;
    width: 112px;
    display: flex;
`;

export const VerifiedCheck = styled.div`
    position: relative;
    float: right;
    right: 14px;
    bottom: -96px; 
`;

export const ProfileOuterCon = styled.div`
    /* position: relative; */
    width: 100vw;
    height: 80vh;
`;

export const ProfileInnerCon = styled.div`
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
`;

export const Col1 = styled.div`
  
`;

export const Col2 = styled.div`
  margin-left: 20px;
`;

export const FeatureBoxes = styled.div`
    display: flex;
`;

export const StreamingStatus = styled.div`
    height: 50px;
    width: 260px;
    text-align: center;
    border: 2px solid #858585;
    border-radius: 20px;
    vertical-align: middle;
    display: flex;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px 2px var(--color-bg-toggle);
        /* filter: brightness(1.5); */
        transition: all 0.25s ease-in-out;
    }
`;

export const MonetizationStatus = styled.div`
    height: 50px;
    width: 400px;
    text-align: center;
    border: 2px solid #858585;
    border-radius: 20px;
    vertical-align: middle;
`;

export const StatusWrapper = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    position: relative;
    margin-top: 2px;
`;

export const StatusInnerIcon = styled.div`
    position: relative;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
    /* vertical-align: text-top; */
`;

export const StatusMonetizationIcon = styled.div`
    position: relative;
    height: 35px;
    width: 35px;
    margin-right: 10px;
    margin-top: 2px;
    filter: invert(99%) sepia(22%) saturate(4107%) hue-rotate(301deg) brightness(124%) contrast(104%);
    /* top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
    /* vertical-align: text-top; */
`;

export const StatusInnerText = styled.div`
    position: relative;
    top: 22%;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
    /* vertical-align: text-top; */
`;

export const WalletBalanceWrapper = styled.div`
    display: flex;
`;

export const WalletBalanceTokenIcon = styled.div`
    position: relative;
    height: 55px;
    width: 55px;
    margin-right: 10px;
    margin-top: 2px;
    filter: invert(99%) sepia(22%) saturate(4107%) hue-rotate(301deg) brightness(124%) contrast(104%);
    /* top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
    /* vertical-align: text-top; */
`;

export const WalletBalanceTokenNum = styled.h1`
    font-size: 50pt;
    font-weight: 100;
    line-height: 0;
    /* margin-top: 0px; */
    /* bottom: -2px; */
    position: relative;
    margin-top: 30px;
`;


export const WithdrawStatusDisabled = styled.div`
    height: 50px;
    width: 260px;
    text-align: center;
    border: 2px solid #858585;
    border-radius: 20px;
    vertical-align: middle;
    display: flex;
    transition: all 0.25s ease-in-out;
    filter: opacity(50%) saturate(0%);
    &:hover {
        box-shadow: 0 0 5px 2px var(--color-bg-toggle);
        /* filter: brightness(1.5); */
        transition: all 0.25s ease-in-out;
    }
`;

export const WithdrawStatusEnabled = styled.div`
    height: 50px;
    width: 260px;
    text-align: center;
    border: 2px solid #858585;
    border-radius: 20px;
    vertical-align: middle;
    display: flex;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px 2px var(--color-bg-toggle);
        /* filter: brightness(1.5); */
        transition: all 0.25s ease-in-out;
    }
`;

export const SyncWallet = styled.div`
  height: 55px;
  width: 55px;
  margin-left: 10px;
  border-radius: 100px;
  background: var(--color-bg-toggle);
  cursor: pointer;
  filter: opacity(50%);
  transform: scale(75%);
  transition: all 0.25s ease-in-out;
  color: var(--color-bg-footer);
  &:hover {
      transform: scale(85%);
      filter: opacity(80%);
  }
`;

export const SyncWalletInner = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 55px;
    height: 55px;
    margin-left: 10px;
`;
