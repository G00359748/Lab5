import React from 'react';

import '../App.css';
import Movies from './movies';
import axios from 'axios';

class Read extends React.Component {
  
    state = {
        myMovies:[
                    
        ]
  }
  
  componentDidMount() {
      axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')
      .then((response)  =>{
        this.setState({myMovies: response.data.Search})
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  
    render() {

  return(
        <div className="App">
          <h2>Hello from Read Component</h2>
          console.log(this.props.movies);
          <Movies myMovies={this.state.myMovies}></Movies>
    </div>
  );
}
}

export default Read;