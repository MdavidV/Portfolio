import 'animate.css';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer"];
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`  Hi! I'm Manuel Viña A.`}<span className="wrap"> {text} </span></h1>
                            <p>Motivated computer science student with a strong background in front-end development
                                seeking a position at Salesforce. Offering solid technical skills, a passion for technology, and
                                experience in front-end development, including proficiency in HTML, CSS, and JavaScript.
                                Demonstrated expertise in creating seamless user experiences. Experienced in utilizing
                                Salesforce tools such as Email Studio and Journey Builder to design and execute
                                personalized email campaigns and customer journeys. Eager to contribute to the Salesforce
                                ecosystem, leveraging front-end expertise and knowledge of Salesforce tools to drive success
                                for Salesforce and its clients.
                            </p>
                            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                        </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='header img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}