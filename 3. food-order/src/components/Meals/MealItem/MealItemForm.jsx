import { Button, Col, Form, Row } from "react-bootstrap";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Row md="auto" className=" mb-2">
          <Input
            ref={amountInputRef}
            label="Amount"
            input={{
              id: "amount",
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
        </Row>
        <Row md="auto" className="d-flex justify-content-end">
          <Col>
            <Button
              type="submit"
              className="rounded-4 border-0 fw-bold"
              style={{ width: "7rem", backgroundColor: "#87250E" }}
            >
              + Add
            </Button>
          </Col>
        </Row>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </Form>
    </>
  );
};

export default MealItemForm;
