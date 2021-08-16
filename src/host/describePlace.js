import { Fragment } from "react";
import "./describePlace.css";

const DescribePlace = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-6 left">
          <img src="/assets/Host-image.jpg" className="img-fluid" alt="Place" />
          <h1 className="imgtext">Which of these best describes your place?</h1>
        </div>
        <div className="col-6 right">
          <div className="row">
            <div className="col-10 cards">
              <button className="cardbtn">
                <h4>Apartment</h4>
                <p>A single level house in society with multiple houses</p>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-10 cards">
              <button className="cardbtn">
                <h4>Residential Home</h4>
                <p>A home that may stand alone or have shared walls</p>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-10 cards">
              <button className="cardbtn">
                <h4>Villa</h4>
                <p>A luxury home that may have indoor-outdoor spaces</p>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-10 cards">
              <button className="cardbtn">
                <h4>Bungalow</h4>
                <p>A single level house with wide front porch</p>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-10 cards">
              <button className="cardbtn">
                <h4>TownHouse</h4>
                <p>A terraced house that may ave shared walls</p>
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

export default DescribePlace;
