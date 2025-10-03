import { Col, Form } from "react-bootstrap";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <Form.Group className="d-flex align-items-center">
        <Col>
          <Form.Label
            style={{ marginRight: "-6px" }}
            className="text-dark fw-bold"
            htmlFor={props.input.id}
          >
            {props.label}
          </Form.Label>
        </Col>
        <Col className="d-flex justify-content-end">
          <Form.Control ref={ref} className="h-25" {...props.input} />
        </Col>
      </Form.Group>
    </>
  );
});
Input.displayName = "Input";

export default Input;
