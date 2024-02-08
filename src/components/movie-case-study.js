import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieCaseStudy = () => {
  return (
    <Row>
      <Col>
      
        <Row>
          <img className="mcs-hero" src="https://www.flickr.com/photos/vancouver-archives/32350611738" alt="black and white vintage theater"/>
          <Col>
            <h1>Case Study</h1>
              <p>Career Foundry Achievement Project 3<br/>
              PopOpolis Movie Application</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Overview</h3>
            <p>
              This project is a single-page, responsive app with several interface views and a polished user experience.
            </p>
            <h3>Purpose & Context</h3>
            <p>
              This app was built to add to my portfolio while taking the CareerFoundry Full-Stack Web Development course.  It was instrumental in learning to utilize the MERN tech stack.
            </p>
          </Col>
          <Col>
            <h3>Objective</h3>
            <p>
              The aim of this project was to build the client-side to complement a previously built server-side API (application programming interface).  Together, these applications allow a user CRUD interactivity (the ability to create, read, update, and delete information) with a movie application in the form of creating and deleting an account, viewing information about movies, editing user information, and maintaining a list of their own favorite movies.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Developement Steps</h3>
            <ol>
              <li>Planning and setting up the project</li>
              <li>Creating the components</li>
              <li>Client-side routing</li>
              <li>Deploy</li>
            </ol>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <h3>1 - Planning</h3>
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

        <Row>
          {/* wirefram carousel */}
        </Row>

        <Row>
          <h3>2 - Creating the Components</h3>
          <Col>
            <h4>Goal:</h4>
            <p>
              To learn and implement React and JWT authentication to create five views (components) and to implement Bootstrap to style the user interface.<br/>
              Additionally, to create profile view, search bar and navigation components as well as add the ability for users to add and remove movies from their list of favorites.
            </p>
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
          <Col>
            <h4>Solutions:</h4>
            <p>
              I took courses through Codecademy to supplement my knowledge of React.<br/>
              I also worked with my mentor, who discovered a syntax error that solved the problem with movie data not displaying: INSERTPICTURE
            </p>
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col>
            <h3>2a - Technologies</h3>
            <p>
              <span>The backbone of this application is React:</span><br/>
              A JavaScript library that uses components and state management to create user interfaces. The parent component stores data and passes it to child components. <br/><br/>
              In this application, for example, the MainView component is the landing page after logging in and loads the data for all the movies.  It then passes that data to MovieCard, MovieView and ProfileView components.
            </p>
            <p>
              <span>Bootstrap:</span><br/>
              A framework for responsive websites that follows a grid system to organize the layout of your user interface and has prebuilt components, utilities, and styling.<br/><br/>
              Components utilized in this application were the navigation bar, cards, forms, search bar, modal, and buttons.
            </p>
          </Col>
        </Row>

        <Row>
          <h3>3 - Client-side Routing</h3>
          <p>popopolis.netlify.app/ <span></span> popopolis.netlify.app/profile</p>
          <Col>
            <h4>Goal:</h4>
            <p>To link the different components together, using React Router and react-router-dom, so that they can be accessed from the single-page application.</p>
          </Col>
          <Col>
            <h4>Challenge:</h4>
            <p>Rearranging most of the return code in MainView.</p>
          </Col>
          <Col>
            <h4>Solution:</h4>
            <p>It was a good opportunity to review how I was rendering each component and to fine tune my Bootstrap columns and rows.</p>
          </Col>
        </Row>

        <Row>
          <h3>4 - Deploy on Netlify</h3>
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
          {/* screenshots carousel */}
        </Row>

        <Row>
          <img src="../public/movie-screenshots/logo.png" alt="PopOpolis"/>
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