import { Col } from "react-bootstrap";

export default function ProjectCard ({ title, description, imgUrl })  {
  const style = {
    backgroundSize: '',
  }
    return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={style} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
