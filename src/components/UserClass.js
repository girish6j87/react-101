import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo:{
        name: "Dummy",
        location:"Default",
      }
    };
    console.log(this.props.name + " child Constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "child componentDidMount called");
    const data = await fetch("https://api.github.com/users/girish6j87");
    const json = await data.json();
    this.setState({
        userInfo : json
    })
    console.log("github API response ",json);

  }

  render() {
    console.log(this.props.name + "child render called");
    // const { name, location, email } = this.props;
    const { count } = this.state;
    const {name, location, url,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : {url}</h2>
      </div>
    );
  }
}

export default UserClass;
