import React,{useState,useEffect} from "react";
import axios from "axios";
import NavBarAdd from "./NavBarAdd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";

const ListView = () => {
    const [terrain,setTerrain] =useState([])
    useEffect(() => {
        fetchTerrain();
       
    }, []);
    const fetchTerrain =async() =>{ // data from database
        await axios.get('http://127.0.0.1:8000/api/InfoTerrain')
        .then(({data})=>{
            setTerrain(data) 
        })
    }
    const deleteTerrain = async(id) =>{
        await axios.delete('http://127.0.0.1:8000/api/InfoTerrain/'+ id)
        .then(({data})=>{
            console.log(data.message)
            fetchTerrain();
        }).catch(({response: {data}}) => {
            console.log(data.message)
        })
    }
    return(
        <div>
            <NavBarAdd/>
            <Container>
                <Row className="mt-3">
                    <Col>
                    <h3>List Viewed</h3>
                    </Col>
                    <Col className="ms-5">
                    <a href="./AddView"><Button variant="secondary">Add View</Button></a>
                    </Col>
                </Row>
                <Row>
                {terrain.length > 0 && (
                terrain.map((row,key) =>(
                <Col>
                <Card key={key} style={{ width: '31vw',height:'20vh',marginBottom:"20px",marginTop:"30px",backgroundColor:'#e9f5db'}}>
                    <Row>
                        <Col>
                        <Card.Img src={(`http://127.0.0.1:8000/img1/${row.img1}`)} style={{height:'20vh'}} fullWidth />
                        </Col>
                        <Col>
                        <Card.Body>
                            <Card.Title style={{marginBottom:'20px'}}>{row.title}</Card.Title>
                            <Row>
                            <Col>
                            <Link to={`/ModifyView/${row.id}`}><Button className="bg-warning">Modify</Button></Link>
                            </Col>
                            <Col>
                            <Button className="bg-danger" onClick={() => deleteTerrain(row.id)}>Delete</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Col>
                    </Row>
                </Card>
                </Col>
                ))
                )}
                </Row>
            </Container>
        </div>
    );
}
export default ListView;