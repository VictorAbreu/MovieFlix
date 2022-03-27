import { AxiosRequestConfig } from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { Review } from 'type/review';
import { requestBackend } from 'util/requests';

type Props = {
  movieId: string;
  onInsertReview: (review : Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const FormReview = ({ movieId, onInsertReview } : Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-container-evaluation">
            <input
              {...register('text', {
                required: 'Campo obrigatório',
              })}
              type="text"
              className="form-control base-input"
              placeholder="Deixe sua avaliação aqui"
              name="text"
            />
            <div>
                {errors.text?.message}
            </div>
            <ButtonIcon text="salvar avaliação" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormReview;
