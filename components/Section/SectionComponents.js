import styled from "styled-components";


export const Container = styled.div`
    margin: 0;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    background-color: ${props => props.bgColor};
    color: ${props => props.fontColor};
`;

export const Title = styled.h2`
    margin: 0;
    padding: 20px 30px;
    font-size: ${props => props.fontSize}px;
    color: ${props => props.fontColor};
    `;

export const Separator = styled.hr`
    width: 100%;
    border: 1px solid #fff;
    background: #fff;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;
`;

export const Card = styled.div`

`;