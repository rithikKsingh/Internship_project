import { Container,Row,Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
    {/* fluid is responsible for the full width of the container */}
    <Container fluid>
        <Row className="mt-5">
            <Col className="bg-dark text-white text-center py-5">Copyright &copy; Best Online Shop</Col>
        </Row>
    </Container>
    </footer>
  )
}

export default Footer;