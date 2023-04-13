import styled from "styled-components";

export const Contact = styled.section`
    background-color: var(--second-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const H2 = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
`
export const Form = styled.form`
    width: 400px;
    max-width: 100%;
    height: auto;
    position: relative;
    background-color: var(--bg-color);
    border-radius: 30px;
    padding: 25px 10px;
`
export const Input = styled.input`
    position: absolute;
    top: 14px;
    left: 10px;
    border: none;
    max-width: 140px;
    outline: none;
    font-size: 13px;
    font-weight: 400;
`
export const Btn = styled.a`
    position: absolute;
    top: 6px;
    right: 6px;
    background-color: var(--main-color);
    color: var(--text-color);
    padding: 8px 14px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 400;
`