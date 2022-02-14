import React, { Component } from "react";
import ProfileComponent from "./profile/profileComponent";
import Img from "./images/pic.jpg";
class App extends Component {
  state = {
    name: "haydee claud",
    bio: " to change afterwards bla bla..",
    imgSrc:  Img ,
    profession: "ux designer",
    shows: true,
    date: new Date()
  }
  
  tick(){
    this.setState({date: new Date()})
  };
  componentDidMount(){
    setInterval(()=>this.tick(), 1000)
  }
  render() {
    return (
      <>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button
          onClick={() => {
            this.setState({ shows: !this.state.shows });
          }}
        >
          Show | hide
        </button>
        {this.state.shows && (
          <ProfileComponent
            fullName={this.state.name}
            bio={this.state.bio}
            imgSrc={this.state.imgSrc}
            profession={this.state.profession}
          />

        )}
      </>
    );
  }
}

export default App;
