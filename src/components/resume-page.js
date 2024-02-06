import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResumePage = () => {
  return (
    <Row>
      <Col>
        <Row>
          <button className="download-button mt-5" type="button"
            data="../../public/Scott-Kelly-Resume.pdf" download="Scott-Kelly-Resume.pdf"
          ><i className="bi bi-download"></i> Download Resume</button>
        </Row>
        <Row>
          <img src="Scott-Kelly-Resume.svg" alt="Kelly Scott's Resume" />
        </Row>
      </Col>

    </Row>
  );
};

export default ResumePage;