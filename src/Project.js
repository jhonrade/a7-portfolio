import React from 'react';

//import { Card, CardTitle, Col } from 'react-materialize';
// import Card from '../node_modules/react-materialize/lib/Card.js';
// import Col from '../node_modules/react-materialize/lib/Col.js';

//import { Button, Card, CardTitle, Row, Col } from 'material-ui';
//import {Card, Col}  from '../node_modules/material-ui/Card/Card.js';

//import {Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
// //import Card  from '../node_modules/react-mdl/lib/Card';
// import Button from '../node_modules/react-mdl/lib/Button';
// import { Card, CardText, CardActions } from '../node_modules/react-mdl/lib/Card';




var Project = React.createClass({
    render() {
        return(




            //regular
            <div className="projectCard">
              <h3>{this.props.title}</h3>
              <p>{this.props.assignment}</p>
              <img src={this.props.img} /><br/>
              <a target="_blank" href={this.props.link}> Check out the webpage!</a>
            </div>




            // //react-materialize
            // <div>
            //   <Col m={6} s={12}>
            //     <Card className='projectCard' textClassName='projectCardText' title={this.props.title} actions={[<a href={this.props.link}>Check Out More!</a>]}>
            //       {this.props.description}
            //     </Card>
            //   </Col>
            // </div>
            //
            // <div>
            //   <Card className='small'
            //     header={<CardTitle image={this.props.img}>{this.props.title}</CardTitle>}
            //     actions={[<a href={this.props.link}>This is a Link</a>]}>
            //     {this.props.description} I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            //   </Card>
            // </div>

                // //react-mdl
                // <div>
                //   <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                //     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{this.props.title}</CardTitle>
                //     <CardText>
                //       {this.props.description}
                //     </CardText>
                //     <CardActions border>
                //       <Button colored>Check out the webpage!</Button>
                //     </CardActions>
                //     <CardMenu style={{color: '#fff'}}>
                //       <IconButton name="share" />
                //     </CardMenu>
                //   </Card>
                // </div>


        )
    }
});

export default Project;
