import { Col, Container, Row, Button } from 'react-bootstrap';
const intro = () => {
    return (
        <div className="intro">
       <Container className="text-white text-center d-flex justify-content-center align-items-center">
         <Row>
           <Col>
           <div className="title">Bioskop Gratis</div>
           <div className="title">Ga Pake Karcis</div>
           <div className="introButton nt-4 text-center">
               <Button variant="dark">View All Movies</Button>
           </div>
           </Col>
         </Row>
       </Container>
     </div>
    )
}

// nt untuk margin top yang ada di button
export default intro;