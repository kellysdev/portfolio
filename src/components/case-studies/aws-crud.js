import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AWSCRUD = () => {
  return (
    <Row>

      <Col>
{/* hero */}
        <Row className="mt-5">
          <header className="aws-hero has-bg-img corners" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <h1 className="mt-5 text-white popopolis-logo">Case Study</h1>
                    <h4 className="mb-5 text-whie popopolis-logo">Image Resizer & AWS Deployment
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

{/* overview */}
        <Row className="mt-5">
          <h2 className="popopolis-logo">Overview</h2>
          <p>
            The final project of the Cloud Computing specialization for a Full-Stack Web Development bootcamp 
            was to implement a new feature to an application with AWS resources and deploy it through AWS.
            <br /> <br />
            The application this feature will be added to is the React CRUD (create, read, update, and delete functionality) movie application.<br />
            A clone of the front-end was used and additional endpoints were added to the original API.
          </p>
        </Row>

        <Row className="bg-success my-4 py-1 corners"></Row>

{/* image resizer */}
        <Row>
          <Col>
            <h2 className="popopolis-logo">Image Resizer</h2>
            <p>
              A new feature was to be added to an application allowing users to upload a profile image.
              The image will need to be resized to be displayed all at once in a gallery.
              <br /><br />
              To implement the new feature, I configured an S3 bucket, created a lambda function, 
              and then wrote the code that would resize an image uploaded to one folder in the S3 bucket 
              and then upload the resized image to another folder in the same S3 bucket.  
              This code and necessary packages were compressed to a .zip file and uploaded to the lambda function.
            </p>

            <Row className="d-grip gap-3">
              <Col className="m-3 p-4 aws-tech corners">
                <h4>AWS SDK</h4>
                <h6>Software Development Kit</h6>
                <p>A way to call AWS services using JavaScript APIs to build Node.js, web, and mobile web applications.</p>
              </Col>

              <Col className="m-3 p-4 aws-tech corners">
                <h4>AWS Lambda</h4>
                <p>
                An event-driven, “serverless” Function as a Service (FaaS) resource.  
                <br />
                AWS actually manages the server, you essentially just configure the code and the event trigger.
                </p>
              </Col>
            </Row>

            <p>
              To configure the lambda function, a S3 trigger and execution role were added.  
              The trigger signals the lambda function to run when an object is created in the appropriate S3 bucket folder 
              and the execution role allows certain read and write permissions to the bucket that is the trigger source.
              <br /><br />
              New API endpoints were added to the API used for the application to list the objects in the bucket, 
              post an object to the bucket, and to get an object from the bucket.  
              ( these endpoints can be found at the end of index.js in the [movie-api](https://github.com/kellysdev/movie-api) repo)
              <br /><br />
              The new feature was tested locally with Docker, LocalStack and Postman.  
              It initially worked as expected except that the resized image was not being retrieved correctly.  
              This was resolved by implementing the mimeType package to make sure the image being retrieved was in the correct file format.
            </p>

            <div className="m-3 p-4 aws-tech corners">
              <h4>LocalStack</h4>
              <p>
                LocalStack lets you test AWS resources locally without having to spin up all instances, load balancers, etc (more on that below).
                It runs as a Docker container.
                <br />
                LocalStack is installed by pip, the Python package manager.  
                I had never used Python before this project, so I had to install Python and learn how to download things with pip 
                as well as how to get Docker and LocalStack running!
              </p>
            </div>

            <p>
              With the new feature working, it was time to add it to the React client-side application.  
              This was done by cloning the movie-client repository and adding a S3Images component as a child to the ProfileView component.
            </p>

            <Row>
              <Col sm={6}>
                <p>
                  This new S3Images component by default shows a placeholder profile image above a field where users can upload an image 
                  and a link to select an image from the bucket.  When a user uploads an image, it is set as their profile image.  
                  They can also click the link to view images from the bucket and when they select an image in the bucket, 
                  it is set as their profile image.
                </p>
              </Col>
              <Col sm={1}>
                <img 
                  src="imageresizer.png" alt="screenshot" className="aws-img corners"
                />
              </Col>
            </Row>

            <p>
              Clicking on the button to show the images in the bucket opens a modal that displays all of the resized images in the bucket.
              <br /><br />
              With the new feature implemented into the application, it was time to deploy it with AWS.
            </p>

          </Col>
        </Row>

        <Row className="bg-success my-4 py-1 corners"></Row>

{/* deployment */}
        <Row>
          <Col>
            <h2 className="popopolis-logo">Deploy a Full Stack MERN App with AWS</h2>
            <p>
              First, the application now consists of an API, front-end code, a database, 
              and an image resizer feature implemented with AWS Lambda and a S3 bucket.
              <br /><br />
              The API integrates the front-end React code to the database in MongoDB, 
              allowing the front-end to perform CRUD (create, read, update and delete) operations to the database.   … want security …
              <br /><br />
              To deploy this application with Amazon Web Services (AWS), 
              the following resources were configured through AWS CLI (command line interface) and the AWS management console:
            </p>

  {/* bulk tech descriptions */}
            <Row className="d-grip gap-3 justify-content-center">
              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>IAM</h4>
                <h6>Identity and Access Management</h6>
                <p>Defines what users and resources have access to.</p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>VPC</h4>
                <h6>Virtual Private Cloud</h6>
                <p>An isolated part of the AWS cloud populated by AWS objects, such as EC2 instances.</p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>Security Groups</h4>
                <p>
                  Attached to AWS resources and they define what AWS resources can access one another.
                </p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>Availability Zones & Subnets</h4>
                <p>
                  Applications are typically deployed across multiple Availability Zones in case of a service outage.  
                  This application will be deployed across three availability zones within the same region (us-west-2).
                  <br /><br />
                  Subnets are smaller divisions of a VPC and are created within Availability Zones.
                  <br /><br />
                  This deployment utilized 6 total subnets:<br />
                </p>
                <ul>
                  <li>1 private subnet in each of 3 Availability Zones</li>
                  <li>
                    1 public subnet in each of 3 Availability Zones
                  </li>
                </ul>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>EC2</h4>
                <h6>Elastic Cloud Compute</h6>
                <p>
                  The core computing service of AWS.  An EC2 instance is essentially a virtual computer.<br /><br />
                  This deployment utilized EC2 instances to run the web servers and to act as Bastion Instances.<br /><br />
                  <span className="offset">
                    The Bastion Instances sit in public subnets and can be accessed from the public internet with a key through SSH.  
                    This makes them a secure way to SSH into the instances not available to the public internet, 
                    like the web servers sitting in private subnets.
                  </span>
                </p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>Route Tables</h4>
                <p>
                  Define how traffic flows within the VPC, as well as into and out of the VPC.<br /><br />
                  This deployment utilized:
                </p>
                <ul>
                  <li>A private route table with a local route and a route for the NAT Gateway, which was associated with the private subnets.</li>
                  <li>A public route table with a local route and a route for the Internet Gateway, which was associated with the public subnets.</li>
                </ul>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>NAT Gateway</h4>
                <p>Allows traffic out of a VPC to the public internet.</p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>Internet Gateway</h4>
                <p>Allows traffic into and out of the VPC.</p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>AMI</h4>
                <h6>Amazon Machine Image</h6>
                <p>
                  An image containing the information to launch an EC2 instance.<br /><br />
                  To make a custom AMI to launch custom instances from:<br />
                  <span className="offset">
                  Create an image from an EC2 instance that has been created and configured 
                  to run the web server and is connected to the MongoDB database through a connection string.
                  </span>
                </p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>ALB</h4>
                <h6>Application Load Balancer</h6>
                <p>
                  Listens for incoming connections that match the specified port and protocol for its attached Security Group.  
                  These connections are redirected to a target group, like that in our ASG.
                  <span className="offset">
                    Target groups are groups of targets serving the same purpose, like EC2 instances functioning as web servers.
                  </span>
                </p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>ASG</h4>
                <h6>Auto Scaling Group</h6>
                <p>
                  Automatically launches and terminates EC2 instances based on health checks and scaling settings.<br /><br />
                  <span className="offset">
                    EC2 instances are launched from Launch Templates.  
                    In our application, they are launching instances from our custom AMI, attaching a security group and our ALB, 
                    and running a bash script to run the web server.
                  </span>
                </p>
              </Col>

              <Col xs={12} xl={3} className="p-4 aws-tech corners">
                <h4>S3</h4>
                <p>
                  The core object storage service of AWS.  An S3 bucket is the storage resource.<br /><br />
                  This deployment utilized two buckets:<br />
                  Front-end:<br />
                  <span className="offset">
                    The front-end code build files were uploaded to a bucket which was configured to act as a static website
                  </span><br />
                  Image Resizer:
                  <span className="offset">
                    An S3 bucket with a IAM policy attached as the Execution role 
                    (this grants the Lambda function select read and write access to the bucket).
                  </span>
                </p>
              </Col>
            </Row>

            {/* i'd like an image here tying the resources together? */}

            <p className="mt-5">
              To access the application, with all resources running, you would just visit the S3 static website URL.
              <br />
              The resources are quite expensive to run for very long, though, so application is no longer actively deployed.
            </p>

          </Col>
        </Row>
        
        <Row className="m-3 justify-content-center">
          <iframe 
            src="https://player.vimeo.com/video/953774483?badge=0&amp;autopause=0&amp;transparent=0&amp;player_id=0&amp;app_id=58479" 
            width="800" height="500"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="ScreenRecording" 
          />
        </Row>

        <Row className="bg-success my-4 py-1 corners"></Row>

{/* credits */}
        <Row className="my-5 credits">
          <h1 className="mb-3 popopolis-logo">Credits:</h1>
          <p>
            Lead Developer: Kelly Scott<br/>
            Mentor: Vivek Kumar Maskara
          </p>
          <a href="https://github.com/kellysdev/s3-image-resizer">Image Resizer GitHub Repository</a>
          <a href="https://github.com/kellysdev/movie-aws">Front-End GitHub Repository</a>
          <a href="https://github.com/kellysdev/movie-api">API GitHub Repository</a>
          <br /><br />
          <a href="https://unsplash.com/@alex_andrews" className="meet-hero-credit">title photo credit: @alex_andrews</a>
        </Row>

      </Col>

    </Row>
  );
};

export default AWSCRUD;