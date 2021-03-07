import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import userPortal from './userPortal.PNG'
import physPortal from './physPortal.PNG'

import toast, { Toaster } from 'react-hot-toast'

function About() {
    return (
        <Container>
            <Row>
                <h1>Welcome to Iago!</h1>
            </Row>
            <Row style={{height:15}}></Row>
            <Row>
                <h4 style={{fontWeight:300}}>Iago is a software and hardware solution to help elderly patients with alzheimers and dementia.</h4>
            </Row>
            <Row style={{height:10}}></Row>
            <Row>
                <Col>
                    <h3>Patient Portal</h3>
                    <p>Memory exercise with photos of loved ones</p>
                    <img src={userPortal} height="230" width="420"></img>
                </Col>
                <Col>
                    <h3>Doctor Portal</h3>
                    <p>View and manage patient results</p>
                    <img src={physPortal} height="250" width="400"></img>
                </Col>
            </Row>
            <Row style={{height:15}}></Row>
            <Row>
                <h4 style={{fontWeight:300}}>Dementia is a disease that affects one in fourteen people over the age of 65. While there is currently no cure for dementia, we wanted to create a technology that would help patients maintain connections with their loved ones and give doctors’ a better look at the progress of their patients to increase the quality of life of these patients.  
                </h4>
            </Row>
        </Container>
            
    )
}

export default About
