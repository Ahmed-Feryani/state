import React, { Component } from "react";
import me from "./assets/me.jpg";

import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";

class App extends Component {
  state = {
    Person: {
      fullName: "Feriany Ahmed",
      bio: "My bio",
      imgSrc: me,
      profession: "Developer",
    },
    show: true,
    count: 0,
    id: 0,
  };

  handelShow = () => {
    this.setState({ show: !this.state.show });
  };
  handelTime = () => {
    this.setState({ count: 0 });
    const id = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 1000);
    this.setState({ id });
  };

  render() {
    return (
      <div>
        <div className="log">
          {!this.state.show && (
            <div>last seen in {this.state.count} seconds</div>
          )}
        </div>

        <div className="count"> {this.state.show && this.state.count} </div>
        {this.state.show && (
          <ProfileCard
            Person={this.state.Person}
            id={this.state.id}
            handelTime={this.handelTime.bind(this)}
          ></ProfileCard>
        )}

        <div className="wrapper">
          <button href="" className="wave-btn" onClick={this.handelShow}>
            <span className="wave-btn__text">
              {" "}
              {this.state.show ? "hide" : "show"}{" "}
            </span>
            <span className="wave-btn__waves"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
