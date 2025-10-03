import React from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <h1 className="text-danger">An error occured!</h1>
        <p>Could not find it</p>
      </div>
    </>
  );
};

export default ErrorPage;
