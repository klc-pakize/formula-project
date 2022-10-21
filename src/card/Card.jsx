import Language from "../languages/Languages";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helper/data";

const Card = () => {
  console.log(data);
  return (
    <Container className="background rounded-3 mt-4 p-4 ">
      <h1 className="header-1 text-white my-2 ">2022 PILOTS</h1>
      <Row className="g-3 justify-content-center">
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...lang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
