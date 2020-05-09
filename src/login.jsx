import React, { Component } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { login } from "./services/user";
// import { Link } from "react-router-dom";
class Login extends Component {
  state = {
    account: {
      emailAddress: "",
      password: "",
    },
    errors: {},
  };
  //const Joi = require('joi-browser')
  // schema = {
  //   username: Joi.string().alphanum().required(),

  //   password: Joi.string().min(6).max(12).required(),
  // };
  // validation = () => {
  //   const res = Joi.validate(this.state.account, this.schema, {
  //     abortEarly: false,
  //   });
  //   const errors = {};
  //   for (const i of res.error.details) {
  //     errors[i.path] = i.message;
  //   }
  //   this.setState({ errors });
  //   console.log(errors);
  //   return errors;
  // };
  // validationIndividual = (input) => {
  //   console.log(input);
  //   const { name, value } = input;
  //   const obj = {
  //     [name]: value,
  //   };
  //   console.log(obj);
  //   const schema = {
  //     [name]: this.schema[name],
  //   };
  //   console.log(schema);
  //   const res = Joi.validate(obj, schema, { abortEarly: false });
  //   const errors = { ...this.state.errors };
  //   if (res.error) {
  //     errors[name] = res.error.details[0].message;
  //   } else {
  //     delete errors[name];
  //   }

  //   console.log(res);
  //   this.setState({ errors });
  //   //return errors;
  // };
  handleSubmit = async (e) => {
    //debugger;

    e.preventDefault();
    // this.validation();
    const data = await login(this.state.account);
    console.log(data);
    this.props.history.push("/list");

    console.log("submit");
  };
  handleCancel = () => {
    this.props.history.push("/login");
  };
  hanleChange = (e) => {
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;

    // this.validationIndividual(e.target);
    this.setState({ account: account });
  };

  render() {
    return (
      <div className="container">
        <form className="login">
          <h4 className="login__header">I'M A RETURNING CUSTOMER</h4>
          <div
            className={
              this.state.errors.emailAddress
                ? "form-group invalid"
                : "form-group"
            }
          >
            <label htmlFor="">Username or E-mail Address</label>
            <input
              className="form-control"
              type="text"
              name="emailAddress"
              error={this.state.errors.emailAddress}
              // value={this.state.account.username}
              onChange={this.hanleChange}
              id=""
            />
          </div>
          <div
            className={
              this.state.errors.emailAddress
                ? "form-group login__Password invalid"
                : "form-group login__Password"
            }
          >
            <a href="#" className="login__forget-password">
              (Forget Password?)
            </a>
            <label htmlFor="">Password</label>
            <input
              className="form-control"
              type="text"
              name="password"
              error={this.state.errors.password}
              // value={this.state.account.password}
              onChange={this.hanleChange}
              id=""
            />
          </div>
          <div className="login__remember-me">
            <div className="form-group__checkbox">
              <input type="checkbox" name="" id="" />
              <span>Remember Me</span>
            </div>
            <div className="add-product__actions">
              <button
                href="#"
                onClick={this.handleCancel}
                className="btn btn--gray"
              >
                Cancel
              </button>
              <Link
                onClick={this.handleSubmit}
                to="/list"
                className="btn btn--primary"
              >
                Login
              </Link>
            </div>
          </div>
          <Link to="/list" className="login__register-now">
            Register Now
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
