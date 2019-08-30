import React, { Component } from "react";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isLoggedIn: true,
    type: "admin",
    employerId: 5
  };

  // checkUserStatus = userStatus => {
  //   this.setState({
  //     isLoggedIn: userStatus
  //   });
  // };

  updateGlobal = () => {
    this.setState({
      type: "updated from child"
    });
  };

  render() {
    const { children } = this.props;

    return (
      <Provider
        value={{
          state: this.state,
          updateGlobal: this.updateGlobal,
          checkUserStatus: this.checkUserStatus
        }}
      >
        {children}
      </Provider>
    );
  }
}

export const Provider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
export default AuthProvider;
