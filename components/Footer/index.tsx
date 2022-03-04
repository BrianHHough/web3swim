import React, { useState } from 'react';
import Link from 'next/link';
import {
  FooterCon,
  FooterInner,
  NavBarLogoCon,
  LightDarkModeCon
} from "./FooterElements"
import ThemeToggle from "../../components/Theme/ThemeToggle";

function Footer(): JSX.Element[] | any {

  return (
    <>
    <FooterCon>
      <FooterInner>

        <Link href="/" passHref>
          <NavBarLogoCon>
            <p>web3swim Ⓒ {new Date().getFullYear()} All Rights Reserved</p>
          </NavBarLogoCon>
        </Link>

        <LightDarkModeCon>
          <ThemeToggle />
        </LightDarkModeCon>

      </FooterInner>
    </FooterCon>
    </>
  )
}

export default Footer