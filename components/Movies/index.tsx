import React = require('react');
import { Container, Row } from 'react-bootstrap';
import { MovieType } from '../../store/types';
import { Movie } from '../Movies/components/Movie';
import './styles.scss';

export interface MoviesProps {
  movies: MovieType[];
}

export const Movies: React.FC<MoviesProps> = ({ movies }) => (
  <Container className="main-movies-container">
    <Row className="d-flex mt-4 flex-wrap justify-content-start align-items-start">
      {movies.map((movie: any, index: number) => {
        return <Movie key={movie.imdbID + index} movie={movie} />;
      })}
    </Row>
  </Container>
);
