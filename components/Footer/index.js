import FooterComponent from "./FooterComponents";

export const Footer = () => {
    return (
        <>
        <FooterComponent>
            <FooterComponent.Wrapper>
                <FooterComponent.Row>
                    <FooterComponent.Column>
                        <FooterComponent.Title>Social</FooterComponent.Title>
                        <FooterComponent.Link><FooterComponent.Icon icon='facebook'/>Facebook</FooterComponent.Link>
                        <FooterComponent.Link><FooterComponent.Icon icon='linkedin'/>Linkedin</FooterComponent.Link>
                        <FooterComponent.Link><FooterComponent.Icon icon='instagram'/>Instagram</FooterComponent.Link>
                    </FooterComponent.Column>
                </FooterComponent.Row>
            </FooterComponent.Wrapper>
        </FooterComponent>
        </>
    )
}

export default Footer;