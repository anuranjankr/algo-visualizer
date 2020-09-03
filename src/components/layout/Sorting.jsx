import React from "react";
import { Button } from "@material-ui/core";
import "./Layout.css";

const Sorting = (props) => {
  const { history } = props;
  return (
    <>
      <div className="app__navButtons">
        <Button onClick={() => history.push("/sorting/bubble")}>bubble</Button>
        <Button onClick={() => history.push("/sorting/merge")}>merge</Button>
        <Button onClick={() => history.push("/sorting/selection")}>
          selection
        </Button>
      </div>
    </>
  );
};

export default Sorting;
