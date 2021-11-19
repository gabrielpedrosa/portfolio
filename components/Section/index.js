import styled from "styled-components";
import { Container, Title, Separator, Content } from "./SectionComponents";
import Image from 'next/image';
const Section = () => {
    return (
        <>
            <Container bgColor='#20150d' fontColor='#fff'>
                <Title fontSize='28' fontColor='#fff'>Titulo</Title>
                <Separator/>
                <Content>
                    <Image src='/../../images/image.jpg' width={300}height={300}/>
                </Content>
            </Container>
        </>
    )
}

export default Section;