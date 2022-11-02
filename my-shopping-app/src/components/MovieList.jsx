import React, { Component } from 'react';

class MovieList extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        const movieProps = this.props;
        console.log(movieProps);
        return(
            <>
                {movieProps.movies.map((movie, index) => (
                    <div id={`container${index}`} className='image-container d-flex justify-content-start col-sm'>
                        <img alt={movie.Title} src={movie.Poster} />
                    </div>
                ))}
            </>
        );
    }
}

export default MovieList;
