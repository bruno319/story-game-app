import React from "react"
import {Link} from "react-router-dom"
import AddActModal from "./AddActModal"
import {Container, Col, Row, Card} from "react-bootstrap"
import {StoryContext, StoryProvider} from "../contexts/StoryContext"
import AddImg from "../images/add-circle-green-512.png"

const Story = () => (
    <StoryProvider>
        <StoryContext.Consumer>
            {story =>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <Card bg="success"
                                  text="white"
                                  onClick={story.handleModal}
                                  style={{cursor: 'pointer'}}>
                                <Card.Img style={{height: '150px', objectFit: 'contain'}}
                                          variant="top"
                                          src={AddImg}/>
                                <Card.Body>
                                    <Card.Title>Add Act</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        {story.acts.map((act, i) =>
                            <Col sm={3} key={i}>
                                <Link to={`/act/${act.id}`}>

                                    <Card style={{'marginBottom': '20px'}}
                                          bg="secondary"
                                          text="white">
                                        <Card.Img style={{height: '150px', objectFit: 'cover'}}
                                                  variant="top"
                                                  src={act.cover}/>

                                        <Card.Body>
                                            <Card.Title>{act.title}</Card.Title>
                                        </Card.Body>
                                    </Card>

                                </Link>
                            </Col>
                        )}

                        <AddActModal context={story}/>
                    </Row>
                </Container>
            }
        </StoryContext.Consumer>
    </StoryProvider>
);

export default Story;

