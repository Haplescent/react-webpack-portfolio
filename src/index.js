import ReactDOM from "react-dom";
import React, { Component } from "react";
import Form from "./js/components/Form.js";
import AppBar from "./js/components/AppBar.js";

const wrapper = document.getElementById("container");
wrapper
  ? ReactDOM.render(
      <div>
        <AppBar />
        <Form />
      </div>,
      wrapper
    )
  : false;
