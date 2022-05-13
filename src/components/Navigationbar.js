import {Navbar, Container, Nav} from "react-bootstrap";

const Navigationbar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">Movies</Navbar.Brand>
            <Nav>
                <Nav.Link href="#trending">Trending Movie</Nav.Link>
                <Nav.Link href="#superhero">Superhero Movie</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigationbar