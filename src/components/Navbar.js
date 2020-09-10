import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <Row className="justify-content-center">
            <Col>
                <Link to="/"><Button>List View</Button></Link>
                <Link to="/map-view" className="ml-3"><Button>Map View</Button></Link>
            </Col>
        </Row>
    )
}
