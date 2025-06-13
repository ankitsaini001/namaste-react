import React from "react";

class UserClass extends React.Component {
  //in class component we have to use constructor and super props

  //constructor

  constructor(props) {
    super(props);
    console.log("child constructor");
    //console.log(props);

    // useState hook was not in Class Components so we uses state object here
    this.state = {
      userInfo: {
        id: 123,
        name: 'Test',
        login: 'Dummy'
      }
    };
  }

  // to fetch data from the API. We use this for API.
  async componentDidMount() {
    console.log("child componentDidMount");
    const Data = await fetch('https://api.github.com/users/ankitsaini001');
    const json = await Data.json();

    this.setState({
      userInfo: json,
    })
    console.log(json);
  }

  render() {
    const { name, login, id, avatar_url } = this.state.userInfo;
   // console.log("child render");
    return (
      <div className="user-card">
        {/* <button
          type="button"
          className="btnclasscomp"
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {" "}
          Click Me: {this.state.count}
        </button> */}
        <img src={avatar_url} alt="avatar_url" className="avatar_url"/>
        <h2>Name: {name}</h2>
        <h2>Login: {login}</h2>
        <h2>ID: {id}</h2>
      </div>
    );
  }
}

export default UserClass;
