import React, { useRef, useState } from "react";
import { Row } from "react-bootstrap";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isFiveChars = (value) => {
  return value.trim().length === 5;
};

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  return (
    <>
      <form onSubmit={confirmHandler}>
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            ref={nameInputRef}
          />
          {!formInputsValidity.name && (
            <p className="text-danger">Please enter a valid name!</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            className="form-control"
            type="text"
            id="street"
            ref={streetInputRef}
          />
          {!formInputsValidity.street && (
            <p className="text-danger">Please enter a valid street!</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="postal">Postal Code</label>
          <input
            className="form-control"
            type="text"
            id="postal"
            ref={postalInputRef}
          />
          {!formInputsValidity.postalCode && (
            <p className="text-danger">
              Please enter a valid postal code (5 characters)!
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            className="form-control"
            type="text"
            id="city"
            ref={cityInputRef}
          />
          {!formInputsValidity.city && (
            <p className="text-danger">Please enter a valid city!</p>
          )}
        </div>
        <Row className="d-flex justify-content-evenly">
          <button
            type="submit"
            className="mt-3 rounded-4 btn"
            style={{ width: "6rem", backgroundColor: "#87250E" }}
          >
            Confirm
          </button>
          <button
            onClick={() => {
              props.onCancel();
              props.cancelOrder();
            }}
            type="button"
            className="mt-3 rounded-4 btn btn-light"
            style={{ width: "6rem" }}
          >
            Cancel
          </button>
        </Row>
      </form>
    </>
  );
};

export default Checkout;
