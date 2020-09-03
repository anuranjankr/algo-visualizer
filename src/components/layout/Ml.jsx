import React from "react";
import { Button } from "@material-ui/core";
import "./Layout.css";

const Ml = (props) => {
  const { history } = props;
  return (
    <>
      <div className="app__navButtons">
        <Button onClick={() => history.push("/ml/lr")}>
          Linear Regression
        </Button>
      </div>
    </>
  );
};

export default Ml;
