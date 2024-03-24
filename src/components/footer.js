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
{/* github */}
          <Col xs={1} className="ms-auto">
            <a href="https://github.com/kellysdev" target="_blank" rel="noreferrer">
              <h4><i className="bi bi-github text-white"></i></h4>
            </a>
          </Col>
{/* linkedin */}
          <Col xs={1} className="mx-1">
            <a href="https://www.linkedin.com/in/kellysdev/" target="_blank" rel="noreferrer">
              <h4><i className="bi bi-linkedin text-white" ></i></h4>
            </a>
          </Col>
{/* medium */}
          <Col xs={1} className="mx-1">
            <a href="https://medium.com/@kellysdev" target="_blank" rel="noreferrer">
              <h4><i class="bi bi-medium text-white"></i></h4>
            </a>
          </Col>
{/* twitter */}
          <Col xs={1} className="me-auto">
            <a href="https://twitter.com/lladysmall" target="_blank" rel="noreferrer">
              <h4><i class="bi bi-twitter-x text-white"></i></h4>
            </a>
          </Col>
{/* instagram */}
          {/* <Col xs={1} className="me-auto">
            <a href="https://www.instagram.com/kellysdev/" target="_blank" rel="noreferrer">
              <h4><i className="bi bi-instagram text-white" ></i></h4>
            </a>
          </Col> */}
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;