import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2vral8h', 'template_xenuku3', form.current, '85XxPQpk-yGBlXFxL')
        .then((result) => {
            Swal.fire('Nice! Your message has sent successfully! ')
        }, (error) => {
            Swal.fire('Oh Oh! Unfortunately your message cannot be sent, please try again later! ')
        });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={sendEmail} ref={form}>
                            <Row>
                                <Col sm={12} className="px-1">
                                    <input type="text" placeholder="First Name" name="user_name"></input>
                                </Col>

                                <Col sm={12} className="px-1">
                                    <input type="text" placeholder="Last name" name="user_lastname"></input>
                                </Col>

                                <Col sm={12} className="px-1">
                                    <input type="email"  placeholder="Email Address" name="user_email"></input>
                                </Col>

                                <Col sm={12} className="px-1">
                                    <input type="tel"  placeholder="Phone Number" name="user_phone"></input>
                                </Col>

                                <Col sm={12}>
                                    <textarea row="6" placeholder="Message" name="message"></textarea>
                                    <button type="submit"><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}