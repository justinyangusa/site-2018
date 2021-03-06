import React, { Component } from 'react';

import { Grid, Form, Button, Image} from 'semantic-ui-react';
import styles from './rsvp.scss'

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-46010489-2', {
      'cookieDomain': 'hackillinois.org'
  });


export default class WaitList extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <img className="leftSquiggly" src='../../assets/img/png/squiggly_left.png' />
        <img className="rightSquiggly" src='../../assets/img/png/squiggly_right.png' />
        <Grid.Row className='rsvpContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='../../assets/img/png/hackillinois_logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='startPrompt verticalPadding'>
              Thank you for checking on the status of your application to HackIllinois 2018! We are releasing decisions in waves and will get to your application as soon as possible. We appreciate your patience. If you have any questions, you can reach us at <a href='mailto:contact@hackillinois.org'>contact@hackillinois.org</a>.
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <a href="/">
                <Button size='medium'>Home</Button>
              </a>
              <a href="https://opensource.com/article/17/10/openstack-project-contribution-benefits" target="_blank">
                <Button size='medium'>Why Open Source?</Button>
              </a>
              <a href="https://opensource.guide/how-to-contribute/" target="_blank">
                <Button size='medium'>How to Contribute to OS</Button>
              </a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
