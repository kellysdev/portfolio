import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

const ResumePage = () => {
  return (
    <Row>
      <Col>
        <Row>
          <Button className="download-button mt-5 mx-auto" type="button" variant="outline-dark" style={{width: 200}}
            href={require("../Scott-Kelly-Resume.pdf")} download="Scott-Kelly-Resume.pdf"
          ><i className="bi bi-download"></i> Download Resume</Button>
        </Row>
        <Row>
          <img src="Scott-Kelly-Resume.svg" alt="Kelly Scott's Resume" />
        </Row>
      </Col>

    </Row>
  );
};

export default ResumePage;