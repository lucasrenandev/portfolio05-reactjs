import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    :root {
        --bg-color: #fff;
        --second-bg-color: #f9f9f9;
        --text-color: #fff;
        --second-color: #161616;
        --main-color: #ef0454;
        --other-color: #6a6a6a;
        --big-font: 4.2rem;
        --h2-font: 2.6rem;
        --p-font: 1rem;

        @media screen and (max-width: 600px) {
            --big-font: 3rem;
            --h2-font: 2.4rem;
        }

        @media screen and (max-width: 400px) {
            --big-font: 2rem;
        }
    }

    #root {
        width: 100%;
        min-height: 100vh;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    img, a {
        display: inline-block;
    }

    span {
        color: var(--main-color);
    }

    section {
        padding: 120px 8%;
        width: 100%;

        @media screen and (max-width: 1247px) {
            padding: 90px 2%;
        }
    }

    .btn {
        background-color: var(--main-color);
        color: var(--text-color);
        padding: 15px 30px;
        border-radius: 30px;
        border: 2px solid transparent;
        font-size: 14px;
        font-weight: 600;
        margin-top: 2rem;
        transition: all 0.45s ease;
    }

    .btn:hover {
        background-color: transparent;
        border: 2px solid var(--main-color);
        color: var(--main-color);
        transform: translateY(-10px);
    }

    .heading {
        text-align: center;
    }

    .heading span {
        font-size: var(--p-font);
        font-weight: 600;
        text-transform: capitalize;
    }

    .heading h2 {
        color: var(--second-color);
        font-size: var(--h2-font);
        line-height: 1;
        margin: 10px 0 20px;
        text-transform: capitalize;
    }

    .heading p {
        color: var(--other-color);
        font-size: var(--p-font);
        font-weight: 400;
        line-height: 1.8;
    }

`