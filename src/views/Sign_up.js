import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'

const Singup = () => {
  const history = useHistory();
  const [nickname, setnickname] = useState('');
  const [password, setpassword] = useState('');
  //const [mail, setmail] = useState('');

 
  const uploadFiedls = () => {

    axios.post("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nickname,
          password
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
    <div className="card">
      <div className="card auth-card input-field">

        <input
          type="text"
          placeholder="Intruduzca su nombre"
          value={nickname}
          onChange={(e) => setnickname(e.target.value)}
        />
     
    
        <input
          type="password"
          placeholder="Intruduzca su password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
         id="botonLogin"
          className="btn waves-effect waves-light #64b5f6 red darken-1"
          onClick={() => PostData()}
        >
          Registrar
        </button>
        <h5 id="H5Register">
          <Link id="linkRegister" to="/login">Ya te encuentras registrado ?</Link>
        </h5>
      </div>
    </div>
  );
  }

export default Singup;
