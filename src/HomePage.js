// Home page -- what users see on arrival
import React from 'react';
import './css/HomePage.css'

var HomePage = React.createClass({
    render() {
        return(
            <div className="home">
              <div className="homeCard">

                <h2>Welcome to my Online Portfolio!</h2>
                <img src="./img/profile.jpg" />
                <h1>Jillian Honrade</h1>
                <h3>About Me</h3>
                <p>ghjgjhghjbhbmjhhjvh</p>
              </div>
            </div>
        )
    }
});

export default HomePage;
