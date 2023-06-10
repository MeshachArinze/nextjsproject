import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      Copyright &copy; 2004 - 2023 Pluralsight LLC. All rights reserved.
      <div>
        <a
          className="psds-link psds-theme--dark psds-link--appearance-subtle"
          href="https://www.pluralsight.com/terms"
        >
          Terms of Use
        </a>
        |{" "}
        <a
          className="psds-link psds-theme--dark psds-link--appearance-subtle"
          href="https://www.pluralsight.com/privacy"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
