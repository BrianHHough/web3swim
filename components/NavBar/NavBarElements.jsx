import styled from 'styled-components'

export const NavBarCon = styled.nav`
    height: 10vh;
    min-height: 78px;
    width: 100vw;
    background: var(--color-bg-navbar);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavBarInner = styled.div`
    position: absolute;
    top: 50%;
    /* left: 50%; */
    transform: translateY(-50%);
    display: contents;
`;

export const NavBarLogoCon = styled.div`
    float: left;
    position: absolute;
    margin-left: 30px;
    margin-top: 10px;
    top: 50%;
    transform:translateY(-50%);
    /* height: 100%; */
    width: 30vw;
    height: 100%;
    /* margin-top: -30px; */
    cursor: pointer;
    transition: 1s ease-in-out;
    &:hover {
        filter:brightness(1.9);
        transition: 1s ease-in-out;
        /* transform:scale(1.1) */
    }
    @media screen and (max-height: 780px) {
        margin-top: 0px;
    }
`;

export const LogoText = styled.h1`
    font-size: 24pt;
    line-height: 0;
`;

export const NavBarLogoRandomQuote = styled.div`
    color: var(--color-navbar-text);
    line-height: 0;
    top: 5px;
    position: relative;
`;

export const NavItems = styled.div`
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    position: absolute;
    display: flex;
    width: 30vw;
    float: right;
    justify-content: right;
`;

export const NavItemsAuthed = styled.div`
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    float: right;
    position: relative;
    /* width: 30vw; */
    display: flex;
`;

export const SearchCon = styled.div`
  width: 30vw;
  position: absolute;
  background: var(--color-bg-search);
  border-radius: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    border:none;
    outline: none;
    text-decoration: none;
    font-size: 16pt;
    padding: 10px 20px;
    background: none;
    color: var(--color-search-text);
`;

export const SearchIcon = styled.div`
    position: absolute;
    float: right;
    right: 0;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    color: black;
    margin-right: 10px;
    transition: 0.2s ease-in-out;
    &:hover {
        color: #787878;
        transition: 0.2s ease-in-out;
    }
`;

export const LoginWithMetaMask = styled.div`
  width: 130px;
  height: 45px;
  border-radius: 20px;
  background: var(--color-bg-connectwallet);
  display: flex;
  transition: 0.2s ease-in-out;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  }
  /* &:hover {
      filter: opacity(80%);
      transition: 0.2s ease-in-out;
  } */
`;

export const MetaMaskLogoCon = styled.div`
  height: 40px;
  width: 40px;
  margin-left: 10px;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
`;

export const LoginWithMetaMaskText = styled.div`
  color: #F6851D;
  position: relative;
  float: right;
  margin-right: 0px;
  right: -5px;
  height: 45px;
  line-height: 0;
  top: 50%;
  transform: translateY(-0%);
  font-weight: 800;
`;

export const NavItemButton = styled.div`
  width: 50px !important;
  height: 45px;
  border-radius: 20px;
  background: var(--color-bg-connectwallet);
  display: flex;
  transition: 0.2s ease-in-out;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  }
`;

export const NavItemButtonProfile = styled.div`
  width: 180px;
  height: 45px;
  border-radius: 20px;
  background: var(--color-bg-connectwallet);
  display: flex;
  transition: 0.2s ease-in-out;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  }
`;

export const NavItemText = styled.div`
  color: black;
  position: relative;
  float: right;
  margin-right: 0px;
  right: -5px;
  height: 45px;
  line-height: 0;
  top: 50%;
  transform: translateY(-0%);
  font-weight: 800;
`;