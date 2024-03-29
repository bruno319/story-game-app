import React from 'react'
import {Redirect} from 'react-router-dom'
import {NewUserProvider, NewUserContext} from '../contexts/NewUserContext'
import {Form, Button, Col, Container, Row} from 'react-bootstrap'

const NewUser = () => {
    return (
        <NewUserProvider>
            <NewUserContext.Consumer>
                {newUser =>
                    newUser.redirect ? (
                        <Redirect to="/"/>
                    ) : (
                        <Container>
                            <Row style={{marginTop: "250px", color: '#111'}}>
                                <Col md={{span: 6, offset: 3}}>
                                    <Form>
                                        <Form.Group controlId="formUser">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter username"
                                                value={newUser.username}
                                                onChange={newUser.handleUsername}
                                                isInvalid={newUser.messageInvalidUsername !== ""}/>
                                            <Form.Control.Feedback type="invalid">
                                                {newUser.messageInvalidUsername}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={newUser.password}
                                                onChange={newUser.handlePassword}
                                                isInvalid={newUser.messageInvalidPassword !== ""}/>
                                        </Form.Group>

                                        <Form.Group controlId="formConfirmPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Confirm Password"
                                                value={newUser.confirmedPassword}
                                                onChange={newUser.handleConfirmedPassword}
                                                isInvalid={newUser.messageInvalidPassword !== ""}/>
                                            <Form.Control.Feedback type="invalid">
                                                {newUser.messageInvalidPassword}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                    </Form>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={newUser.saveUser}>
                                        Sign Up
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    )
                }
            </NewUserContext.Consumer>
        </NewUserProvider>
    )
};

export default NewUser