import React from "react";
import { NavLink } from "react-router-dom";

 class BackButton extends React.Component {
        render() {
      return (
      <NavLink to="/"> 
          Back
      </NavLink>
      )}
  }
export default BackButton;