import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CircuitTimer = () => {
  return (
    <Row className="text-center">
      <Col>

{/* hero */}
        <Row>
          <header className="timer-hero corners" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <h1 className="mt-5">Case Study</h1>
                    <h4 className="mb-5">React Workout Timer</h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

{/* overview */}
        <Row className="my-3">
          <h2>Overview</h2>
          <p>The goal was to build an app that I would use while exploring new technologies.<br />
          I wanted to build a timer that would allow the user to set the length of active and rest periods,
          set the number of rounds, and the length of the rest period between rounds.
          </p>
        </Row>

{/* tech */}
        <Row>
          <h3>Technology Used</h3>
          <Col className="my-2" xs={12} md={6} xl={3}>
            <h4>React</h4>
            <p>
              A JavaScript library for building user interfaces based on components.  
            </p>
          </Col>

          <Col className="my-2" xs={12} md={6} xl={3}>
            <h4>Vite</h4>
            <p>
              A JavaScript build tool that provides support for common web patterns and 
              is a bundleless development server.
            </p>
          </Col>

          <Col className="my-2" xs={12} md={6} xl={3}>
            <h4>Material UI</h4>
            <p>
              A suite of user interface (UI) tools that implements Google's Material Design.
              The MUI components used in this project are the Circular Progress Bar, Snackbar, Chip, and Stepper.
            </p>
          </Col>

          <Col className="my-2" xs={12} md={6} xl={3}>
            <h4>AWS S3</h4>
            <p>
              This project is hosted in an Amazon Web Services (AWS) S3 bucket.  An S3 (Simple Storage Service)
              bucket was configured to host a static website and the build files for the application were added 
              to the bucket.
            </p>
          </Col>
        </Row>

        <Row className="my-3">
          <h2>Development</h2>
          <p>
            Getting the timer to work was the first step, then I worked on separating components and adding functionality.
            Handling the logic to switch between rounds was a little tricker than I thought it would be and I ended up watching 
            several tutorials and trying a couple of different approaches before finding one that worked for me.
            <br />I am still working on implementing the feature that will allow multiple sets of circuits with a rest time between.
          </p>
          <p>
            It has been refreshing to learn new tools, such as Material UI and Vite.  
            Vite's development server is much faster than using create-react-app and is far less bulky.  
            I also enjoyed using the clean aesthetic of Material UI and found their documentation easy to follow.
          </p>
        </Row>

        <Row>
          <h2>Summary</h2>
          <p>
            I have really been enjoying working on a project that I will use regurlarly and it has given me ideas for future projects, as well.  
            While I am still implementing main features, I know this will be an application that I will continue to tinker with and improve over time.
          </p>
        </Row>
          
      </Col>
    </Row>
  )
};

export default CircuitTimer;