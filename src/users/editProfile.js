import { Fragment } from "react";
import "./editProfile.css";

const EditProfile = () => {
  return (
    <Fragment>
      <div class="row">
        <div class="col text-center mt-4">
          <button
            type="button"
            className="editbtn btn-primary"
            data-toggle="modal"
            data-target="#editProfileModal"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div
        className="modal fade right"
        tabindex="-1"
        role="dialog"
        id="editProfileModal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-full-height modal-side modal-right"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="form-group">
                <label> Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  className="form-control"
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
                <label>Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Phone number"
                  className="form-control"
                />
                <label>Address</label>
                <input
                  type="textarea"
                  name="address"
                  placeholder="Enter Address"
                  className="form-control"
                />
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="form-control"
                />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save Profile
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProfile;
