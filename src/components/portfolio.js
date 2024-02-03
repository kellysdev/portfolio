import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Portfolio = () => {
  return (
    <>
      <Row>
        <h1>
          Portfolio
        </h1>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="meet.png" alt="meet app screenshot" />
              <Card.Title>React PWA</Card.Title>
              <Card.Subtitle>Meet</Card.Subtitle>
              <Card.Text>
                A serverless, progressive web application built with React using a test-driven development technique. 
                Fetches upcoming events from the Google Calendar API and utilizes OAuth2 authentication.
                Data visualization enabled by use of Rechart and the app itself is hosted on GitHub pages.
              </Card.Text>
              <Card.Link href="https://github.com/lladysmall/meet">See this project on GitHub</Card.Link><br/>
              <Card.Link href="https://lladysmall.github.io/meet/">Explore the live app here!</Card.Link>
            </Card.Body>
            <Card.Footer>
              <Badge>AWS</Badge> <Badge>OAuth2</Badge> <Badge>Node</Badge> <Badge>React</Badge> <Badge>Jest / React Testing Library</Badge> <Badge>cucumber-jest</Badge> <Badge>Atatus</Badge> <Badge>Lighthouse</Badge> <Badge>CSS</Badge> <Badge>HTML / JSX</Badge> <Badge>JavaScript</Badge>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="popopolis.png" alt="movie app screenshot" />
              <Card.Title>MERN Crud App</Card.Title>
              <Card.Subtitle>PopOpolis</Card.Subtitle>
              <Card.Text>
                A CRUD single-page movie application built with MERN, a REST API, Bootstrap, and hosted on Netlify.
              </Card.Text>
              <Card.Link href="https://github.com/lladysmall/movie-client">See this project on GitHub</Card.Link><br/>
              <Card.Link href="#">See the case study for this project</Card.Link><br/>
              <Card.Link href="https://popopolis.netlify.app/">Explore the live app here!</Card.Link>
            </Card.Body>
            <Card.Footer>
              <Badge>MongoDB</Badge> <Badge>Express</Badge> <Badge>React</Badge> <Badge>Node</Badge> <Badge>react-router</Badge> <Badge>Parcel</Badge> <Badge>Bootstrap</Badge> <Badge>Netlify</Badge> <Badge>Heroku</Badge> <Badge>CSS</Badge> <Badge>HTML / JSX</Badge> <Badge>JavaScript</Badge>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="pokedex.png" alt="pokedex app screenshot" />
              <Card.Title>API Fetch App</Card.Title>
              <Card.Subtitle>Pokedex</Card.Subtitle>
              <Card.Text>
                Built with HTML, CSS, JavaScript, some JQuery, and Bootstrap. The app loads data from an external API, the PokeAPI, and enables the viewing of data points in detail.
              </Card.Text>
              <Card.Link>See this project on GitHub</Card.Link>
            </Card.Body>
            <Card.Footer>
              <Badge>HTML</Badge> <Badge>CSS</Badge> <Badge>JavaScript</Badge> <Badge>jQuery</Badge> <Badge>Bootstrap</Badge>
            </Card.Footer>
          </Card>
        </Col>

      </Row>
    </>
  );
};

export default Portfolio;