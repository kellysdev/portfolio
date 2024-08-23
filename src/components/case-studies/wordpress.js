import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WordPress = () => {
  return (
    <Row>
      <Col className="mx-auto" lg={9}>

{/* hero */}
        <Row>
            <header className="wp-hero has-bg-img" style={{ paddingLeft: 0 }}>
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
                To figure out why the website crashes when the version of PHP is updated and resolve
                the issue before the update is pushed to the client's website.
              </p>
            </Col>
          </Row>
          <Row>
            <h3 className="text-center">Background</h3>
            <p>
              The client was notified by their website provider that their website 
              would crash when they update their version of PHP due to a conflict with the theme being used.
            </p>
            <p>
              The client knew that I was studying web development and asked if I could look into the issue.
              I had no prior experience with WordPress, but wanted to learn it, so I agreed to help out.
            </p>
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
            <div className="d-flex justify-content-center">
              <ul>Issues:
                <li>The PHP version was out of date and the website crashes when the PHP version is updated.</li>
                <li>The theme was several versions behind and encounters an error when trying to update.</li>
                <li>The Instagram feed did not display due to an out of date access token.</li>
                <li>Some plugins need to be updated.</li>
                <li>The navigation / header for the website disappears on medium to small screens.</li>
              </ul>
            </div>
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
              <h4 className="text-center">PHP Version</h4>
              <p>
                Deactivate the plugin that conflicts with the PHP update and adjust site layout to work with out the plugin.
              </p>
            </div>

            <div>
              <h4 className="text-center">Theme Update</h4>
              <p>
                Replay information from theme support to the client, including the link to the license management tool 
                where the client can de-register the theme.  Show client how to re register the theme.
              </p>
              <p>
                If the client cannot find the purchase code or login to the license management tool, 
                I will build them a new website with a different theme.
              </p>
            </div>

            <div>
              <h4 className="text-center">Instagram Feed</h4>
              <p>
                With the client's login credentials for the Facebook account connected to their Instagram account, 
                I can login to the plugin and reactivate the Instagram feed.
              </p>
            </div>
          </Row>          

      </Col>
    </Row>
  );

};

export default WordPress;