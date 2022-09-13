import React from "react";

class Register extends React.Component {
  

  changenamehandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changemailhandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changephonehandler = (event) => {
    this.setState({ phone: event.target.value });
  };

  changepasshandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changOTPhandler = (event) => {
    this.setState({ otp: event.target.value });
  };

  render() {
    return (
      <>
        <section>
          <form>
            <label>Name : </label>
            <input
              placeholder="Name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.changenamehandler}
            />

            <label>Email : </label>
            <input
              placeholder="Email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.changemailhandler}
            />

            <label>Phone : </label>
            <input
              placeholder="phone"
              name="phone"
              className="form-control"
              value={this.state.phone}
              onChange={this.changephonehandler}
            />

            <label>Password : </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.changepasshandler}
            />

            <button className="btn btn-success" onClick={this.saveUser}>
              Create user
            </button>
          </form>
        </section>

      </>
    );
  }
}

export default Register;
