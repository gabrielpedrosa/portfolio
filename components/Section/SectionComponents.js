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
    border: 1px solid ${props => props.bgColor};
    background: ${props => props.bgColor};
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;

    @media(max-width: 768px) {
        flex-direction: row;
    }

    @media(max-width: 480px) {
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
    background-color: ${props => props.bgColor};
    overflow: hidden;
    
    @media(max-width: 768px) {
        width: 48%;
        max-height: 80vh;
    }

    @media(max-width: 480px) {
        width: 100%;
        max-height: 80vh;
    }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%; 
  max-height: 30vh;
  min-height: 200px;
  border-radius:10px;
  border-bottom-left-radius: 0px; 
  border-bottom-right-radius: 0px;
  transition: 0.7s;

  &:hover{
    transform: scale(1.05);
  }
`;

export const Legend = styled.h3`
    text-align: center;
    padding: 10px;
    color: ${props => props.fontColor};
`;