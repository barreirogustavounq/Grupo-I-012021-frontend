import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const history = useHistory();
  const [nickname, setnickname] = useState('');
  const [ password, setPassword] = useState('')

  const PostData = () => {

        axios.post("http://localhost:8080/login",
        {
            nickname: nickname,
            password: password
        },
        )
        .then(success =>{
                localStorage.setItem('tokenValido', success.headers.authorization);
                axios.defaults.headers['authorization'] = localStorage.getItem('tokenValido')
                console.log("success", success.headers.authorization);
                history.push("/");
            }
        )
        .catch(error => {
            console.log(error);

        });
    }

  return (
    <div className="card">
      <div className="card auth-card input-field">
        <input
          type="enickname"
          placeholder="Ingrese su nickname"
          value={nickname}
          onChange={(e) => setnickname(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese su password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #64b5f6 red darken-1"
          onClick={() => PostData()}
        >
          Ingresar
        </button>
        <h5 id="H5Register">
          <tr/>
          <Link id="linkRegister" to="/register">Registrate acá</Link>
        </h5>
      </div>
    </div>)
    };

export default Login;
