import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      email: "",
      password: "",
      userrole: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    // alert('A form was submitted: ' + this.state.username);
    

    fetch('http://localhost:8000/core/register', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        if(response.ok){
          // <Redirect to="/dashboard.jsx"/>;
        }
        return response.json();
      });

    event.preventDefault();
}

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="userrole">User Role</label>
              <select name="userrole" placeholder="User Role" value={this.state.userrole} onChange={this.handleInputChange}>
                <option value="manager">Manager</option>
                <option value="client">Client</option>
                <option value="teammember">Team Member</option>
              </select>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
