import { Container, Title, Separator, Content, Card, Legend, CardImage } from "./SectionComponents";

const Section = (props) => {
    return (
        <>
            <Container bgColor='#DCDCDC' fontColor='#20150d'>
                <Title fontSize='28' fontColor='#20150d'>Titulo</Title>
                <Separator bgColor='#20150d'/>
                <Content>
                    <Card bgColor='#20150d'>
                        <CardImage src='images/image.jpg' />
                        <Legend fontColor='#fff'>Legendada para a imagem escolhida referente ao prjeto</Legend>
                    </Card>
                </Content>
            </Container>
        </>
    )
}

export default Section;