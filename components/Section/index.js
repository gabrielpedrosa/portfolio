import styled from "styled-components";
import { Container, Title, Separator, Content, Card, Legend } from "./SectionComponents";
import Image from 'next/image';
import GlobalStyle from '../../css/styles.js';

const Section = () => {
    return (
        <>
            <Container bgColor='#20150d' fontColor='#fff'>
                <Title fontSize='28' fontColor='#fff'>Titulo</Title>
                <Separator/>
                <Content>
                    <Card>
                        <img src='images/image.jpg' style={{width: "100%", height: '100%', maxHeight: "60vh", borderRadius:"10px"}}/>
                        <Legend>Legendada para a imagem escolhida referente ao prjeto</Legend>
                    </Card>
                    <Card>
                        aqui
                    </Card>
                    <Card>
                        aqui
                    </Card>
                    <Card>
                        aqui
                    </Card>
                </Content>
            </Container>
        </>
    )
}

export default Section;