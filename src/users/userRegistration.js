import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../actions/userActions";
import "./userRegistration.css";

const UserRegistration = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // const userProfile = useSelector((state) => state.userLogin.userProfile);
  // const { email, password } = userProfile;
  // console.log(userProfile);
  // console.log(email + password);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState([]);

  // Validation of Input & Form

  const [emailTouched, setEmailTouched] = useState(false);
  const enteredEmailIsValid = email.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && emailTouched;

  const [passwordTouched, setPasswordTouched] = useState(false);
  const enteredPasswordIsValid = password.trim() !== "" && password.length >= 6;
  const passwordInputIsInvalid = !enteredPasswordIsValid && passwordTouched;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailInputBlurHandler = (e) => {
    setEmailTouched(true);
  };

  const passwordInputBlurHandler = (e) => {
    setPasswordTouched(true);
  };

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    // console.log(email);
    setEmail(email);
    dispatch(userLogin(email));
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    // console.log(password);
    setPassword(password);
    dispatch(userLogin(password));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    // setSubmitted(true);
    setEmailTouched(true);
    setPasswordTouched(true);

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      return;
    }

    try {
      const body = { email, password };
      console.log(body);
      const response = await fetch("http://localhost:8000/userData", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }

    dispatch(
      userLogin({
        email,
        password,
        loggedIn: true,
      })
    );
  };

  // useEffect(() => {
  //   fetch("http://localhost:8000/userData", {
  //     method: "GET",
  //     mode: "no-cors",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((res) => res.text())
  //     .then((userData) => setUserData(userData));
  // }, []);

  // console.log(userData);

  const emailInputClasses = emailInputIsInvalid
    ? "form-group invalid"
    : "form-group";

  const passwordInputClasses = passwordInputIsInvalid
    ? "form-group invalid"
    : "form-group";

  return (
    <Fragment>
      <div className="App pt-4">
        <h1>Login or Signup</h1>
      </div>
      <div className="row pt-4 justify-content-center">
        <div className="col-6 pt-4">
          <form>
            <div className={emailInputClasses}>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                // value={user.email}
                name="email"
                onChange={onChangeEmail}
                onBlur={emailInputBlurHandler}
              />
              {emailInputIsInvalid && (
                <p className="error-text">Email must not be empty</p>
              )}
            </div>
            <div className={passwordInputClasses}>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                // value={user.password}
                onChange={onChangePassword}
                onBlur={passwordInputBlurHandler}
              />

              {passwordInputIsInvalid && (
                <p className="error-text">
                  Password must be more than 6 letter
                </p>
              )}
            </div>

            <button
              disabled={!formIsValid}
              type="submit"
              className="btn btn-primary"
              onClick={handleRegistration}
            >
              Login
            </button>
          </form>

          <div>
            {/* <p>{userProfile.email}</p>
            <p>{userProfile.password}</p> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserRegistration;
