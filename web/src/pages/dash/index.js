import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Container} from "react-bootstrap";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import emilyPic from './img/1.jpg';
import anjaliPic from './img/2.jpg';
import jennyPic from './img/3.jpg';
import shivPic from './img/4.jpg';
import leonPic from './img/5.jpg';
import benPic from './img/6.jpg';
import alexPic from './img/7.jpg';
import maxPic from './img/8.jpg';
import sydneyPic from './img/9.jpg';
import baranPic from './img/10.jpg';
import athenaPic from './img/athena.PNG';

class Person {
    constructor(name, image, ageLevel) {
      this.name = name;
      this.image = image;
      this.ageLevel = ageLevel;
    }
  }

let personArray = [ new Person("Emily London", emilyPic, "20s"), new Person("Anjali Gopinathan", anjaliPic, "20s"), 
                    new Person("Jenny Lee", jennyPic, "20s"), new Person("Shivani Avasarala", shivPic, "20s"),
                    new Person("Leon Durrenburger", leonPic, "20s"), new Person("Ben Voter", benPic, "20s"),
                    new Person("Alex Colello", alexPic, "20s"), new Person("Max Ginsberg", maxPic, "20s"),
                    new Person("Sydney Rashid", sydneyPic, "20s"), new Person("Baran Cinbis ", baranPic, "20s")
];


var min = 0;
var max = 3;
let correct = 0;
let counter = 0;

function Dash() {
    const [data, setData] = useState([])
    const [randomNum, setRandomNum] = useState(0)
    const [personArrState, setPersonArrState] = useState(personArray);

    const user = useSelector((state) => state.user)


    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        setPersonArrState(array);
      }

    function GridItem(num) {
        return (
            <div>
                <img src={personArrState[num].image} width="300" height="300">
                </img>
            </div>
        );
    }
    function resetGame()
    {
        correct = 0; 
        counter = 0;
        shuffle(personArrState);
        let temp =  min + Math.random() * (max - min);
        setRandomNum(Math.round(temp));
    }
    function gameItem()
    {
        console.log(counter);
        if(counter < 5)
        {
            return(
                <div className="container">
                    <h2>Hi Athena,</h2>
                    <p>Please click on the button that corresponds to the correct person </p>
                    <h4>Name: {personArrState[randomNum].name}</h4>
                    <Container>
                        <Row>
                            <Col>
                                <div
                                 style={{backgroundColor:"#87a96b"}} 
                                onClick={() => handlePicClick(0)}> 
                                    <Container>
                                        <Row>
                                            <Col >
                                                </Col>
                                                <Col>
                                                    <Row style={{height:105}}>
                                                    
                                                    </Row>
                                                    <Row>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                        </svg>
                                                    </Row>
                                                
                                                </Col>
                                                <Col></Col>
                                            <Col>
                                                {GridItem(0)}
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                            <Col>
                                <div
                                 style={{backgroundColor:"#fada5e"}}
                                onClick={() => handlePicClick(1)}>
                                    <Container>
                                        <Row>
                                            <Col >
                                            </Col>
                                            <Col>
                                                <Row style={{height:105}}>

                                                </Row>
                                                <Row>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-triangle" viewBox="0 0 16 16">
                                                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                    </svg>
                                                </Row>
                                               
                                            </Col>
                                            <Col></Col>
                                            <Col>
                                                {GridItem(1)}
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div
                                style={{backgroundColor:"#3895d3"}} 
                                onClick={() => handlePicClick(2)}>
                                    <Container>
                                        <Row>
                                            <Col >
                                                </Col>
                                                <Col>
                                                    <Row style={{height:105}}>

                                                    </Row>
                                                    <Row>
                                                        

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                        </svg>
                                                    </Row>
                                                
                                                </Col>
                                                <Col></Col>
                                            <Col>
                                                {GridItem(2)}
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                            <Col>
                            < div
                                style={{backgroundColor:"#F04848"}} 
                                onClick={() => handlePicClick(3)}>
                                      <Container>
                                        <Row>
                                            <Col >
                                                </Col>
                                                <Col>
                                                    <Row style={{height:105}}>
                                                    
                                                    </Row>
                                                    <Row>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                                            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
                                                        </svg>
                                                    </Row>
                                                
                                                </Col>
                                                <Col></Col>
                                            <Col>
                                                {GridItem(3)}
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
        else
        {
            console.log("done");
            return(
                <Container>
                    <Row>
                        <div class="col"></div>
                        <div class="col-6">
                            <Row style={{height:20}}></Row>
                            <Row>
                                <h2>Congratulations on Finishing!</h2>
                                
                            </Row>
                            <Row>
                                <h3>Score: {correct}/5</h3>
                            </Row>
                            <Row>
                                <img src={athenaPic} width="400" height="400">
                                </img>
                            </Row>
                            <Row>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => {
                                        resetGame()
                                    }}
                                >
                                    Play Again?
                                </Button>
                            </Row>
                        </div>
                        <div class="col"></div>
                    </Row>
                
                </Container>
            );
        
        }
        
    }

    function handlePicClick(response)
    {
        console.log(response);
        let num = 0;
        if(response !== null)
        {
            if(response === "green")
            {
                num = 0;
            }
            else if(response === "yellow")
            {
                num = 1;
            }
            else if(response === "blue")
            {
                num = 2;
            }
            else if(response === "red")
            {
                num = 3;
            }

            if(num == randomNum)
            {
                //correct
                alert("good job! That is correct");
                correct = correct + 1;
            
            }
            else
            {
                let errorMsg = "Incorrect. That was actually " + personArrState[num].name;
                alert(errorMsg);
            }
            counter++;
            shuffle(personArrState);
            let temp =  min + Math.random() * (max - min);
            setRandomNum(Math.round(temp));          
        }
        else{
            console.log(response);
        }
    }

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
      
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      };

    useInterval(() => {
        axios.get("http://4e96779c750a.ngrok.io/").then(response => 
            handlePicClick(response.data)
            /*{
                if(response.data != "null")
                {
                    if(response.data === "red")
                    {
                        handlePicClick(0);
                    }
                    else if(response.data === "yellow")
                    {
                        handlePicClick(1);
                    }
                    else if(response.data === "green")
                    {
                        handlePicClick(2);
                    }
                    else if(response.data === "blue")
                    {
                        handlePicClick(3);
                    }
                    
                }
        }*/

        );

      }, 1000);

    useEffect(() => {
        
        let temp =  min + Math.random() * (max - min);
        setRandomNum(Math.round(temp));
        let tempPersonArray = personArray;
        shuffle(tempPersonArray);
    }, [])


    
    return (
        <div className="container">
            {gameItem()}
        </div>
    )
}

export default Dash
