import Link from 'next/link';
import React from 'react'

const Connect = () => {
  return (
    <div id="right">
      <div className="banner">
        <div className="marketing-banner">
          <div className="marketing-banner-text">
            Let's create the future <strong>together</strong>.
          </div>
          <a
            href="https://www.pluralsight.com/get-started"
            className="marketing-button psds-button--size-medium psds-button--appearance-stroke psds-button"
          >
            <span className="psds-button__text">Start a FREE 10-day trial</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect