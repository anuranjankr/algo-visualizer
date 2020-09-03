import React from "react";
import { Button } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./Layout.css";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import DeviceHubOutlinedIcon from "@material-ui/icons/DeviceHubOutlined";
import GrainOutlinedIcon from "@material-ui/icons/GrainOutlined";

const Visualize = (props) => {
  const { history } = props;
  return (
    <>
      <div className="app__navButtons">
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<InfoOutlinedIcon />}
          style={{ marginRight: "7px" }}
          onClick={() => history.push("/about")}
        >
          ABOUT
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AssessmentOutlinedIcon />}
          style={{ marginRight: "7px" }}
          onClick={() => history.push("/sorting")}
        >
          SORTING
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<DeviceHubOutlinedIcon />}
          style={{ marginRight: "7px" }}
          onClick={() => history.push("/ai")}
        >
          AI Algos
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<GrainOutlinedIcon />}
          style={{ marginRight: "7px" }}
          onClick={() => history.push("/ml")}
        >
          ML Algos
        </Button>
      </div>
    </>
  );
};

/*
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
sort

LR

AI
*/

export default Visualize;
