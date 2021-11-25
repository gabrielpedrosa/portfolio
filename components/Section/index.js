import { Container, Title, Separator, Content, Card, Legend, CardImage } from "./SectionComponents";

const Section = (props) => {
    return (
        <>
            <Container bgColor={props.values.config.container.backgroundColor} fontColor={props.values.config.container.fontColor}>
                <Title fontSize={props.values.config.title.fontSize} fontColor={props.values.config.title.fontColor}>{props.values.titulo}</Title>
                <Separator bgColor={props.values.config.separator.backgroundColor}/>
                <Content>
                    {props.values.projects.items.map(item =>  
                    <Card key={item.id} bgColor={props.values.config.card.backgroundColor}>
                        <CardImage src={item.image} />
                        <Legend fontColor={props.values.config.legend.fontColor}>{item.description}</Legend>
                    </Card>
                    )}
                </Content>
            </Container>
        </>
    )
}

export default Section;