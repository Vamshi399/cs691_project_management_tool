import React from "react";
import loginImg from "../../login.svg";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div>
          Welcome to the Project Management Tool.
      </div>
    );
  }
}
