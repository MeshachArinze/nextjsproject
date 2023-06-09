import React from "react";
import Image from "next/image";
import Link from "next/link";
import Connect from "./Connect";
import Footer from "./Footer";
import Form from "./Form";

const Signup = () => {
  return (
    <>
      <input id="pageObjectTag" type="hidden" value="SignInPage" />

      <div id="container">
        <div id="left">
          <div className="spacer"></div>
          <div className="signin">
            <div className="wrapper">
              <h1 className="logo">
                <Image
                  src="https://app.pluralsight.com/id/img/login-logo.png"
                  alt="Pluralsight"
                  width={500}
                  height={60}
                  priority
                />
              </h1>
              <Form />
              <div className="links">
                <a
                  className="psds-link psds-theme--dark psds-link--appearance-default"
                  href="/id/ForgotPassword"
                >
                  Forgot password?
                </a>
                <a
                  className="psds-link psds-theme--dark psds-link--appearance-default"
                  href="/id/signin/sso?redirectTo="
                >
                  Sign in with company or school
                </a>
              </div>
              <div className="or">
                <hr className="bar" />
              </div>
              <a
                href="https://www.pluralsight.com/get-started"
                id="create-account-link"
                className="psds-button--appearance-secondary  psds-button psds-theme--dark psds-button--size-medium"
              >
                <span className="psds-button__text">Create an account</span>
              </a>
            </div>
          </div>
          <Footer />
        </div>
        <Connect />
      </div>
    </>
  );
};

export default Signup;
