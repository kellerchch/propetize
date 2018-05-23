import React, {Component} from 'react'


class Auth extends Component {
    
    render() {
        return (
            <div>
            <h1> Login Page </h1>
            <a href="{process.env.REACT_APP_LOGIN"><button>Login</button></a>
          </div>
        )
    }
}
export default Auth;