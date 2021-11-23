import styled from "styled-components";


export const Container = styled.div`
    margin: 0;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    background-color: ${props => props.bgColor};
    color: ${props => props.fontColor};
    box-sizing: border-box;

    
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
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    display: flex;
    margin: 10px 0;
    width: 30%;
    min-width: 30%;
    min-height: 200px;
    border-radius: 15px;
    flex-direction: column;
    background-color: #fff;
    overflow: hidden;
    
    @media(max-width: 768px) {
        width: 100%;
        max-height: 80vh;
    }
`;

export const Legend = styled.h3`
    text-align: center;
    padding: 10px;
    color: #000;

`;