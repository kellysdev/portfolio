import { useRef } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";

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
    <Row className="my-5">
      <h1>Contact Me</h1>
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
        <Button className="contact-button my-3" variant="outline-dark" type="submit">Submit</Button>
      </Form>
    </Row>
  );
};

export default Contact;