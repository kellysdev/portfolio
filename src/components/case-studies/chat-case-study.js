import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ChatCaseStudy = () => {
  return (
    <Row>
      <Col>

{/* hero */}
      <Row>
          <header className="chat-hero has-bg-img" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mt-5 text-light">Case Study</h1>
                    <h4 className="mb-5 text-light">React Native Chat Application</h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>
      
      </Col>
    </Row>
  );
};

export default ChatCaseStudy;