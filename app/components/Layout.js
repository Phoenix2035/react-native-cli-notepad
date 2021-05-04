import React from "react";
import {
    Container,
    Header,
    Footer,
    FooterTab,
    Left,
    Right,
    Body,
    Title
} from "native-base"


function Layout({ children, left, right, title, footer }) {
    return (
        <Container>
            <Header>
                <Left>{left}</Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>{right}</Right>
            </Header>
            {children}
            <Footer>
                <FooterTab>{footer}</FooterTab>
            </Footer>
        </Container>
    )
}

export default Layout;
