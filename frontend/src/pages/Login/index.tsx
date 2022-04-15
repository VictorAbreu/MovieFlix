import { ReactComponent as HomeImage } from "assets/images/home.svg";
import ButtonIcon from "components/ButtonIcon";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./styles.css";
import { requestBackendLogin } from 'util/requests';
import { AuthContext } from 'AuthContext';
import { saveAuthData } from 'util/storage';
import { getTokenData } from 'util/auth';
import { useForm } from 'react-hook-form';

const Login = () => {
  type FormData = {
    username: string;
    password: string;
  };
  
  type LocationState = {
    from: string;
  }
    const location = useLocation<LocationState>();
  
    const {from} = location.state || {from: {pathname: '/movies'}}
  
    const { setAuthContextData} = useContext(AuthContext);
  
    const [hasError, setHasError] = useState(false);
  
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
  
    const history = useHistory();
  
    const onSubmit = (formData: FormData) => {
      requestBackendLogin(formData)
        .then((response) => {
          saveAuthData(response.data);
          setHasError(false);
          setAuthContextData({
            authenticated: true,
            tokenData: getTokenData(),
          })
          history.replace(from)
        })
        .catch((error) => {
          setHasError(true);
          console.log('ERRO', error);
        });
    };
    
  return (
    <div className="home-container-card">
      <div className="home-content-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito.</p>
        <HomeImage />
      </div>
      <div className="home-login-container">
        <h1>LOGIN</h1>
        {hasError && (
        <div className="alert alert-danger">
          Usuário ou senha não foram encontrados!
        </div>
      )}
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
        {...register('username', {
          required: 'Campo obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email inválido'
          }
        })}
          type="text"
          className={`form-control base-input`}
          placeholder="Email"
          name="username"
        />
        <div className="invalid-feedback d-block" >{errors.username?.message}</div>

        <input
        {...register('password', {
          required: 'Campo obrigatório'
        })}
          type="password"
          className={`form-control base-input`}
          placeholder="Password"
          name="password"
        />
        <div className="invalid-feedback d-block">{errors.password?.message}</div>
        <ButtonIcon text="fazer login"></ButtonIcon>
      </form>
      </div>
    </div>
  );
};

export default Login;
