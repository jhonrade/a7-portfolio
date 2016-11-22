import React from 'react';


var Project = React.createClass({
    render() {
        return(
            <div className="projectCard">
              <h2>{this.props.title}</h2>
              <h3>{this.props.assignment}</h3>
              <img src={this.props.img} /><br/>
              <a target="_blank" href={this.props.link}> Check out the webpage!</a>
            </div>

        )
    }
});

export default Project;
