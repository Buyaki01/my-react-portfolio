import pearlsCollections from "../assets/img/pearlsCollections.PNG"
import airbnb from "../assets/img/airbnb.PNG"
import swimmingBlog from "../assets/img/swimmingBlog.PNG"
import { Col, Container, Row } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"

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
            <h2 class="mb-3 text-white">Projects</h2>
            <Row>
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>

      <img 
        className="background-image-right"
        src={colorSharp2}
      />
    </section>
  )
}
