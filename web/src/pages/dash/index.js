import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Container} from "react-bootstrap";
import axios from 'axios'
import emilyPic from './img/1.jpg';
import anjaliPic from './img/2.jpg';
import jennyPic from './img/3.jpg';
import shivPic from './img/4.jpg';


import { ResponsiveLine } from '@nivo/line'

class Person {
    constructor(name, image, ageLevel) {
      this.name = name;
      this.image = image;
      this.ageLevel = ageLevel;
    }
  }

let personArray = [ new Person("Emily London", emilyPic, "20s"), new Person("Anjali Gopinathan", anjaliPic, "20s"), 
                    new Person("Jenny Lee", jennyPic, "20s"), new Person("Shivani Avasarala", shivPic, "20s")
];

const min = 0;
const max = 3;




function Dash() {
    const [data, setData] = useState([])
    const [randomNum, setRandomNum] = useState(0)
    const [personArrState, setPersonArrState] = useState(personArray);

    const user = useSelector((state) => state.user)

    function GridItem(num) {
        return (
            <div>
                <img src={personArrState[num].image} width="400" height="400">
                </img>
            </div>
        );
    }

    useEffect(() => {
        let temp =  min + Math.random() * (max - min);
        setRandomNum(Math.round(temp));
        let tempPersonArray = personArray;
        setPersonArrState(tempPersonArray);

        // get data
        const getData = async () => {
            const devicesRes = await axios.get('/api/devices')
            const devices = devicesRes.data.data
            // parse data
            const parsedData = devices.map((device) => {
                return {
                    id: device._id,
                    data: device.data.map((dataPoint) => {
                        return {
                            x: new Date(dataPoint.updatedAt),
                            y: dataPoint.point,
                        }
                    }),
                }
            })

            setData(parsedData)
        }
        getData()
    }, [])

    
    return (
        <div className="container">
            <h2>Hi {user.name},</h2>
            <p>Please click on the button that corresponds to the correct person </p>
            <p>Name: {personArrState[randomNum].name}</p>
            <Container>
                <Row>
                    <Col>
                        <div
                        onClick={handlePicClick(0)}>
                            1.
                            {GridItem(0)}
                        </div>
                    </Col>
                    <Col>
                    <div
                    onClick={handlePicClick(1)}>
                        2.
                        {GridItem(1)}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                        onClick={handlePicClick(2)}>
                            3.
                            {GridItem(2)}
                        </div>
                    </Col>
                    <Col>
                    <   div
                        onClick={handlePicClick(3)}>
                            4.
                            {GridItem(3)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dash
