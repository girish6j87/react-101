import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " parent constructor called");
  }
  async componentDidMount() {
    console.log(this.props.name + " parent componentDidMount called");
    const data = await fetch("https://api.github.com/users/girish6j87");
    const json = await data.json();
    console.log("github API response ",json);

  }
  render() {
    console.log(this.props.name + " parent render called");
    return (
      <div>
        <h1>PS React-101 About</h1>
        {/* <User name={"Girish"} email={"girish6j87@gmail.com"} location={"Haldwani"}/> */}
        <UserClass
          name={"Girish via class"}
          email={"email via class"}
          location={"city via class"}
        />
        <UserClass
          name={"Pathak via class"}
          email={"Pathak email via class"}
          location={"Pathak city via class"}
        />
      </div>
    );
  }
}

// const About = () => {
//     return(
//         <div>
//             <h1>PS React-101 About</h1>
//             {/* <User name={"Girish"} email={"girish6j87@gmail.com"} location={"Haldwani"}/> */}
//             <UserClass name={"Girish via class"} email={"email via class"} location={"city via class"}/>
//         </div>
//     );
// };

export default About;
