import './styles.css';
import { hasAnyRoles } from 'util/auth';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Review } from 'type/review';
import FormReview from 'components/FormReview';
import ListReview from 'components/ListReview';
import CardMovieDetail from './CardMovieDetail';
import { Movie } from 'type/movie';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [movie, setMovie] = useState<Movie>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const movies: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(movies).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movies-container-details">
      <div className="movies-container-details-2">
        <CardMovieDetail movie={movie} />
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <FormReview movieId={movieId} onInsertReview={handleInsertReview} />
        )}
        {reviews.map((review) => (
          <ListReview review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
