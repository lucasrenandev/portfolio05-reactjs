import styled from "styled-components";

export const Footer = styled.footer`
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`
export const CopyRight = styled.p`
    color: var(--other-color);
    font-size: 14px;
    font-weight: 400;
`
export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`
export const Link = styled.a`

`
export const Icon = styled.i`
    background-color: var(--main-color);
    color: var(--text-color);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: all 0.45s ease;

    &:hover {
        transform: translateY(-5px);
    }
`