import React, { Component } from "react";
import "./style.css";

export default class ProfileCard extends Component {
  componentDidMount() {
    this.props.handelTime()
  }
  componentWillUnmount() {
    clearInterval(this.props.id);
  }
  render() {
    return (
      <div className="card">
        <div className="img-bx">
          <img src={this.props.Person.imgSrc} alt="img" />
        </div>
        <div className="content">
          <div className="detail">
            <h2>
              Full Name : <span>{this.props.Person.fullName}</span>
            </h2>
            <h2>
              Bio : <span> {this.props.Person.bio} </span>
            </h2>
            <h2>
              Profession : <span>{this.props.Person.profession}</span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
