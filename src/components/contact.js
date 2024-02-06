import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <Row className="my-5">
      <h1>Contact Me</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="your name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="send me a message" />
        </Form.Group>
        <button className="contact-button" type="submit" disabled>Submit</button>
      </Form>
    </Row>
  );
};

export default Contact;