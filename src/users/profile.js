import { Fragment } from "react";
import "./profile.css";

const Profile = () => {
  return (
    <Fragment>
      <div class="row">
        <div className="col-4 text-center profile">
          <div className="row">
            <div className="col">
              <img
                src="/assets/profilePic.jpg"
                className="img-fluid"
                alt="Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-link updatepic">
                Update Photo
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>Hi, I Am Joe</h1>
              <p>Joined in 2021</p>
            </div>
          </div>
          <button type="button" className="btn btn-link">
            Edit Profile
          </button>
          <hr></hr>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
