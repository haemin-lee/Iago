import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap'
import { Switch, Route, Routes, NavLink, Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import axios from 'axios';

init("user_KhUJAZGrNxtemlOYQ1Po3");

class Person {
    constructor(name, frequency, age, mostCorrect, mostIncorrect) {
      this.name = name;
      this.age = age;
      this.frequency = frequency;
      this.mostCorrect = mostCorrect;
      this.mostIncorrect = mostIncorrect;
    }
}

var templateParams = {
    service_id: 'service_5ot4vcd',
    template_id: 'template_jo6vovg',
    user_id: 'user_KhUJAZGrNxtemlOYQ1Po3',
    template_params: {
        'to_name': 'James',
        'message': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};

let contacts = new Map()
contacts.set("Jenny Lee", "haeminle@usc.edu");
contacts.set("Emily London", "elondon@usc.edu");
contacts.set("Shivani Avasarala", "avasaral@usc.edu");
contacts.set("Anjali Gopinathan", "agopina@usc.edu");

let users = [new Person("Allan Weber", 4, 87, ["Shivani Avasarala", "Emily London"], ["Jenny Lee"]), 
            new Person("Gandhi Puvvada", 3, 78, ["Anjali Gopinathan"], ["Jenny Lee"])];
let activeUser = users[0];

function PatientInfo(props) {

    function collapseArray(input)
    {
        var i = 0; 
        var string = "";
        for(i = 0; i < input.length; i++)
        {
            string += input[i];
            if(i != (input.length - 1))
            {
                string += ", ";
            }
        }
        return string;
    }

    function sendEmail(input) {
        console.log("jenny was here");
        emailjs.send("service_5ot4vcd","template_jo6vovg", {
            to_name: input.template_params.to_name,
            message: input.template_params.message,
            });
        var alertMsg = "successfully sent an email to " + input.template_params.to_name;
        alert(alertMsg);
    }
    
    function sendEmailWrapper(name)
    {
        console.log(name);
        let message = "Hello! This is Emily from Iago services. We want to send you a reminder to check in on " +
                    props.userData.name + ". Our games have detected that they are having a difficult time remembering" +
                    " you. Thank you!"
        templateParams.template_params.to_name = name;
        templateParams.template_params.message = message;
        sendEmail(templateParams);
    }

    function contactMembers(input)
    {
        console.log("dds");
        console.log(input[0]);
        var returnObj =[];
            var i = 0; 
            return input.map(inp => {
                return <Button
                color="primary"
                onClick={() => {
                    // console.log(something);
                    sendEmailWrapper(inp)
                }}
            >
                {inp}
            </Button>

            })
    }

    return (
        <div>
            <h3>{props.userData.name}</h3>
            <h4>Age: {props.userData.age} years</h4>
            <h4>Frequency: {props.userData.frequency} times in the past 7 days</h4>
            <h4>Most Remembered: {collapseArray(props.userData.mostCorrect)}</h4>
            <h4>Least Remembered: {collapseArray(props.userData.mostIncorrect)}</h4>
            {contactMembers(props.userData.mostIncorrect)}
        </div>
    );
} 


function Tabbar(props) {
    return (
        <div className="container">
            <Nav className="justify-content-center nav-pills">
                
            </Nav>
            <Switch>
                <Route exact path="/">
                    <PatientInfo userData={props.userData}/> 
                </Route>
            </Switch>
        </div>
    );
}

function Home() {
    const [data, setData] = useState(activeUser)
    const [userarr, setUsers] = useState(users)

    function changeSelectedUser(i) {
        setData(userarr[i])
        console.log(i)
    }

    function getName(i) {
        return (
            <div>
                <Button
                    color="primary"
                    onClick={() => {
                        changeSelectedUser(i)
                    }}
                >
                    {users[i].name}
                </Button>
                <div style={{height:10}}>

                </div>
            </div>
        )
    }

    function returnNameList() {
        var returnObj = []
        var i = 0
        for (i = 0; i < users.length; i++) {
            returnObj.push(getName(i))
        }
        return returnObj
    }

    useEffect(() => {
        // Update the document title using the browser API
    }, [])
    console.log(data);
    return (
        
        <Container>
            <Row>
                <h1>Welcome to Iago: Doctor's Portal</h1>
            </Row>
            <Row style={{ height: 30 }}></Row>
            <Row>
                <div style={{ outline: '1px solid gray' }}>
                    <Col>
                        <h3>Select a patient</h3>
                        {returnNameList()}
                    </Col>
                </div>
                <Col>
                    <Tabbar userData={data} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
