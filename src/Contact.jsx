import React from 'react'
import './Contact.css'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function Contacts() {
  return (
    <div className="outer">
      <div className="inner">
        <div className="contact-column">
          <div className='heading01'>
            <h2>Contact Info</h2>
          </div>
          <div className='table-container'>
            <table className='contacts-table'>
                <tr>
                    <td><i class="bi bi-geo"></i></td>
                    <td>location </td>
                    <td className='td-links'><a href="https://maps.app.goo.gl/g1LkgKVdkQy6ZjyWA">Colombo</a></td>
                </tr>
                <tr>
                    <td><i class="bi bi-envelope-at"></i></td>
                    <td>Email</td>
                    <td className='td-links'><a href='mailto:morandmorelk@gmail.com'>morandmorelk@gmail.com</a></td>
                </tr>
                <tr>
                    <td><i class="bi bi-telephone"></i></td>
                    <td>TP</td>
                    <td className='td-links'><a href='#'>075 227 2571</a></td>
                </tr>
                <tr>
                    <td><i class="bi bi-whatsapp"></i></td>
                    <td>Whatsapp</td>
                    <td className='td-links'><a href='https://wa.me/message/2FFAKDWGT6LKI1'>075 227 2571</a></td>
                </tr>
                <tr>
                    <td><i class="bi bi-facebook"></i></td>
                    <td>Facebook</td>
                    <td className='td-links'><a href='http://www.facebook.com/morandmore0.lk?mibextid=LQQJ4d'>Morandmore</a></td>
                </tr>
                <tr>
                    <td><i class="bi bi-instagram"/></td>
                    <td>Instagram</td>
                    <td className='td-links'><a href='https://www.instagram.com/invites/contact/?i=uy9l6deakg5j&utm_content=rlncl4w '>Morandmore</a></td>
                </tr>
            </table>
          </div>
        </div>
        <div className="faq-column">
            <div className="heading02">
              <h2>FAQ</h2>
            </div>
            <div className='faq-container'>
            <Accordion className='accordion'>
             <Accordion.Item eventKey="1" className='accordion-item'>
                <Accordion.Header>1. How is the Quality ?</Accordion.Header>
                    <Accordion.Body>
                        <Form.Check type="radio" label="Excellent" name="group1"/>
                        <Form.Check type="radio" label="Very good" name="group1"/>
                        <Form.Check type="radio" label="Good" name="group1"/>
                        <Form.Check type="radio" label="Bad" name="group1"/>
                    </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0" className='accordion-item'>
                <Accordion.Header>2. Payment Methods ?</Accordion.Header>
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
      </div>
    </div>
  )
}

export default Contacts