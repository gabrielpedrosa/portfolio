import styled from "styled-components";
import { Container, Title, Separator, Content, Card, Legend } from "./SectionComponents";
import Image from 'next/image';
import sectionStyle from './Style/section.module.css';

const Section = () => {
    return (
        <>
            <Container bgColor='#20150d' fontColor='#fff'>
                <Title fontSize='28' fontColor='#fff'>Titulo</Title>
                <Separator/>
                <Content>
                    <Card>
                        <img src='images/image.jpg' className={sectionStyle.cardImage}/>
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