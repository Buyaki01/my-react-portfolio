import pearlsCollections from "../assets/img/pearlsCollections.PNG"
import airbnb from "../assets/img/airbnb.PNG"
import swimmingBlog from "../assets/img/swimmingBlog.PNG"
import { Col, Container, Row, Nav, Tab } from "react-bootstrap"

export const Projects = () => {
  const projects = [
    {
      title: "Online Store Shop",
      description: "Your one-stop destination for a seamless shopping experience! Integrated with stripe and Stripe webhooks payment gateway",
      imgUrl: pearlsCollections,
    },
    {
      title: "Airbnb",
      description: "Online platform with unique accommodation",
      imgUrl: airbnb,
    },
    {
      title: "Swimming Blog",
      description: "An informative swimming blog platform",
      imgUrl: swimmingBlog,
    }, 
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <p>{project.title}</p>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
