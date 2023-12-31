import { Col } from "react-bootstrap";

export const ProjectCard = ({tittle, description, imgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <a href="https://mdavidv.github.io/LISSOME/" target="blank"><h4>{tittle}</h4></a>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}