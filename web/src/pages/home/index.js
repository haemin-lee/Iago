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
import Avatar from '@material-ui/core/Avatar';
import manPic from './1.jpg';
import womanPic from './2.jpg';
import manPic2 from './3.png';
import { ResponsiveBar } from '@nivo/bar'
import herbertData from "./herbert"
import adelinaData from "./adelina"
import kwangyoonData from "./kwangyoon"
init("user_KhUJAZGrNxtemlOYQ1Po3");

class Person {
    constructor(name, frequency, age, mostCorrect, mostIncorrect, photo, graphData) {
      this.name = name;
      this.age = age;
      this.frequency = frequency;
      this.mostCorrect = mostCorrect;
      this.mostIncorrect = mostIncorrect;
      this.photo = photo;
      this.graphData = graphData;
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

let users = [new Person("Herbert Mcbeans", 4, 87, ["Shivani Avasarala", "Emily London"], ["Jenny Lee"], manPic, herbertData), 
            new Person("Adelina Jung", 3, 78, ["Anjali Gopinathan"], ["Jenny Lee"], womanPic, adelinaData), 
            new Person("Kwangyoon Lee", 6, 93, ["Emily London"], ["Baran Cinbis"], manPic2, kwangyoonData)
        ];
let activeUser = users[0];

function PatientInfo(props) {

    function renderGraph(data)
    {
        return(
            <ResponsiveBar
                data={data}
                keys={[ "remembered" ]}
                indexBy="person"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Person',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Times Remembered',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        );
    }

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
        var returnObj =[];
            var i = 0; 
            return input.map(inp => {
                let buttonName = "Email " + inp;
                return <Button
                    variant="outline-secondary"
                    onClick={() => {
                        // console.log(something);
                        sendEmailWrapper(inp)
                    }}
                >
                {buttonName}
            </Button>
            })
    }

    return (
        <div>
            <Container>
                <Row>
                    <div style={{height:40}}></div>
                </Row>
                <Row>
                    <div className='col-2'>
                        <Avatar alt={props.userData.name} src={props.userData.photo} style={{height: '75px', width: '75px'}} />
                    </div>
                    <div className='col-10' style={{paddingTop:16}}>
                        <h2 className = "patientname">{props.userData.name}</h2>
                    </div>
                </Row>
                <Row>
                    <div style={{height:20}}></div>
                </Row>
                <Row >
                    <Col className = "basicinfo">
                            <h3 className = "biggertext">Basic Information</h3>
                            <h4 style={{fontWeight: 300}} className = "smalltext">Age: {props.userData.age} years old</h4>
                            <h4 style={{fontWeight: 300}} className = "smalltext">Frequency: {props.userData.frequency} times in the past 7 days</h4>
                    </Col>
                    <div style={{width:20}}></div>
                    <Col className = "rememberedInfo">
                            <h3 className = "biggertext">Remembered Information</h3>
                            <h4 style={{fontWeight: 300}} className = "smalltext">Most Remembered: {collapseArray(props.userData.mostCorrect)}</h4>
                            <h4 style={{fontWeight: 300}} className = "smalltext">Least Remembered: {collapseArray(props.userData.mostIncorrect)}</h4>
                            {contactMembers(props.userData.mostIncorrect)}
                    </Col>
                </Row>
                <Row>
                    <Col className = "graph">
                        <h3 className = "biggertext">Graph Visualizations</h3>
                        <div style={{height:300}}>
                            {renderGraph(props.userData.graphData)}
                        </div>
                    </Col>
                </Row>
            </Container>
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
            <div
                className={`row patient-card`}
            >
                <div
                    className="col patient-card-info"
                    style={{ cursor: 'pointer' }}
                    onClick={() => changeSelectedUser(i)}
                >
                    <p>{userarr[i].name}</p>
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
                <div>
                    <Col>
                        <h2>Select a patient</h2>
                        <div style={{height:10}}></div>
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
