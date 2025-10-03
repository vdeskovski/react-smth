import { useContext, useState } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItemsRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };
  const cancelOrderHandler = () => {
    setIsCheckout(false);
  };
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-course-fa14e-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemsRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const modalActions = (
    <Row md="auto" className="mt-2 d-flex justify-content-end">
      <Col>
        <Button
          onClick={props.onHideCart}
          variant="outline-light"
          className="rounded-4"
          style={{
            width: "6rem",
            color: "#87250E",
            borderColor: "#87250E",
          }}
        >
          Close
        </Button>
      </Col>
      {hasItems && (
        <Col>
          <Button
            className="rounded-4 border-0"
            onClick={orderHandler}
            style={{ width: "6rem", backgroundColor: "#87250E" }}
          >
            Order
          </Button>
        </Col>
      )}
    </Row>
  );

  const cartModalContent = (
    <Container className="ps-4 pe-4 pt-3 pb-3">
      {cartItems}
      <Row className="mt-2 justify-content-between">
        <Col md="auto" className="ps-1">
          <h2>Total Amount</h2>
        </Col>
        <Col md="auto">
          <h2>{totalAmount}</h2>
        </Col>
      </Row>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.onHideCart}
          cancelOrder={cancelOrderHandler}
        />
      )}
      {!isCheckout && modalActions}
    </Container>
  );
  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitContent = (
    <p className="text-success">Successfully sent the order!</p>
  );

  return (
    <Modal show={props.shown} onHide={props.onHideCart} className="rounded-0">
      <div
        className="rounded-3"
        style={{
          backgroundColor: "white",
          color: "black",
          overflow: "scroll",
          overflowX: "hidden",
          maxHeight: "30rem",
        }}
      >
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitContent}
      </div>
    </Modal>
  );
};

export default Cart;
