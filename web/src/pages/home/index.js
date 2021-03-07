import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

let users = [];
let activeUser = users[0];

class Person {
    constructor(name, image, age, frequency, mostCorrect, mostIncorrect) {
      this.name = name;
      this.image = image;
      this.age = age;
      this.frequency = frequency;
      this.mostCorrect = mostCorrect;
      this.mostIncorrect = mostIncorrect;
    }
  }

function Tabbar(props) {
    return (
        <div className="container">
            <Nav className="justify-content-center nav-pills">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeClassName="active"
                        exact
                        to="/"
                    >
                        Patient Information
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/graphs"
                    >
                        Graphs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/images"
                    >
                        Images
                    </NavLink>
                </li>
            </Nav>
            <Switch>
                <Route exact path="/">
                    <PatientInfo userData={props.userData}/>
                </Route>
                <Route exact path="/graphs">
                    <Graphs userData={props.userData}/>
                </Route>
                <Route exact path="/images">
                    <Images userData={props.userData}/>
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
                    {users[i]}
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
                <Tabbar userData={data} />
            </Row>
        </Container>
    )
}

export default Home
