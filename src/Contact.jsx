import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div>
        <div>
            <h2>Contact Info</h2>
            <ul>
                <li>address</li>
                <li>email</li>
                <li>pphone number</li>
            </ul>
            <ul>
                <li>facebook</li>
                <li>instagram</li>
                <li>email</li>
            </ul>
        </div>
        <div>
            <h2>FAQ</h2>
            <Accordion defaultActiveKey="0">
             <Accordion.Item eventKey="0">
                <Accordion.Header>1. How is the Quality ?</Accordion.Header>
                    <Accordion.Body>
                        <Form.Check type="radio" label="Excellent" name="group1"/>
                        <Form.Check type="radio" label="Very good" name="group1"/>
                        <Form.Check type="radio" label="Good" name="group1"/>
                        <Form.Check type="radio" label="Bad" name="group1"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default Contact