import React from "react";
import { NavLink } from "react-router-dom";

 class BackButton extends React.Component {
        render() {
      return (
      <NavLink to="/brands"> 
          Back
      </NavLink>
      )}
  }
export default BackButton;