import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Container} from "react-bootstrap";
import axios from 'axios'
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

import { ResponsiveLine } from '@nivo/line'

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

    // function getRequest()
    // {
    //     axios.get("http://127.0.0.1:5000/")
    //     .then(function (response) {
    //     console.log(response);
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     })
    //     .then(function () {
    //     // always executed
    //     });
    // }

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
                <img src={personArrState[num].image} width="400" height="400">
                </img>
            </div>
        );
    }

    function gameItem()
    {
        console.log(counter);
        if(counter !== 5)
        {
            return(
                <div className="container">
                    <h2>Hi {user.name},</h2>
                    <p>Please click on the button that corresponds to the correct person </p>
                    <p>Name: {personArrState[randomNum].name}</p>
                    <Container>
                        <Row>
                            <Col>
                                <div
                                onClick={() => handlePicClick(0)}>
                                    1.
                                    {GridItem(0)}
                                </div>
                            </Col>
                            <Col>
                                <div
                                onClick={() => handlePicClick(1)}>
                                    2.
                                    {GridItem(1)}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div
                                onClick={() => handlePicClick(2)}>
                                    3.
                                    {GridItem(2)}
                                </div>
                            </Col>
                            <Col>
                            <   div
                                onClick={() => handlePicClick(3)}>
                                    4.
                                    {GridItem(3)}
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
                <div>
                    <h2>Congratulations on Finishing!</h2>
                    <h3>Score: {correct}/5</h3>
                </div>
            );
        
        }
        
    }

    function handlePicClick(num)
    {

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
        console.log(personArrState);
        let temp =  min + Math.random() * (max - min);
        setRandomNum(Math.round(temp));
    }

    useEffect(() => {
        axios.get("http://localhost:5000").then(response => console.log(response));

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
