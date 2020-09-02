import React from "react";
import { Button } from "@material-ui/core";

const Visualize = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/about")}>ABOUT</Button>
      <Button onClick={() => history.push("/sort")}>SORTING</Button>
    </>
  );
};

export default Visualize;
