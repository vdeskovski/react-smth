import React from "react";
import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  function navigateHandler() {}

  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
};

export default HomePage;
