import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserRegistration from "./users/userRegistration";
import EditProfile from "./users/editProfile";
import Profile from "./users/profile";
import DescribePlace from "./host/describePlace";
import SpaceType from "./host/spaceType";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/profile" exact component={Profile} />
          <Route path="/editprofile" exact component={EditProfile} />
          <Route path="/describeplace" exact component={DescribePlace} />
          <Route path="/spacetype" exact component={SpaceType} />
          <Route path="/" exact component={UserRegistration} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
