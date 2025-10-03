import { Col, Container, Row } from "react-bootstrap";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <Container fluid className="py-4" style={{ backgroundColor: "#87250E" }}>
        <Row
          className="d-flex justify-content-between align-items-center"
          style={{ padding: "0 14rem" }}
        >
          <Col md="auto" className="fw-bold fs-2">
            ReactMeals
          </Col>
          <Col md="auto">
            <HeaderCartButton onClick={props.onShowCart} />
          </Col>
        </Row>
      </Container>
      <div
        style={{
          height: "40vh",
          backgroundImage: `url(${mealsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </>
  );
};

export default Header;
