import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import '../styles/Signin_Signup.css'

const Singup = () => {
  const history = useHistory();
  const [nickname, setnickname] = useState('');
  const [password, setpassword] = useState('');
  //const [mail, setmail] = useState('');

 
  const uploadFiedls = () => {

    fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nickname : nickname,
          password : password
        }),
      })
        .then((res) => {
          console.log(res)
          if(! res.ok){
            console.log("Datos invalidos o el usuario ya existe")
          }else{
            console.log("Usuario creado exitosamente")
            };
            history.push("/login");
          }
        )
        .catch((err) => {
          console.log(err);
        });
    }
  ;
  const PostData = () => {
      uploadFiedls();
  };
        
          
             
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
            <Link id="linkRegister" to="/login">Ya te encuentras registrado ?</Link>
          </h6>
        </div>
        <Link id="form-button " type="submit" class="btn btn-primary" onClick={() => PostData()}>Registrar</Link>
      </form>
    
  );
  }

export default Singup;
