import { Card, Container, Row, Col, Image } from "react-bootstrap";
import fantastic from "../assets/image/Trending/Fantastic.jpg";
import uncharted from "../assets/image/Trending/Uncharted2022.png";
import morbius from "../assets/image/Trending/Morbius.jpg";
import doctor from "../assets/image/Trending/doctorstrange.jpg";
import dune from "../assets/image/Trending/Dune.jpg";
import spiderman from "../assets/image/Trending/spiderman2022.jpg";
// fungsionnya
const Trendingmovie = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIE</h1>
                <br/>
                <Row>
                    {/* md bertujuan untuk membuat kolom */}
                    <Col md ={4} className="moviewrapper" id="trending">
                        <Card className="movieimage">
                            <Image src={fantastic} alt="Fantastic Beast Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    {/* p itu padding dan m itu margin */}
                                    <Card.Title className="text-center">Fantastic Beast</Card.Title>
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
                            <Image src={uncharted} alt="Uncharted Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    {/* p itu padding dan m itu margin */}
                                    <Card.Title className="text-center">Uncharted </Card.Title>
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
                            <Image src={morbius} alt="Morbius Movie" className="images"/>
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

export default Trendingmovie;

