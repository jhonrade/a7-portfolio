// Home page -- what users see on arrival
import React from 'react';
import './css/HomePage.css'

var HomePage = React.createClass({
    render() {
        return(
          <div className="homePage">
            <div className="homeCard">
              <h1>Welcome to my Online Portfolio!</h1>
              <img src="./img/profile.jpg" />
              <h2>About Me</h2>
              <p>Hello I'm Jill. I am an Informatics undergraduate student.</p>
            </div>
          </div>
            )
    }
});

export default HomePage;
