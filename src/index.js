import ReactDOM from "react-dom";
import React, { Component } from "react";
import Form from "./js/components/Form.js";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
