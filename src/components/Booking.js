import React from "react";

import "./../sass/_BookingStyle.scss";
import "./../sass/utilities/_resources.scss";

class Booking extends React.Component {
  render() {
    return (
      <section className="booking-section">
        <div className="row">
          <div className="book">
            <div className="book__bg">
              <form action="#" className="form">
                <div>
                  <h2 className="heading-secondary u-padding-bottom">
                    Start booking now
                  </h2>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full Name"
                    required
                    autoComplete="off"
                    id="name"
                  ></input>
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email Address"
                    required
                    autoComplete="off"
                    id="email"
                  ></input>
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                </div>

                <div className="form__group">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      name="size"
                      id="small"
                    ></input>
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Small size
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      name="size"
                      id="large"
                    ></input>
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Large size
                    </label>
                  </div>
                </div>
                <div>
                  <button className="btn btn--purple">Next Step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Booking;
