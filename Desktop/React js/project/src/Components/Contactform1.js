import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import "./Contactform1.css";
import { useRef } from "react";
import contact_image_link from "./contact.png";
import TrackVisibility from 'react-on-screen';
import contact_img from "./contact-img.svg"

function Contactform1() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hyl1n1g', 'template_yenrbrp', form.current, 'W5WvDe6D8P9iKkDvO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="flex py-5 ">
      <Container className="">
        <Row>
          <Col lg={6}  className="text-center mb-5 ">
          <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact_img} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col lg={6} className="mb-5 ">
            {/* <div className="side"> */}
              {/* <h1>Get In Touch</h1> */}
              <form ref={form} onSubmit={sendEmail}>
                <div className="nf">
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="name"
                      className="Name"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col size={12} sm={6} md={6} mb-3 className="px-1">
                    <input
                      type="text"
                      name="name"
                      className="Name1"
                      placeholder="Last Name"
                    />
                  </Col>
                </div>
                <div className="ng">
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="phone"
                      name="phone"
                      className="phone"
                      placeholder="Phone No."
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      className="email"
                      placeholder="Email"
                    />
                    <br></br>
                  </Col>
                </div>
                <Col size={12}  className="px-1 w-75  ">
                  <textarea
                    name="message"
                    className="area w-100"
                    placeholder="Message"
                  />
                  <br></br>
                </Col>
                <button type="submit" className="button">
                  Submit
                </button>
              </form>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contactform1;
