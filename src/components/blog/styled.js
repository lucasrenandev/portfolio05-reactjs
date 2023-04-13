import styled from "styled-components";

export const Blog = styled.section`
    background-color: var(--second-bg-color);
`
export const Heading = styled.header`

`
export const BlogContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4.4rem;
`
export const BlogBox = styled.div`
    padding: 0 0 30px 0;
    background-color: var(--bg-color);
    border-radius: 10px;
    transition: all 0.4s ease;

    h5 {
        color: var(--second-color);
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0 0 20px 15px;
        transition: all 0.4s ease;
    }

    h5:hover {
        color: var(--main-color);
    }

    &:hover {
        box-shadow: 0 20px 30px rgba(58, 28, 28, 0.07);
        cursor: pointer;
    }

`
export const Image = styled.img`
    width: 400px;
    max-width: 100%;
    height: auto;
`
export const H6 = styled.h6`
    color: var(--other-color);
    font-size: 14px;
    font-weight: 500;
    margin: 10px 0 10px 15px;
`
export const Btn = styled.a`
    color: var(--other-color);
    font-size: var(--p-font);
    font-weight: 400;
    text-transform: capitalize;
    border-bottom: 2px solid transparent;
    margin: 0 0 0 15px;
    transition: all 0.4s ease;

    &:hover {
        border-bottom: 2px solid var(--main-color);
        color: var(--main-color);
    }
`