// Projects Page
import React, { Component } from 'react';
import Project from './Project';
import Baby from 'babyparse';
import './css/Project.css';
import $ from 'jquery';



// ProjectPage component
var ProjectPage = React.createClass({
	// Get initial state: "projects" as empty array
	getInitialState(){
		return{projects:[]}
	},

	// When component mounts, get the data and set the state of "projects"
	componentDidMount(){
		$.get('data/projects.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({projects:parsed.data})
		}.bind(this));
	},

	// Render a <Project> element for each element in the state
	render() {
		return (
			<div className="projectPage">
				<div>
					<h2>INFO 343 Projects</h2>
				</div>
				<div>
					{this.state.projects.map(function(project, i){
						if (i < 4) {
							return (<Project key={'project-' + i}
								title={project.title}
								link={project.link}
								assignment={project.assignment}
								img={project.img}
							/>)
						}
					})}

				</div>
			</div>
		);
	}
});

export default ProjectPage;
