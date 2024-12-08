import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WordPress = () => {
  return (
    <Row>
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
            <h1 className="text-center my-3">Overview</h1>
            <Col>
              <h3 className="text-center">Client</h3>
              <p>A neighborhood brewery running a GoDaddy Managed WordPress website.</p>
            </Col>
            <Col>
              <h3 className="text-center">Goal</h3>
              <p>
                To figure out why the website crashes when the version of PHP is updated and to update the design to be more modern and accessible on mobile devices.
              </p>
            </Col>
          </Row>
          <Row className="bg-danger py-1 corners mx-5 my-4"></Row>

{/* approach */}
          <Row>
            <h1 className="text-center my-3">Approach</h1>
            <p>
              With access to the GoDaddy account, I first spent time looking through the GoDaddy dashboard 
              and the WordPress admin area.  From these, I was able to find error messages and version numbers which
              which helped in researching solutions.  I also spent time with the staging site and the staging site editor.
            </p>
          </Row>

{/* troubleshooting */}
          <Row>
            <h2 className="text-center my-3">Troubleshooting</h2>
            <div>
              <h4 className="text-center">PHP Version</h4>
              <p>
                In the staging site editor, I updated the plugins one at a time and opened the staging site 
                after each to see if there was an effect.  After attempting to update one plugin, 
                it caused a critical error in the staging site, causing me to have to create a new staging site.  
                In the new staging site editor, I deactivated the plugin that caused the critical error 
                and then updated the PHP version.  The website did not crash this time.
              </p>
            </div>

            <div>
              <h4 className="text-center">Updating Theme and Plugins</h4>
              <p>
                In staging, updating these this fixed the website layout (the header displays properly 
                with a background image instead of the image being directly underneath it) and the 
                website was responsive again (the navigation  / header collapses on smaller screens 
                and is usable instead of disappearing).
              </p>
              <p>
                In production, an error was encountered when trying to update the theme and some of the plugins.  
                Due to the large gap in versions for the theme and the plugins having issues being associated with the theme
                , I ended up contacting the theme support.  They suggested de-registering the theme and then registering it 
                again in the theme settings in WordPress.  The purchase code and theme login credentials are required for this.
              </p>
            </div>

            <div>
                <h4 className="text-center">Instagram Feed</h4>
                <p>
                  After doing some research, I found that Meta implemented changes causing the access token initially implemented 
                  when setting up this plugin was no longer valid.
                </p>
            </div>
          </Row>

          <Row className="bg-danger py-1 corners mx-5 my-4"></Row>

{/* solution */}
          <Row>
            <h1 className="text-center my-3">Solution</h1>
            <div>
              <h4 className="text-center">Back-Up Website</h4>
                <p>
                  Quick creation of a back-up website to be imported and published from recovery mode if the current website
                  goes down before I am able to solve the issue.
                </p>
                <p>
                  Built using a custom block theme and only one plugin for a contact form.  It looks very similar to the current website 
                  but without the animated header and parallax part of the footer.
                </p>
            </div>

            <div>          
              <h4 className="text-center">Theme Update</h4>
              <p>The theme and bundled plugins needed to be updated, but the client did not have the login credentials for the theme. 
              They decided to let me rebuild the website with a new theme and to update the website's appearance.
              <br /><br />
              I chose a new theme that had the necessary features included in its free version and began building out the site
              in a way that would be easy for them to update in the future.</p>
            </div>

            <div>
              <h4 className="text-center">Instagram Feed</h4>
              <p>
                With the client's login credentials for the Facebook account connected to their Instagram account, 
                I can login to the plugin and reactivate the Instagram feed.
                <br />
                I also made sure to include links to all of their social media accounts on the contact page, as well as in the footer.
              </p>
            </div>
          </Row>          

      </Col>
    </Row>
  );

};

export default WordPress;