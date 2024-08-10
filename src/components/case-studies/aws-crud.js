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
          <Col xs={12} sm={8}>
            <h2 className="popopolis-logo">Overview</h2>
            <p>
              The final project of the Cloud Computing specialization for a Full-Stack Web Development bootcamp 
              was to implement a new feature to an application with AWS resources and deploy it through AWS.
              <br /> <br />
              The application this feature will be added to is the React CRUD (create, read, update, and delete functionality) movie application.<br />
              A clone of the front-end was used and additional endpoints were added to the original API.
            </p>
          </Col>
          <Col xs={12} sm={3} xxl={2} className="m-auto">
            <svg fill="#FAF7F5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" 
              strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" 
              strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m12.248 6.685c-.656 2.694-.614 2.55-1.209 5.014-.013.227-.201.406-.43.406-.025 0-.05-.002-.074-.006h.003-.675c-.02.004-.044.006-.067.006-.203 0-.37-.151-.396-.346v-.002c-.577-1.846-1.35-4.41-1.87-6.125-.192-.633-.066-.618.436-.605.174.005.342 0 .515 0 .012-.001.026-.002.041-.002.196 0 .358.145.385.333v.002c.169.605.281 1.069 1.246 4.88.018.075.042.146.066.215h.051c.023-.094.051-.182.075-.277q.548-2.313 1.092-4.63c.113-.48.314-.525.8-.525h.356c.32.005.422.07.502.389.281 1.097 1.102 4.77 1.251 5.174.24-.858-.084.37 1.336-5.108.098-.379.192-.454.577-.454h.591c.253.005.328.084.267.333-.113.446-.136.464-1.935 6.228-.146.464-.197.506-.684.506h-.497c-.342 0-.431-.061-.515-.394-.202-.759-1.092-4.485-1.238-5.01zm-6.364 5.211c.068.139.208.233.37.233.114 0 .216-.046.291-.121l.295-.197c.32-.211.342-.295.169-.633-.186-.354-.296-.773-.296-1.218 0-.015 0-.03 0-.045v.002c0-.146.028-2.61-.042-3.13-.062-.87-.665-1.584-1.471-1.811l-.014-.003c-.353-.098-.758-.154-1.177-.154-.126 0-.252.005-.375.015l.016-.001c-.736.029-1.42.224-2.025.547l.025-.012c-.091.049-.159.13-.191.227l-.001.003c-.026.118-.041.254-.041.393 0 .061.003.122.008.182l-.001-.008c.028.277.122.328.384.24.24-.08.469-.182.708-.253.345-.128.743-.202 1.159-.202.323 0 .635.045.931.128l-.024-.006c.317.095.564.334.668.639l.002.007c.077.258.122.554.122.861 0 .094-.004.188-.012.28l.001-.012c0 .258-.005.258-.258.211-.43-.107-.923-.169-1.431-.169-.187 0-.373.008-.556.025l.024-.002c-.726.053-1.36.406-1.787.933l-.004.005c-.26.36-.416.811-.416 1.298 0 .197.025.387.073.569l-.003-.016c.104.682.588 1.228 1.225 1.422l.012.003c.28.1.603.158.94.158.667 0 1.282-.227 1.77-.608l-.006.005c.178-.131.338-.29.52-.446.146.234.272.454.417.656zm-.72-2.887h.005c.111 0 .201.09.201.201 0 .014-.001.027-.004.041v-.001c-.01.178.005.356-.014.534-.05.523-.377.959-.83 1.164l-.009.004c-.294.154-.641.245-1.01.245-.075 0-.149-.004-.222-.011l.009.001c-.529-.031-.946-.467-.946-1.001 0-.082.01-.162.029-.239l-.001.007c.026-.548.46-.987 1.004-1.021h.003c.21-.034.452-.053.698-.053.388 0 .766.048 1.126.138l-.032-.007zm16.346 3.051c.825-.277 1.408-1.043 1.408-1.945 0-.141-.014-.279-.041-.412l.002.013c-.107-.653-.564-1.177-1.169-1.379l-.012-.004c-.912-.286-1.659-.575-2.383-.905l.129.053c-.209-.105-.351-.315-.356-.559v-.001c-.006-.037-.009-.079-.009-.122 0-.419.318-.763.726-.805h.003c.211-.05.453-.078.702-.078.217 0 .43.022.635.063l-.02-.003c.342.066.67.197 1.003.295.131.042.277.098.366-.075.046-.097.073-.211.073-.33 0-.298-.166-.557-.411-.689l-.004-.002c-.494-.236-1.074-.373-1.686-.373-.546 0-1.066.11-1.54.308l.026-.01c-.725.288-1.228.984-1.228 1.797 0 .779.462 1.451 1.127 1.755l.012.005c.361.174.754.277 1.134.417s.759.272 1.13.426c.256.142.427.411.427.72 0 .286-.146.537-.368.684l-.003.002c-1.298.72-3.04-.113-3.243-.178-.154-.051-.248.01-.295.174-.038.089-.06.193-.06.302 0 .369.255.679.599.761l.005.001c.531.213 1.146.336 1.79.336.546 0 1.072-.089 1.563-.253l-.035.01zm-7.634 7.625c2.498-.268 4.766-1.052 6.763-2.244l-.076.042c.375-.22.726-.48 1.082-.736.342-.24.15-.862-.53-.572-2.344 1.029-5.066 1.687-7.925 1.821l-.051.002c-.3.015-.651.023-1.004.023-1.152 0-2.284-.088-3.389-.258l.123.016c-3.117-.449-5.924-1.458-8.429-2.927l.109.059c-.088-.059-.189-.107-.297-.139l-.008-.002c-.23-.051-.361.22-.113.454 3.069 2.838 7.189 4.578 11.716 4.578h.014-.001c.675-.038 1.35-.042 2.015-.117zm8.187-4.32c.694.038.909.277.736.946-.178.694-.436 1.369-.651 2.053-.042.136-.197.295-.038.413.174.122.305-.047.422-.154.455-.433.813-.962 1.044-1.555l.01-.029c.258-.564.408-1.224.408-1.919 0-.016 0-.031 0-.047v.002c-.01-.29-.084-.413-.366-.492-.224-.069-.487-.122-.757-.148l-.016-.001c-.183-.023-.394-.036-.609-.036-.836 0-1.626.197-2.327.546l.03-.014c-.155.084-.289.176-.412.28l.004-.003c-.051.042-.15.248.113.286.024.002.053.003.081.003.069 0 .137-.006.202-.018l-.007.001c.526-.075 1.134-.118 1.751-.118.134 0 .267.002.4.006h-.019z" >
                </path>
              </g>
            </svg>
          </Col>
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
                <div>
                  <h4>AWS Lambda</h4>
                </div>

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
              <Col sm={12} md={6}>
                <p>
                  This new S3Images component by default shows a placeholder profile image above a field where users can upload an image 
                  and a link to select an image from the bucket.  When a user uploads an image, it is set as their profile image.  
                  They can also click the link to view images from the bucket and when they select an image in the bucket, 
                  it is set as their profile image.
                </p>
              </Col>
              <Col sm={12} md={6} className="m-auto">
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