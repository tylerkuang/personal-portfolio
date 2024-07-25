import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedinIcon from "../assets/img/linkedin.svg";
import facebookIcon from "../assets/img/facebook.svg";
import githubIcon from "../assets/img/github.svg";

export const Footer = () => {
  const handleGitClick = async (e) => {
    // Prevent the default action to allow time to log the click
    e.preventDefault();

    // Log the click to your server
    await fetch('/api/track-visit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path: '/github' }),
    });

    // Allow time for the fetch to complete before opening the link
    setTimeout(() => {
        // Redirect to the external link in a new tab
        window.open('https://github.com/tylerkuang', '_blank', 'noopener,noreferrer');
    }, 100); // Delay to ensure fetch completes
  };

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
              <a href="https://linkedin.com/in/tyler-kuang/" target="_blank"><img src={linkedinIcon} alt="Icon" /></a>
              <a href="https://facebook.com/tyler.kuang.7" target="_blank"><img src={facebookIcon} alt="Icon" /></a>
              <a href="https://github.com/tylerkuang" onClick={handleGitClick} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}