import { Col } from "react-bootstrap";
export const ProjectCard = ({ title,description,imageUrl }) => {
    return (
        <Col md={4}>
            <div className="proj-imgbx">
                <img src={imageUrl} alt="" />
            <div className="proj-txtx">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            </div>
        </Col>
    )
}