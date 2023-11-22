import React from "react";
import "./Annoucement.style.css";
const Annoucement = () => {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-bar__inner">
          <p
            href=""
            className="announcement-bar__content announcement-bar__content--center"
          >
            Free Shipping Over $69 for US| Discreet Shipping and Billing
          </p>
          <button
            type="button"
            className="announcement-bar__button hidden-phone"
          >
            <svg
              focusable="false"
              className="icon icon--newsletter"
              viewBox="0 0 20 17"
              role="presentation"
            >
              <path
                d="M19.1666667 0H.83333333C.37333333 0 0 .37995 0 .85v15.3c0 .47005.37333333.85.83333333.85H19.1666667c.46 0 .8333333-.37995.8333333-.85V.85c0-.47005-.3733333-.85-.8333333-.85zM7.20975004 10.8719018L5.3023283 12.7794369c-.14877889.1487878-.34409888.2235631-.53941886.2235631-.19531999 0-.39063998-.0747753-.53941887-.2235631-.29832076-.2983385-.29832076-.7805633 0-1.0789018L6.1309123 9.793l1.07883774 1.0789018zm8.56950946 1.9075351c-.1487789.1487878-.3440989.2235631-.5394189.2235631-.19532 0-.39064-.0747753-.5394189-.2235631L12.793 10.8719018 13.8718377 9.793l1.9074218 1.9075351c.2983207.2983385.2983207.7805633 0 1.0789018zm.9639048-7.45186267l-6.1248086 5.44429317c-.1706197.1516625-.3946127.2278826-.6186057.2278826-.223993 0-.447986-.0762201-.61860567-.2278826l-6.1248086-5.44429317c-.34211431-.30410267-.34211431-.79564457 0-1.09974723.34211431-.30410267.89509703-.30410267 1.23721134 0L9.99975 9.1222466l5.5062029-4.8944196c.3421143-.30410267.8950971-.30410267 1.2372114 0 .3421143.30410266.3421143.79564456 0 1.09974723z"
                fill="currentColor"
              ></path>
            </svg>
            Subscribe &amp; Enjoy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Annoucement;
