import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(name==="username"){
      this.setState((state) => ({
        username: value,
        password: state.password
      }))
    }
    if(name==="password"){
      this.setState((state) => ({
        username: state.username,
        password: value
      }))
    }
  }

  handleSubmit = (event) => {
    // alert('A form was submitted: ' + this.state.username); https://testapi.io/api/vamshi399/login

    fetch('http://localhost:8000/token-auth/', {
        method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
      console.log(response)
      if(response.ok){
        console.log("its logged in")
        if(response.status=="200"){
          console.log("its success")
          // this.props.history.push('/dashboard.jsx')

        }
        // <Redirect to="/dashboard.jsx"/>;
      }

      return response.json();
    }).then(function(data){
      console.log(data)
      if(data.status=="200"){

        // this.props.history.push('/dashboard.jsx')

      }
      return data;
    });

    event.preventDefault();
}

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
