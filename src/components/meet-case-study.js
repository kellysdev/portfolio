import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MeetCaseStudy = () => {
  return (
    <Row>
      <Col>

{/* hero */}
        <Row>
          <header className="meet-hero has-bg-img" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mt-5 text-dark">Case Study</h1>
                    <h4 className="mb-5 text-dark">Serverless Progressive Web Application</h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

{/* overview */}
        <Row className="mt-4">
          <Col>
            <h3>Overview</h3>
            <p>
              This project is a serverless, progressive web application, built with a test-driven development technique, that fetches events from the Google Calendar API and displays the events with data visualization.
            </p>
          </Col>
          <Col>
            <h3>Purpose & Context</h3>
            <p>
              This app was built while taking the CareerFoundry Full-Stack Web Development course to learn the test-driven development technique and to explore serverless and progressive web applications.
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3>Objective</h3>
            <p>
              The aim of this project was to learn testing techniques and to learn to build a serverless application that will work offline while still providing a great user experience.
            </p>
          </Col>
        </Row>

        <Row className="meet-dividers py-1"></Row>

{/* development */}
        <Row className="my-5">
          <Col className="d-flex-columns">
            <h3>Test-Driven Development</h3>
            <p>
            A software development process in which tests are written to ensure that the application code will result in a required feature of the application.  
            The required features of the app are broken down into scenarios and tests are written for each scenario.  
            The code that will cause the test to pass is then written and tested.  This is repeated for each feature and scenario.
            </p>
            <p>Example:<br />Feature 1: Filter Evens by City, Scenario 1: When a user hasn't searched for a city, show upcoming events from all cities.</p>
            <img src="tdd-example.png" alt="test-driven development example screenshot" className="meet-cs-screenshot" />
            <p className="mt-3">
              The Behavior-Driven Development technique was also used in building this application.  
              Behavior-Driven Development focuses on test cases that are easy for developers and non-developers to understand.  
              The required features and scenarios are further broken down into Gherkin syntax using Given, When, and Then.  
              This is used to outline the tests so that they are easier to follow.
            </p>
            <p>Example:<br />Gherkin: Given the user hasn’t searched for any city, when the user opens the app, then the user should see the list of all upcoming events.</p>
            <img src="bdd-example.png" alt="behavior-driven development example screenshot" className="meet-cs-screenshot" />
          </Col>
        </Row>

        <Row className="meet-dividers py-1"></Row>

{/* technologies */}
        <Row className="my-5">
          <Col>
            <h3>Technology</h3>
            <Row>
              <Col sm={2}><p>Serverless</p></Col>
              <Col>
                <p>While called a serverless application, there is still a server – it’s just managed by Amazon Web Services (AWS).  AWS Lambda was the serverless platform used for authentication in addition to Google OAuth.</p>
              </Col>
            </Row>
            <Row>
              <Col sm={2}><p>Google Open Authorization (OAuth)</p></Col>
              <Col>
                <p>A framework that allows 3rd party applications to authenticate clients without them having to share their credentials directly with the server.  In this case, the user can sign in with their Google credentials which, with the help of the serverless functions on AWS Lambda, grants the user access to the application.</p>
              </Col>
            </Row>
            <Row>
              <Col sm={2}><p>Jest and React Testing Library</p></Col>
              <Col>
                <p>Jest is an assertion framework used to test code.  React Testing Library is used with Jest to test React components.</p>
              </Col>
            </Row>
            <Row>
              <Col sm={2}><p>Recharts</p></Col>
              <Col><p>A React library for data visualization.</p></Col>
            </Row>
          </Col>
        </Row>

        <Row className="meet-dividers py-1"></Row>

{/* troubleshooting */}
        <Row className="my-5">
          <Col>
          <h3>Troubleshooting</h3>
            <p>Error:<br/>
              After implementing the Google Calendar API, I got an error in the console that the events object was undefined.<br /><br />
              Solution:<br />
              I spent some time in the Network tab of Chrome Dev Tools and noticed that the components were loading before the data was fetched.  To resolve this, I delayed the components from rendering before the fetch completed with a ternary statement in the return block of App.js.
            </p>
          </Col>
        </Row>

        <Row className="meet-dividers py-1"></Row>

{/* final product */}
        <Row className="my-5">
          <Col sm={3} className="meet-logo mx-4">
            <p className="meet-logo-meet">meet</p>
            <p className="meet-logo-subtitle">& learn to code;</p>
          </Col>
          <Col>
            <h3>Final Product</h3>
            <p>
              I was provided with some very simple CSS styling from the CareerFoundry course which centered the content and added the blue color when hovering over items in the suggestions list.
              This blue color became the accent color for the app and I chose a complementary orange color for the background.<br /><br />
              
              Since the app is intended to be downloaded to a mobile device homescreen, it was layed out in a way that would look good on mobile as well as on a desktop screen and was made to be responsive.<br />
              I also implemented an animation in the logo for a more dynamic environment.<br /><br />
              
              I am quite please with how the app turned out.  
            </p>
          </Col>
        </Row>
        
        <Row className="meet-dividers py-1"></Row>

{/* credits */}
        <Row className="my-5" style={{textAlign: "center"}}>
          <Col>
            <h3>Credits</h3>
            <p>
              Lead Developer: Kelly Scott<br />
              Mentor: Vini De Antoni<br />
              Tutor: Jason Early
            </p>
            <a href="https://github.com/lladysmall/meet">GitHub Repository</a><br />
            <a href="https://lladysmall.github.io/meet/">App Hosted on GitHub Pages</a><br /><br />
            <a href="https://unsplash.com/@dead____artist" className="meet-hero-credit">title photo credit: @dead____artist</a>
          </Col>
        </Row>

      </Col>
    </Row>
  );
};

export default MeetCaseStudy;