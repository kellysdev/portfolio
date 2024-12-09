import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const WordPress = () => {
  return (
    <Row className="text-center">
      <Col className="mx-auto" lg={9}>

{/* hero */}
        <Row>
            <header className="wp-hero bg-danger corners" style={{ paddingLeft: 0 }}>
              <div className="p-3 text-center bg-image">
                <div className="mask">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                      <h1 className="mt-5">Case Study</h1>
                      <h4 className="mb-5">Contract WordPress Maintenance</h4>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </Row>

{/* overview */}
          <Row>
            <h1 className="my-3">Overview</h1>
            <Col>
              <h3>Client</h3>
              <p>A neighborhood brewery running a GoDaddy Managed WordPress website.</p>
            </Col>
            <Col>
              <h3>Goal</h3>
              <p>
                To figure out why the website crashes when the version of PHP is updated and to update the design to be more modern and accessible on mobile devices.
              </p>
            </Col>
          </Row>
          <Row className="bg-danger py-1 corners mx-5 my-4"></Row>

{/* approach */}
          <Row>
            <h1 className="my-3">Development</h1>
            <h3>Approach</h3>
            <p>
              With access to the GoDaddy account, I first created a quick backup site in the staging site that would be ready to launch
               if the current website crashed.  Then I spent time looking through the GoDaddy dashboard and the WordPress admin area.  
               From these, I was able to find error messages and version numbers which which helped in researching solutions.
            </p>
            <h3>Challenges</h3>
            <p>
              The theme that was in use had not been updated in a long time and turned out to be the main conflict with the newest version of PHP.  
              Becuase the client didn't have the credentials to update the theme, we decided to switch the site to a new, free theme.
              <br />
              The site got a complete redesign within WordPress so that it would be responsive and accessible.  Most of the content remained the same, 
              including the color palette, but some new graphics, a new page, and a video landing page was added.
            </p>
          </Row>

          <Row className="bg-danger py-1 corners mx-5 my-4"></Row>

{/* solution */}
          <Row>
            <h1 className="my-3">Summary</h1>
              <p>
                Once the WordPress site had been moved to the new theme, I was able to redesign the website and shared it with the client 
                via the staging site.  They approved of the new design, contributed some additional images and video to add, and requested some minor adjustments.  
                I added an events page and was able to have the new site live before their 7th anniversary event.
                <br />
                I also created tutorials for the client so that they can update the website themselves, since this was difficult for them to do in the past.
              </p>
              <p>The new site is clean, modern, and responsive.  It represents the client and is easier for them to maintain themselves.</p>
              <Button href="https://www.superowlbrewing.com/" variant="danger" className="sob-button my-4" target="_blank" >
                Visit Super Owl Brewing's New Website
              </Button>
          </Row>          

      </Col>
    </Row>
  );

};

export default WordPress;