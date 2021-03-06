import React from "react";

// creating a card instead of the image
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// const image = require('../../public/');

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Acorn Project
        </Typography>
        {/* <img src={image} alt='acorn project img' style= {{height: '50px'}} /> */}
        <Typography variant="body2" component="p">
          Students can earn industry knowledge, and better
          prepare themselves for getting internships and full
          time jobs. 
          <br /> 
          This is done by working on projects from other students,
          faculty or departments on campus. More information will
          be presented.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function About() {
  const value = localStorage.getItem('myValueInLocalStorage');
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <SimpleCard />
            {/* <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            /> */}
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Hello {value}, my name is Nicholas. I am the project manager for this project.
            </p>
            <p>
              This project will be a way for students, faculty, or even departments to host projects
              which you students can work on! This is great because this gives you the opportunity
              to work on a real project outside of class!
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;