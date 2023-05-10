import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 4%;

    @media screen and (max-width: 1247px) {
        padding: 16px 2%;
    }
`
export const Logo = styled.a`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-color);
`
export const NavBar = styled.nav`
    @media screen and (max-width: 1091px) {
        position: absolute;
        top: -600px;
        right: 0;
        left: 0;
        width: 100%;
        background-color: var(--main-color);
        transition: all 0.4s ease;

        &.active {
            top: 100%;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1091px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const List = styled.li`
    position: relative;

    .nav-link {
        padding: 0 22px;
        color: var(--text-color);
        font-size: var(--p-font);
        font-weight: 500;

        &::before {
            position: absolute;
            content: '';
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--main-color);
            transition: all 0.4s ease;
        }

        &:hover::before {
            width: 100%;
        }

        @media screen and (max-width: 1091px) {
            display: block;
            width: 91.5vw;
            padding: 1rem;
            margin: 1rem;
            border-left: 2px solid var(--bg-color);
        
            &:hover {
                background-color: var(--bg-color);
                color: var(--second-color);
            }

            &::before {
                display: none;
            }
        }

    }

    @media screen and (max-width: 1091px) {
        width: 100%;
    }
`
export const HeaderBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const SignUp = styled.a`
    padding: 8px 26px;
    font-size: var(--p-font);
    font-weight: 500;
    color: var(--text-color);
    transition: all 0.4s ease;

    @media screen and (max-width: 1091px) {
        display: none;
    }
`
export const SignIn = styled.a`
    padding: 8px 26px;
    font-size: var(--p-font);
    font-weight: 500;
    color: var(--text-color);
    background-color: var(--main-color);
    border-radius: 30px;
    border: 2px solid transparent;
    transition: all 0.4s ease;

    &:hover {
        background-color: transparent;
        border: 2px solid var(--main-color);
    }
`
export const MenuIcon = styled.div`
    font-size: 30px;
    z-index: 1001;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1091px) {
        display: inline-flex;
        align-items: center;
    }
`