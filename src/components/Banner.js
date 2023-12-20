import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import Image from 'react-bootstrap/Image'
import professionalPhoto from "../assets/img/professionalPhoto.jpg"

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Ritta Sweta, `}<span className="wrap">Full-Stack Web Developer</span></h1>
            <p>With experience in JavaScript, React, NextJS, NodeJs, MERN Stack</p>
            <button 
              onClick={() => console.log('connect')}
            >
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <div class="professionalPhotoContainer">
              <Image src={professionalPhoto} alt="Professional Photo" thumbnail class="professionalPhoto"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
