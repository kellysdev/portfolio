import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResumePage = () => {
  return (
    <Row>
      <Col>
        <Row>
          <button className="download-button" type="button"
            href="../../public/Scott-Kelly-Resume.pdf" download="Scott-Kelly-Resume.pdf"
          ><i class="bi bi-download"></i> Download Resume</button>
        </Row>
        <Row className="embed-responsive embed-responsive-1.294by1">
          Resume here
        </Row>
      </Col>

    </Row>
  );
};

export default ResumePage;