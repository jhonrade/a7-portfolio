import React from 'react';

//Project component that renders the Project's title, description, link and screenshot image
var Project = React.createClass({
    render() {
        return(
            <div className="projectCard">
              <h2>{this.props.title}</h2>
              <h3>{this.props.assignment}</h3>
              <img src={this.props.img} /><br/>
              <p>{this.props.description}</p>
              <a target="_blank" href={this.props.link}> Check it out!</a>
            </div>
        )
    }
});

export default Project;
