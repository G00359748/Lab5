import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

class MyMovieItem extends React.Component {
  render(){
  return (
        <div>
            <Card>
  <Card.Header >{this.props.movie.Title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.movie.Poster}></img>
    <footer>
        {this.props.movie.Year}
    </footer>
    </blockquote>
  </Card.Body>
</Card>

    </div>
  );
}
}

export default MyMovieItem;