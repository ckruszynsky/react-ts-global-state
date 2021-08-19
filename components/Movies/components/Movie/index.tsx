import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import React = require('react');
import { Card, Col } from 'react-bootstrap';
import { useDoubleTap } from 'use-double-tap';
import { globalContext } from '../../../../store/store';
import { MovieType } from '../../../../store/types';
import './styles.scss';

export interface MovieProps {
  movie: MovieType;
}
export const Movie: React.FC<MovieProps> = ({ movie }) => {
  const { globalState, dispatch } = useContext(globalContext);

  const isMovieInFavorites = () => {
    return globalState.favoriteMovies.some(
      (likedMovie: MovieType) => likedMovie.imdbID === movie.imdbID
    );
  };

  const [isMovieLiked, setMovieLiked] = useState(isMovieInFavorites());

  const likeMovie = () => {
    if (!isMovieLiked) {
      setMovieLiked(true);
      dispatch({ type: 'LIKE_MOVIE', payload: movie });
    }
  };

  const unlikeMovie = () => {
    if (isMovieLiked) {
      setMovieLiked(false);
      dispatch({ type: 'UNLIKE_MOVIE', payload: movie });
    }
  };

  const doubleTap = useDoubleTap(() => {
    if (!isMovieLiked) {
      likeMovie();
    } else {
      unlikeMovie();
    }
  });

  return (
    <Col className="mb-4 movie-container">
      <Card className="">
        <img src={movie.Poster} alt={movie.Title} {...doubleTap} />
        <Card.Body>
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <p className="card-text">
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}/`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faImdb} size="4x" />
            </a>
            <span className="font-weight-bold">IMDb: </span>
            {movie.imdbID.toUpperCase()}
          </p>
        </Card.Body>
        {!isMovieLiked ? (
          <button
            type="button"
            className="btn btn-danger remove-btn"
            title="Like"
            onClick={likeMovie}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary fav-btn"
            title="Unlike"
            onClick={unlikeMovie}
          >
            <FontAwesomeIcon icon={faHeartBroken} />
          </button>
        )}
      </Card>
    </Col>
  );
};
