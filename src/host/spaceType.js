import { Fragment } from "react";
import "./spaceType.css";

const SpaceType = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-6 left">
          <img src="/assets/Host-image.jpg" className="img-fluid" alt="Place" />
          <h1 className="imgtext">What kind of space will guests have?</h1>
        </div>
        <div className="col-6 right">
          <div className="row">
            <div className="col-10 cards">
              <button className="cardbtn">
                <h4>An entire place</h4>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-10 cards">
              <button className="cardbtn">
                <h4>A private room</h4>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-10 cards">
              <button className="cardbtn">
                <h4>A shared room</h4>
              </button>
            </div>
          </div>

          <div className="row mt-4 justify-content-center">
            <div className="col-5 backbtn">
              <button className="btn btn-outline-dark btn-lg">Back</button>
            </div>
            <div className="col-5 nextbtn">
              <button className="btn btn-dark btn-lg">Next</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SpaceType;
