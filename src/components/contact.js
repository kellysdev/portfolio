import { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_ServiceID, process.env.REACT_APP_EMAIL_TemplateID, form.current, {
      publicKey: process.env.REACT_APP_EMAIL_PublicKey,
    })
      .then(response => {
        alert("Thanks for reaching out.  I'll get back to you shortly.", response.status, response.text);
      })
      .catch(error => {
        alert("Something went wrong.");
        console.log(error);
      });
  };

  return (
    <Row className="my-5 d-flex justify-content-center">
      <Col md={8} className="">
        <motion.h1 initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>Contact Me</motion.h1>
        <Form ref={form} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="mt-3">Name</Form.Label>
            <Form.Control type="text" name="from_name"/>
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-3">Email</Form.Label>
            <Form.Control type="email" name="from_email" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-3">Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" />
          </Form.Group>
          <Button className="contact-button my-3" variant="outline-light" type="submit">Submit</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Contact;