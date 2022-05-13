// web ini terdiri dari 2 layouts yaitu superhero dan trending movie
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import wonderwoman from "../assets/image/Superhero/wonderwoman.jpg";
import batman from "../assets/image/Superhero/batman2022.jpg";
import avengers from "../assets/image/Superhero/avengershd.jpg";
import doctor from "../assets/image/Superhero/doctorstrange.jpg";
import dune from "../assets/image/Superhero/Dune.jpg";
import spiderman from "../assets/image/Superhero/spiderman2022.jpg";
// fungsionnya
const superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    {/* md bertujuan untuk membuat kolom */}
                    <Col md ={4} className="moviewrapper" id="superhero">
                        <Card className="movieimage">
                            <Image src={wonderwoman} alt="Wonder Woman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    {/* p itu padding dan m itu margin */}
                                    <Card.Title className="text-center">Wonder Woman</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>                        
                        </Card>       
                    </Col>
                    <Col md ={4} className="moviewrapper">
                        <Card className="movieimage">
                            <Image src={batman} alt="Batman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    {/* p itu padding dan m itu margin */}
                                    <Card.Title className="text-center">Batman</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>                        
                        </Card>       
                    </Col>
                    <Col md ={4} className="moviewrapper">
                        <Card className="movieimage">
                            <Image src={avengers} alt="Avengers Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    {/* p itu padding dan m itu margin */}
                                    <Card.Title className="text-center">Avengers Movie</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>                        
                        </Card>       
                    </Col>
                    <Col md ={4} className="moviewrapper">
                        <Card className="movieimage">
                            <Image src={doctor} alt="Doctor Strange Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    {/* p itu padding dan m itu margin */}
                                    <Card.Title className="text-center">Doctor Strange Movie</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>                        
                        </Card>       
                    </Col>
                    <Col md ={4} className="moviewrapper">
                        <Card className="movieimage">
                            <Image src={dune} alt="Dune Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    {/* p itu padding dan m itu margin */}
                                    <Card.Title className="text-center">Dune Movie</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>                        
                        </Card>       
                    </Col>
                    <Col md ={4} className="moviewrapper">
                        <Card className="movieimage">
                            <Image src={spiderman} alt="Spiderman Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    {/* p itu padding dan m itu margin */}
                                    <Card.Title className="text-center">Spiderman Movie</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>                        
                        </Card>       
                    </Col>
                </Row>
             </Container>
            
        </div>
    )
}

export default superhero;

