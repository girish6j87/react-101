import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + " child Constructor called");
  }
  componentDidMount() {
    console.log(this.props.name + "child componentDidMount called");
  }

  render() {
    console.log(this.props.name + "child render called");
    const { name, location, email } = this.props;
    const { count } = this.state;
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
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : {email}</h2>
      </div>
    );
  }
}

export default UserClass;
