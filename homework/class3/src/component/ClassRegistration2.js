import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export class ClassRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTable: false };
  }

  /**   we need to tell for each element {firstname, lastname} to get the value we seperate event
   
   *  firsnameInput = (event) => {
   *  this.setState({ firstName: event.target.value });
   * };
   * lastnameInput = (event) => {
   *   this.setState({ last: event.target.value });
   * };
   pre
   */

  userInput = (event) => {
    this.setState({
      //depending on which textbox we clikc the event we'll be called and will get the name and the value of it
      [event.target.name]: event.target.value,
    });
    // if (this.state.showTable === true) {
    //   this.setState({ showTable: false });
    // } else {
    //   this.setState({ showTable: true });
    // }
  };
  userClick = () => {
    this.setState({ showTable: !this.state.showTable });
  };

  render() {
    return (
      <div id="class-registration">
        {/* <input type={"text"} onChange={this.firsnameInput} /> */}
        {/* here we have added just the name and the function above will find it easier with the tag "name" */}
        <label>First Name: </label>
        <input
          type={"text"}
          placeholder="enter your firstname"
          name="firstName"
          onChange={this.userInput}
        />
        <label>Last Name: </label>
        <input
          type={"text"}
          placeholder="enter your lastname"
          name="lastName"
          onChange={this.userInput}
        />
        <label>Country: </label>
        <input
          type={"text"}
          placeholder="enter your country"
          name="country"
          onChange={this.userInput}
        />
        <label>Username: </label>
        <input
          type={"text"}
          placeholder="enter your username"
          name="username"
          onChange={this.userInput}
        />
        <label>Password: </label>
        <input
          type={"text"}
          placeholder="enter your password"
          name="password"
          onChange={this.userInput}
        />
        <label>Email: </label>
        <input
          type={"text"}
          placeholder="enter your email"
          name="email"
          onChange={this.userInput}
        />
        <button onClick={this.userClick}>Show</button>
        <hr />

        {this.state.showTable && (
          <table>
            <thead>
              <tr>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Coutnry</td>
                <td>Username</td>
                <td>Password</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.firstName}</td>
                <td>{this.state.lastName}</td>
                <td>{this.state.country}</td>
                <td>{this.state.username}</td>
                <td>{this.state.password}</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
