import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full-Stack Developer.", "ML Engineer.", "Builder."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        } else {
            setDelta(200 - Math.random() * 50);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Tyler,`}<br></br><span className="wrap">&nbsp;{text}</span></h1>
                        <p>
                            Hello and welcome! I'm a recent graduate of the University of Southern California, where I earned a combined degree in Computer Science and Business Administration with a minor in Artificial Intelligence Applications. I'm passionate about solving challenging problems and creating impactful solutions, and I built this portfolio to help shed some insights on the person behind the code, share my journey, and showcase my work and technical skills. I also simply love to build new things!
                        </p>
                        <p>
                            I didn't begin my academic journey in Computer Science. My first few years in college I was solely a Business major, where I gained valuable insights into strategy, leadership, communication, teamwork, and organizational dynamics. However, I always felt a pull towards something more tangible and technical, where I could directly create solutions and see my personal impact. In my Junior year, I began exploring coding and fell in love with it—I felt like I unlocked the ability to bring ideas to life, solve meaningful problems, and much more.
                        </p>
                        <button onClick={() => window.location.href='#connect'}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}