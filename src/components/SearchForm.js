import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({params, onParamChange}) {

    return (
        <Form className="mb-1">
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control onChange={onParamChange} data-testid="text-input-title" name="title" type="input"/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Neighborhood</Form.Label>
                    <Form.Control onChange={onParamChange} data-testid="text-input-neighborhood" name="neighborhood" type="input"/>
                </Form.Group>
            </Form.Row>
        </Form>
    )

}