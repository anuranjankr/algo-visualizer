import React from "react";
import { Button } from "@material-ui/core";
import "./Layout.css";

const Ai = (props) => {
  const { history } = props;
  return (
    <>
      <div className="app__navButtons">
        <Button onClick={() => history.push("/ai/minmax")}>MinMax</Button>
        <Button onClick={() => history.push("/ai/csp")}>csp</Button>
      </div>
    </>
  );
};

export default Ai;
