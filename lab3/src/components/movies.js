import React from 'react';
import '../App.css';
import MyMovieItem from './mymovieitem';


class Movies extends React.Component {

  render() {
  return this.props.myMovies.map((movie) =>
  {
      //console.log(movie);
      return <MyMovieItem movie={movie}></MyMovieItem>
  })
 
}
   
}
export default Movies;