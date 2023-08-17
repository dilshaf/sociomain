import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "./nav-icon1.svg"
import navIcon2 from "./nav-icon2.svg";
import navIcon3 from "./nav-icon3.svg";
import images from "./images.png"
import github from "./github.png"
import hackerrank from "./hackerrank.png"
import linkedin from "./linkedin.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={images} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href='https://www.linkedin.com/in/fathima-dilsha-p-235001286/'><img src={linkedin} alt="" className='git'/></a>
                <a href='https://github.com/dilshaf'><img src={github} alt="" className='git'/></a>
                <a href='https://www.hackerrank.com/dilshadilu4953'><img src={hackerrank} alt="" className='git'/></a>

            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}