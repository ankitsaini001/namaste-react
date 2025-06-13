import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("parent constructor");
  }

  componentDidMount() {
   // console.log("parent componentDidMount");
  }

  render() {
   // console.log("parent render");
    return (
      <div className="about">
        <h2>About Us Class Component</h2>
        <br />
        <User
          name={"Ankit Saini"}
          location={"pune"}
          contact={"@ankit_saini007"}
        />
        <UserClass
          name={" Ankit Saini (class component)"}
          location={"pune(class component)"}
          contact={"@ankit_saini007(class component)"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h2>About Us</h2>
//       <br />
//       <User
//         name={"Ankit Saini"}
//         location={"pune"}
//         contact={"@ankit_saini007"}
//       />
//       <UserClass
//         name={" Ankit Saini (class component)"}
//         location={"pune(class component)"}
//         contact={"@ankit_saini007(class component)"}
//       />
//     </div>
//   );
// };

export default About;
