import React from "react";

const Form = () => {
  return (
    <form
      action="/id"
      className="signInForm"
      id="passwordSignInForm"
      method="post"
    >
      <input id="RedirectUrl" name="RedirectUrl" type="hidden" value="" />{" "}
      <div>
        <label className="psds-text-input__label" htmlFor="Username">
          Email or Username
        </label>
        <input
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          className="psds-text-input__field psds-text-input__field--appearance-subtle"
          data-val="true"
          data-val-required="The Email or Username field is required."
          id="Username"
          name="Username"
          type="text"
          value=""
        />
      </div>
      <div>
        <label className="psds-text-input__label" htmlFor="Password">
          Password
        </label>
        <input
          autoComplete="off"
          className="psds-text-input__field psds-text-input__field--appearance-subtle"
          data-val="true"
          data-val-maxlength="Password must not exceed 128 characters"
          data-val-maxlength-max="128"
          data-val-required="The Password field is required."
          id="Password"
          maxLength="128"
          name="Password"
          type="password"
        />
      </div>
      <input
        data-val="true"
        data-val-required="The ShowCaptcha field is required."
        id="ShowCaptcha"
        name="ShowCaptcha"
        type="hidden"
        value="False"
      />
      <input
        id="ReCaptchaSiteKey"
        name="ReCaptchaSiteKey"
        type="hidden"
        value="6LeVIgoTAAAAAIhx_TOwDWIXecbvzcWyjQDbXsaV"
      />{" "}
      <button
        type="submit"
        className="psds-button--appearance-primary psds-theme--dark psds-button psds-button--size-medium"
        id="login"
      >
        Sign in
      </button>
      <input
        name="__RequestVerificationToken"
        type="hidden"
        value="CfDJ8MZ3_8LG_m1PphX-6_d1udqBjdDtU4TbxApjNoUgUt6Qe9l1lA3FUcXmlwO8ahNUy8PKt7LBtJFatM2gzJ1_m6X7FaCU_Tr_lX4ZctgnG--8tMAG1NPe8MRsIOh06pFXO4oGs7q3OrS2snYRw36NCFg"
      />
    </form>
  );
};

export default Form;
