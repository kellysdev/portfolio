import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AWSCRUD = () => {
  return (
    <Row>

      <Col>
{/* hero */}
        <Row className="mt-5">
          <header className="aws-hero has-bg-img" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <h1 className="mt-5 text-white popopolis-logo">Case Study</h1>
                    <h4 className="mb-5 text-whie popopolis-logo">AWS CRUD Deployment</h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

{/* overview */}
        <Row></Row>

        <Row className="bg-danger my-4 py-1"></Row>

{/* section */}
        <Row></Row>

{/* section */}
        <Row></Row>

{/* credits */}
        <Row className="my-5 credits">
          <h1 className="mb-3 popopolis-logo">AWS Deployment</h1>
          <h3>Credits:</h3>
          <p>
            Lead Developer: Kelly Scott<br/>
            Mentor: Vivek Kumar Maskara
          </p>
          {/* <a href="https://github.com/kellysdev/movie-Angular-client">GitHub Repository</a>
          <a href="https://kellysdev.github.io/movie-Angular-client/welcome">App Hosted on Netlify</a><br/><br/> */}
          {/* <a href="https://unsplash.com/@liammcgarry" className="meet-hero-credit">title photo credit: @liammcgarry</a> */}
        </Row>

      </Col>

    </Row>
  );
};

export default AWSCRUD;