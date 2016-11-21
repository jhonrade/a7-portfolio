import React from 'react';
//import { Button, Card, Row, Col } from 'react-materialize';
import Card from '../node_modules/react-materialize/lib/Card.js';
import Col from '../node_modules/react-materialize/lib/Col.js';

var Project = React.createClass({
    render() {
        return(
          <div>
            <Col m={6} s={12}>
              <Card className='projectCard' textClassName='projectCardText' title={this.props.title} actions={[<a href={this.props.link}>Check Out More!</a>]}>
                {this.props.description}
              </Card>
            </Col>
          </div>

          // <div className="projects">
          //   <h3>{this.props.title}</h3>
          //   <p>{this.props.description}</p>
          //   <a target="_blank" href={this.props.link}> Check Out More!</a>
          // </div>

        )
    }
});

export default Project;
