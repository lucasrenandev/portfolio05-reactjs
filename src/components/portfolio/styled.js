import styled from "styled-components";

export const Portfolio = styled.section`

`
export const Heading = styled.header`

`
export const PortfolioContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-top: 4.4rem;
`
export const PortfolioBox = styled.div`
    position: relative;
`
export const Image = styled.img`
    width: 400px;
    max-width: 100%;
    height: auto;
`
export const Layer = styled.div`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 10px;
    transition: all 0.3s ease;

    h3 {
        position: absolute;
        content: '';
        width: 100%;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        text-transform: capitalize;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1;
        opacity: 0;
        transition: all 0.35s ease;
    }

    &:hover {
        background: linear-gradient(rgba(22, 22, 22, 0.06) 0%,#9f0036 100%);
        cursor: pointer;
    }

    &:hover h3 {
        bottom: 49%;
        opacity: 1;
    }
    
`