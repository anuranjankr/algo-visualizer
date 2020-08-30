import React from "react";
import { Button } from "@material-ui/core";
import Bubble from "./../sort/Bubble";
import Selection from "./../sort/Selection";
import Merge from "./../sort/Merge";

const Sorting = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/sorting/bubble")}>bubble</Button>
      <Button onClick={() => history.push("/sorting/merge")}>merge</Button>
      <Button onClick={() => history.push("/sorting/selection")}>selection</Button>
    </>
  );
};

export default Sorting;
