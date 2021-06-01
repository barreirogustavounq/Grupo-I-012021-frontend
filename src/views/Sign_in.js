import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import '../styles/Signin_Signup.css'


const Login = () => {
  const history = useHistory();
  const [nickname, setnickname] = useState('');
  const [ password, setpassword] = useState('')

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
    <form id="form-signin-signup">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input
                  type="text"
                  placeholder="Intruduzca su username"
                  class="form-control"
                  value={nickname}
                  onChange={(e) => setnickname(e.target.value)}
                />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
                  type="password"
                  placeholder="Intruduzca su password"
                  value={password}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setpassword(e.target.value)}
                />
        </div>
        <div class="mb-3 form-check">
          <h6 id="H5Register">
            <Link id="linkRegister" to="/register">Registrarse</Link>
          </h6>
        </div>
        <button id="form-button " type="submit" class="btn btn-primary" onClick={() => PostData()}>Ingresar</button>
      </form>
  ) 
    };

export default Login;
