import styled from "styled-components";

export const About = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`
export const AboutImage = styled.figure`
    @media screen and (max-width: 800px) {
        text-align: center;
    }
`
export const Image = styled.img`
    width: 390px;
    max-width: 100%;
    height: auto;
`
export const AboutText = styled.article`

`
export const H2 = styled.h2`
    color: var(--second-color);
    font-size: var(--h2-font);
    font-weight: 700;
    line-height: 1;
`
export const H3 = styled.h3`
    color: var(--second-color);
    font-size: 1.3rem;
    letter-spacing: 2px;
    margin: 25px 0;
    line-height: 1;

    @media screen and (max-width: 400px) {
        font-size: 1.1rem;
    }
`
export const Paragraph = styled.p`
    color: var(--other-color);
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.8;
`
export const Btn = styled.a`

`