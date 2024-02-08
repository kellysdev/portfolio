import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Portfolio = () => {
  return (
    <>
      <Row>
        <h1 className="my-4">
          Portfolio
        </h1>
      </Row>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="meet.png" alt="meet app screenshot" />
              <Card.Title className="my-2">
                <h3>React PWA</h3>
              </Card.Title>
              <Card.Subtitle className="my-2">Meet</Card.Subtitle>
              <Card.Text>
                A serverless, progressive web application built with React using a test-driven development technique. 
                Fetches upcoming events from the Google Calendar API and utilizes OAuth2 authentication.
                Data visualization enabled by use of Rechart and the app itself is hosted on GitHub pages.
              </Card.Text>
              <Card.Link href="https://github.com/lladysmall/meet">See this project on GitHub</Card.Link><br/>
              <Card.Link href="https://lladysmall.github.io/meet/">Explore the live app here!</Card.Link>
            </Card.Body>
            <Card.Footer>
              <Badge className="bg-secondary">AWS</Badge> <Badge className="bg-secondary">OAuth2</Badge> <Badge className="bg-secondary">Node</Badge> <Badge className="bg-secondary">React</Badge> <Badge className="bg-secondary">Jest / React Testing Library</Badge> <Badge className="bg-secondary">cucumber-jest</Badge> <Badge className="bg-secondary">Atatus</Badge> <Badge className="bg-secondary">Lighthouse</Badge> <Badge className="bg-secondary">Recharts</Badge> <Badge className="bg-secondary">CSS</Badge> <Badge className="bg-secondary">HTML / JSX</Badge> <Badge className="bg-secondary">JavaScript</Badge>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="popopolis.png" alt="movie app screenshot" />
              <Card.Title className="my-2">
                <h3>MERN Crud App</h3>
              </Card.Title>
              <Card.Subtitle className="my-2">PopOpolis</Card.Subtitle>
              <Card.Text>
                A CRUD single-page movie application built with MERN, a REST API, Bootstrap, and hosted on Netlify.
              </Card.Text>
              <Card.Link href="https://github.com/lladysmall/movie-client">See this project on GitHub</Card.Link><br/>
              <Card.Link href="/movie-case-study">See the case study for this project</Card.Link><br/>
              <Card.Link href="https://popopolis.netlify.app/">Explore the live app here!</Card.Link>
            </Card.Body>
            <Card.Footer>
              <Badge className="bg-secondary">MongoDB</Badge> <Badge className="bg-secondary">Express</Badge> <Badge className="bg-secondary">React</Badge> <Badge className="bg-secondary">Node</Badge> <Badge className="bg-secondary">react-router</Badge> <Badge className="bg-secondary">Parcel</Badge> <Badge className="bg-secondary">Bootstrap</Badge> <Badge className="bg-secondary">Netlify</Badge> <Badge className="bg-secondary">Heroku</Badge> <Badge className="bg-secondary">CSS</Badge> <Badge className="bg-secondary">HTML / JSX</Badge> <Badge className="bg-secondary">JavaScript</Badge>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="pokedex.png" alt="pokedex app screenshot" />
              <Card.Title className="my-2">
                <h3>API Fetch App</h3>
              </Card.Title>
              <Card.Subtitle className="my-2">Pokedex</Card.Subtitle>
              <Card.Text>
                Built with HTML, CSS, JavaScript, some JQuery, and Bootstrap. The app loads data from an external API, the PokeAPI, and enables the viewing of data points in detail.
              </Card.Text>
              <Card.Link>See this project on GitHub</Card.Link>
            </Card.Body>
            <Card.Footer>
              <Badge className="bg-secondary">HTML</Badge> <Badge className="bg-secondary">CSS</Badge> <Badge className="bg-secondary">JavaScript</Badge> <Badge className="bg-secondary">jQuery</Badge> <Badge className="bg-secondary">Bootstrap</Badge>
            </Card.Footer>
          </Card>
        </Col>

      </Row>
    </>
  );
};

export default Portfolio;