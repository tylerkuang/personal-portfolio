import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedinIcon from "../assets/img/linkedin.svg";
import facebookIcon from "../assets/img/facebook.svg";
import githubIcon from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={linkedinIcon} alt="Icon" /></a>
              <a href="#"><img src={facebookIcon} alt="Icon" /></a>
              <a href="#"><img src={githubIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}