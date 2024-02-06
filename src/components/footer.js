import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Row className="my-5 footer">
      <Col>
        <Row>
          <p>Find me on</p>
        </Row>
        <Row>
          <Col xs={1} className="ms-auto">
            <a href="https://github.com/lladysmall" target="_blank" rel="noreferrer">
              <img src="github_icon.svg" alt="GitHub" className="social-icons" />
            </a>
          </Col>
          <Col xs={1} className="mx-1">
            <a href="https://www.linkedin.com/in/kellysdev/" target="_blank" rel="noreferrer">
              <img src="linkedin_icon.svg" alt="LinkedIn" className="social-icons" />
            </a>
          </Col>
          <Col xs={1} className="me-auto">
            <a href="https://www.instagram.com/kellysdev/" target="_blank" rel="noreferrer">
              <img src="instagram_icon.svg" alt="Instagram" className="social-icons" />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;