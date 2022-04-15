import './styles.css';
import CardMovie from './CardMovie';
import SearchGenre, { GenreFilterData } from './SearchGenre';
import { useCallback, useEffect, useState } from 'react';
import { makePrivateRequest } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { Movie } from 'type/movie';
import { SpringPage } from 'type/spring';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';

type ControlComponentsData = {
  activepage: number;
  filterData: GenreFilterData;
};

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activepage: 0,
      filterData: { name: '', genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activepage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({ activepage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: controlComponentsData.activepage,
        size: 8,
        name: controlComponentsData.filterData.name,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };
    makePrivateRequest(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="movies-container-principal">
      <SearchGenre onSubmitFilter={handleSubmitFilter} />

      <div className="list-card-container row">
        {page?.content.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-4 col-xl-3">
            <Link to={`/movies/${movie.id}`}>
              <CardMovie movie={movie} />
            </Link>
          </div>
        ))}
      </div>

      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Movies;
