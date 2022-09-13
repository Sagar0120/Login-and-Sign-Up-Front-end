import React from "react";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      otp: "",
    };
    this.changenamehandler = this.changenamehandler.bind(this);
    this.changemailhandler = this.changemailhandler.bind(this);
    this.changephonehandler = this.changephonehandler.bind(this);
    this.changepasshandler = this.changepasshandler.bind(this);
    this.changOTPhandler = this.changOTPhandler.bind(this);
  }

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
        

      </>
    );
  }
}

export default Register;
