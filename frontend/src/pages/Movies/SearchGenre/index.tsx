import { Controller, useForm } from 'react-hook-form';
import { Genre } from 'type/genre';
import Select from 'react-select';
import { makePrivateRequest } from 'util/requests';
import { useEffect, useState } from 'react';
import './styles.css';

export type GenreFilterData = {
    name: string;
    genre: Genre | null;
  };
  
  type Props = {
    onSubmitFilter: (data: GenreFilterData) => void;
  };

const SearchGenre = ({ onSubmitFilter} : Props) => {

    const [selectGenre, setSelectGenre] = useState<Genre[]>([]);

    const { setValue, getValues, control } = useForm<GenreFilterData>();


      const handleChangeGenre = (value: Genre) => {
        setValue('genre', value);
    
        const obj: GenreFilterData = {
          name: getValues('name'),
          genre: getValues('genre'),
        };
    
        onSubmitFilter(obj);
      };

      useEffect(() => {
        makePrivateRequest({ url: '/genres' }).then((response) => {
          setSelectGenre(response.data);
          
        });
      }, []);

    return(
        <div className="search-card-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectGenre}
                  isClearable
                  placeholder="Filtrar por gênero"
                  classNamePrefix="product-filter-select"
                  onChange={(value) => handleChangeGenre(value as Genre)}
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                />
              )}
            />
        </div>
    );
};

export default SearchGenre;