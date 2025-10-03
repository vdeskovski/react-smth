import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <>
      <Button
        onClick={props.onClick}
        className="d-flex justify-content-around align-items-center rounded-pill pt-3 pb-3"
        style={{ width: "16rem", backgroundColor: "#6A1B0D", border: "none" }}
      >
        <span>
          <i className="bi bi-cart4"></i>
        </span>
        <span className="fw-bold">Your Cart</span>
        <span
          className="rounded-pill pt-1 pb-1"
          style={{ width: "3rem", backgroundColor: "#9B3922" }}
        >
          <span className="fw-bold">{numberOfCartItems}</span>
        </span>
      </Button>
    </>
  );
};

export default HeaderCartButton;
