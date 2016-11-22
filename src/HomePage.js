// Home page -- what users see on arrival
import React from 'react';
import Bio from './Bio';
import './css/Bio.css'
import Baby from 'babyparse';
import $ from 'jquery';


// HomePage component
var HomePage = React.createClass({
  // Get initial state: "bios" as empty array
	getInitialState(){
		return{bios:[]}
	},
  //  When component mounts, get the data and set the state of "bios"
	componentDidMount(){
		$.get('data/bio.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({bios:parsed.data})
		}.bind(this));
	},

    // Renders an intro to the online portfolio, and a <Bio> element for each element in the state
    render() {
        return(
          <div className="homePage">
            <div className="homeCard">
              <h1>Welcome to my Online Portfolio!</h1>
              <img src="./img/profile.jpg" />
              <p>Hello I'm Jill! I'm an undergraduate student studying Informatics, with an interest in Data Science.</p>

              <div className="bioCard">
                {this.state.bios.map(function(bio, i){
                  if (i < 3) {
                    return (<Bio key={'bio-' + i}
                      title={bio.title}
                      item1={bio.item1}
                      item2={bio.item2}
                    />)
                  }
                })}
              </div>

            </div>
          </div>
        )
    }
});

export default HomePage;
