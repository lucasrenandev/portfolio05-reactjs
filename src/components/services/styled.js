import styled from "styled-components";

export const Services = styled.section`
    background-color: var(--second-bg-color);
`
export const Heading = styled.header`

`
export const ServicesContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4.4rem;

    @media screen and (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    }
`
export const ServiceBox = styled.div`
    background-color: var(--bg-color);
    padding: 50px 20px;
    border-radius: 5px;
    transition: all 0.4s ease;

    &:hover {
        box-shadow: 0 20px 30px rgba(58, 28, 28, 0.07);
        cursor: pointer;
    }
`
export const Icon = styled.i`
    color: var(--main-color);
    font-size: 2.5rem;
`
export const H4 = styled.h4`
    color: var(--second-color);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
    margin: 10px 0 20px;
    text-transform: capitalize;
`
export const Paragraph = styled.p`
    color: var(--other-color);
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.8;
`