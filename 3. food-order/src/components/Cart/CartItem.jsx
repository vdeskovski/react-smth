import { Button, Row, Col } from "react-bootstrap";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <>
      <Row className="pt-3">
        <Col>
          <Row>
            <Col>
              <h5 className="fw-bold">{props.name}</h5>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md="auto" className="me-5">
              <span className="fw-bold" style={{ color: "#87250E" }}>
                {price}
              </span>
            </Col>
            <Col md="auto" className="fw-bold border rounded-1 pt-1 pb-1">
              <div className="">x {props.amount}</div>
            </Col>
          </Row>
        </Col>
        <Col
          md="auto"
          className="d-flex justify-content-end align-items-center"
        >
          <Button
            className="fw-bold rounded-2 me-2"
            style={{ color: "#87250E", borderColor: "#87250E", width: "3rem" }}
            variant="outline-light"
            onClick={props.onRemove}
          >
            -
          </Button>
          <Button
            className="fw-bold rounded-2"
            style={{ color: "#87250E", borderColor: "#87250E", width: "3rem" }}
            variant="outline-light"
            onClick={props.onAdd}
          >
            +
          </Button>
        </Col>
      </Row>
      <hr className="hr border-3" style={{ borderColor: "#87250E" }} />
    </>
  );
};

export default CartItem;
