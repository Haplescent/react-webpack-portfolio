import ReactDOM from "react-dom";
import React, { Component } from "react";
import AppBar from "./js/components/AppBar.js";
import Grid from "./js/components/Grid.js";

const wrapper = document.getElementById("container");
wrapper
  ? ReactDOM.render(
      <div>
        <AppBar />
        <br />
        <Grid />
      </div>,
      wrapper
    )
  : false;
