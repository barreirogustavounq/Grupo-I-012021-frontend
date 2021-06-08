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
                console.log(success.data);
                localStorage.setItem('apiKey', success.data);
                history.push("/")
                window.location.reload();
                ;
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
        <Link id="form-button " type="submit" class="btn btn-primary" onClick={() => PostData()}>Ingresar</Link>
      </form>
  )
    };

export default Login;
