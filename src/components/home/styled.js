import styled from "styled-components";
import background from "../../assets/background.jpg" 

export const Home = styled.section`
    height: 100vh;
    background: url(${background}) no-repeat center center / cover;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;

    @media screen and (max-width: 1091px) {
        grid-template-columns: 1fr;
        height: 95vh;
    }

    @media screen and (max-width: 400px) {
        text-align: center;
    }
`
export const HomeText = styled.main`

`
export const H1 = styled.h1`
    font-size: var(--big-font);
    font-weight: 700;
    line-height: 1.11;
    margin-bottom: 1rem;
`
export const H4 = styled.h4`
    font-size: 1.4rem;
    font-weight: 700;

    @media screen and (max-width: 400px) {
        font-size: 1rem;
    }
`
export const Btn = styled.a`

`
export const Count = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.2rem;
    margin-top: 3rem;

    @media screen and (max-width: 400px) {
        justify-content: center;
    }
`
export const CountList = styled.li`
    font-size: var(--p-font);
    font-weight: 500;

    span {
        color: var(--bg-color);
        font-size: 1.4rem;
        font-weight: 700;
    }

    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`