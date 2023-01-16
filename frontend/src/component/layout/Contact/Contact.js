import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:usamazafar2221@gmail.com">
        <Button>Contact: usamazafar2221@gmail.com</Button>
      </a>
      <a className="mailBtn" href="mailto:ag9862873@gmail.com">
        <Button>Contact: ag9862873@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
