import { Component } from "react";
import { Greeting } from "./Greeting";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const { isLoggedIn } = this.state ;
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />}
        </div>
      );
    }
  }
  
  