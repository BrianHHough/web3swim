import styled from 'styled-components'

export const FooterCon = styled.div`
    height: 10vh;
    width: 100vw;
    background: var(--color-bg-navbar);
    color: var(--color-footer-text);
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
`;

export const FooterInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    width: 100vw;
`;

export const NavBarLogoCon = styled.div`
    float: left;
    position: relative;
    left: 30px;
    cursor: pointer;
    transition: 1s ease-in-out;
`;

export const LightDarkModeCon = styled.div`
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    position: absolute;
`;