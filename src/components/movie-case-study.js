import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const MovieCaseStudy = () => {
  return (
    <Row>
      <Col>
                {/* hero */}
        <Row>
          <header className="hero has-bg-img" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              {/* <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}> */}
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mt-5 text-warning">Case Study</h1>
                    <h4 className="mb-5 text-warning">React CRUD Movie Application</h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

        <Row className="mt-4">
          <Col>
            <h3>Overview</h3>
            <p>
              This project is a single-page, responsive app with several interface views and a polished user experience.
            </p>
          </Col>
          <Col>
            <h3>Purpose & Context</h3>
            <p>
              This app was built to add to my portfolio while taking the CareerFoundry Full-Stack Web Development course.  It was instrumental in learning to utilize the MERN tech stack.
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3>Objective</h3>
            <p>
              The aim of this project was to build the client-side to complement a previously built server-side API (application programming interface).  Together, these applications allow a user CRUD interactivity (the ability to create, read, update, and delete information) with a movie application in the form of creating and deleting an account, viewing information about movies, editing user information, and maintaining a list of their own favorite movies.
            </p>
          </Col>
        </Row>

        <Row className="bg-warning py-1"></Row>

        <Row className="my-5">
          <Col>
            <h3>Developement Steps</h3>
            <ol>
              <li>Planning and setting up the project</li>
              <li>Creating the components</li>
              <li>Client-side routing</li>
              <li>Deploy</li>
            </ol>
          </Col>
        </Row>

        <Row className="mini-dividers bg-warning py-1"></Row>
        <Row className="my-5">
          <h3 className="mb-3">1 - Planning</h3>
          <Col>
            <h4>Goal:</h4>
            <p>To decide on the technologies needed to build the project and start setting up the file and component structure based on the project brief.</p>
          </Col>
          <Col>
            <h4>Challenge:</h4>
            <p>Learning React and about many different frameworks and tools took some time and going through a lot of documentation.</p>
          </Col>
          <Col>
            <h4>Solution:</h4>
            <p>I implemented Parcel, ESLint and prop-types to start.</p>
          </Col>
        </Row>

        <Row className="my-5">
          <h5>Wireframes from the Project Brief</h5>
          <Carousel>

            <Carousel.Item>
              <img className="carousel-img" src="wireframe-home.png" alt="wireframe for main view" />
              <Carousel.Caption>
                <h4>Main View</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-img" src="wireframe-movie.png" alt="wireframe for movie view" />
              <Carousel.Caption>
                <h4>Movie View</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-img" src="wireframe-profile.png" alt="wireframe for profile view" />
              <Carousel.Caption>
                <h4>Profile View</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-img" src="wireframe-login.png" alt="wireframe for login view" />
              <Carousel.Caption>
                <h4>Login View</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-img" src="wireframe-signup.png" alt="wireframe for signup view" />
              <Carousel.Caption>
                <h4>Signup View</h4>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        </Row>

        <Row className="mini-dividers bg-warning py-1"></Row>
        <Row className="mt-5">
          <h3 className="mb-3">2- Creating the Components</h3>
          <Col>
            <h4>Goal:</h4>
            <p>
              To learn and implement React and JWT authentication to create five views (components) and to implement Bootstrap to style the user interface.<br/>
              Additionally, to create profile view, search bar and navigation components as well as add the ability for users to add and remove movies from their list of favorites.
            </p>
          </Col>
          <Col>
            <h4>Challenges:</h4>
            <ul>
              <li>
                I had a hard time extracting the movie data from the parent component, MainView, and passing it to the MovieCard so that it would display data from within the movie object.
              </li>
              <li>
                Search bar functionality and state management
              </li>
              <li>
                Favorite movies persisting after leaving profile view
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-5">
          <h4>Solutions:</h4>
          <p>
            I took courses through Codecademy to supplement my knowledge of React.<br/>
            I also worked with my mentor, who discovered a syntax error that solved the problem with movie data not displaying: INSERTPICTURE
          </p>
        </Row>

        <Row>
          <Col sm={2} md={4} ></Col>
          <Col>
            <h3 className="mb-3">2a - Technology</h3>
            <p>
              <span>The backbone of this application is React:</span><br/>
              A JavaScript library that uses components and state management to create user interfaces. The parent component stores data and passes it to child components. <br/><br/>
              In this application, for example, the MainView component is the landing page after logging in and loads the data for all the movies.  It then passes that data to MovieCard, MovieView and ProfileView components.
              </p>
              <span>Bootstrap:</span><br/>
              A framework for responsive websites that follows a grid system to organize the layout of your user interface and has prebuilt components, utilities, and styling.<br/><br/>
              Components utilized in this application were the navigation bar, cards, forms, search bar, modal, and buttons.<br/><br/>
          </Col>
        </Row>

        <Row className="mini-dividers bg-warning py-1"></Row>
        <Row className="my-5">
          <h3>3 - Client-side Routing</h3>
          <p>popopolis.netlify.app/ <span></span> popopolis.netlify.app/profile</p>
          <Col>
            <h4>Goal:</h4>
            <p>To link the different components together, using React Router and react-router-dom, so that they can be accessed from the single-page application.</p>
          </Col>
          <Col>
            <h4>Challenge:</h4>
            <p>Rearranging most of the return code in MainView.</p>
            {/* <img className="route-image" src="routing.png" alt="a screenshot of code" /> */}
          </Col>
          <Col>
            <h4>Solution:</h4>
            <p>It was a good opportunity to review how I was rendering each component and to fine tune my Bootstrap columns and rows.</p>
          </Col>
        </Row>

        <Row className="mini-dividers bg-warning py-1"></Row>
        <Row className="my-5">
          <h3 className="mb-3">4 - Deploy on Netlify</h3>
          <Col>
            <h4>Goal:</h4>
            <p>To deploy an application that meets the requirements of the project brief.</p>
          </Col>
          <Col>
            <h4>Challenge:</h4>
            <p>The user object was stored in localStorage at login and wasn’t updating when a movie was added or removed.  It was also disappearing when the page was refreshed.</p>
          </Col>
          <Col>
            <h4>Solution:</h4>
            <p>Don’t store the user in localStorage, set the user object as a state variable at login.  On the login screen / within the LoginView component, check for a stored token and if there is one, fetch and pass the user to MainView.</p>
          </Col>
        </Row>

        <Row>
        <h5>Finished Product</h5>
          <Carousel>

            <Carousel.Item>
              <img className="carousel-img" src="screenshot-home.png" alt="screenshot of main view" />
              <Carousel.Caption>
                <h4>Main View</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-img" src="screenshot-movie.png" alt="screenshot of movie view" />
              <Carousel.Caption>
                <h4>Movie View</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-img" src="screenshot-profile.png" alt="screenshot of profile view" />
              <Carousel.Caption>
                <h4>Profile View</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-img" src="screenshot-login.png" alt="screenshot of login view" />
              <Carousel.Caption>
                <h4>Login View</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="carousel-img" src="screenshot-signup.png" alt="screenshot of signup view" />
              <Carousel.Caption>
                <h4>Signup View</h4>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        </Row>

        <Row className="bg-warning py-1 mt-5"></Row>

        <Row className="my-5">
          <img className="movie-logo mb-4" src="logo.png" alt="PopOpolis"/>
          <h3>Credits:</h3>
          <p>
            Lead Developer: Kelly Scott<br/>
            Mentor: Vini De Antoni
            Tutor: Jason Early
          </p>
          <a href="https://github.com/lladysmall/movie-client">GitHub Repository</a>
          <a href="https://popopolis.netlify.app/login">App Hosted on Netlify</a>
        </Row>

      </Col>
    </Row>
  )
};

export default MovieCaseStudy;