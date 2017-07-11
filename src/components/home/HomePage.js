import React from 'react';
import {Link} from "react-router";

class HomePage extends React.Component {
  render(){
    return (
      <div className = "jumbotron">
        <h1>Would You Rather</h1>
        <p>React, redux and react router in ES6 for ultra-responsive web apps. </p>
        <Link to="game" className = "btn btn-primary btn-lg">Start Game </Link>
      </div>
    );
  }
}
export default HomePage;
