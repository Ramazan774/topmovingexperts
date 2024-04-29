import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { Container, Row, Col, Card } from "react-bootstrap";

const CardList = () => {
    return (
        <Container>
            <Row>
                <Col className='col-10'>
                    <Card className= 'tc grow bg-light-gray shadow mt-5 bg-white rounded' >
                        <Card1 />
                    </Card>
                </Col>
                <Col className='col-10'>
                    <Card className= 'tc grow bg-light-gray shadow mt-5 bg-white rounded' >
                        <Card2 />
                    </Card>
                </Col>
                <Col className='col-10'>
                    <Card className= 'tc grow bg-light-gray shadow mt-5 bg-white rounded' >
                        <Card3 />
                    </Card>
                </Col >
            </Row>
        </Container>
    )
}

export default CardList;