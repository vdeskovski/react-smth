import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import { Col, Row } from "react-bootstrap";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <>
      <Row className="pt-4 d-flex align-items-center justify-content-between">
        <Col md="auto" className="ps-5">
          <div className="text-dark">
            <h4 className="fw-bold">{props.name}</h4>
            <div className="fst-italic">{props.description}</div>
            <div className="fw-bold" style={{ color: "#87250E" }}>
              {price}
            </div>
          </div>
        </Col>
        <Col md="auto" className="pe-5">
          <div>
            <MealItemForm onAddToCart={addToCartHandler} />
          </div>
        </Col>
      </Row>
      <hr className="hr" />
    </>
  );
};

export default MealItem;
