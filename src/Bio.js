import React from 'react';

//Bio component that renders the Section header and its details
var Bio = React.createClass({
    render() {
        return(
            <div>
              <div className="box">
                <h2>{this.props.title}:</h2>
                <h3>{this.props.item1}</h3>
                <h3>{this.props.item2}</h3>
              </div>
            </div>
        )
    }
});

export default Bio;
