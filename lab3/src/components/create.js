import React from 'react';

import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {Title: '',
    Year: '',
    Poster: ''};
  

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMovieTitle(event) {
    this.setState({Title: event.target.value});
  }

  handleChangeMovieYear(event) {
    this.setState({Year: event.target.value});
  }

  handleChangeMoviePoster(event) {
    this.setState({Poster: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    alert('Title : ' + this.state.Title +'\nYear : '+ this.state.Year + '\nPoster: ' + this.state.Poster);
    Axios.post();
  }

  render(){
  return (
        <div>
          <h2>Hello from Create Component</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
        <label>
          Movie Title:
          </label>
          <input 
          type="text"
          className="form-control" 
          value={this.state.Title} 
          onChange={this.handleChangeMovieTitle} />
        </div>

        <div className="form-group">
        <label>
          Movie Year:
          </label>
          <input 
          type="text"
          className="form-control" 
          value={this.state.Year} 
          onChange={this.handleChangeMovieYear} />
        </div>

        <div className="form-group">
        <label>
          Movie Poster Url:
          </label>
          <input 
          type="text"
          className="form-control"
          rows = '6' 
          value={this.state.Poster} 
          onChange={this.handleChangeMoviePoster} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
}

export default Create;