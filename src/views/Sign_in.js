import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import '../styles/Signin_Signup.css'
import $ from 'jquery'



$(document).ready(function(){
  $(".veen .rgstr-btn button").click(function(){
    $('.veen .wrapper').addClass('move');
    $('.body').css('background','#e0b722');
    $(".veen .login-btn button").removeClass('active');
    $(this).addClass('active');

  });
  $(".veen .login-btn button").click(function(){
    $('.veen .wrapper').removeClass('move');
    $('.body').css('background','#ff4931');
    $(".veen .rgstr-btn button").removeClass('active');
    $(this).addClass('active');
  });
});

const Login = () => {
  const history = useHistory();
  const [nicknameLog, setnicknameLog] = useState('');
  const [passwordlog, setpasswordlog] = useState('')
  const [nicknamereg, setnicknamereg] = useState('');
  const [passwordreg, setpasswordreg] = useState('');
  const [mailreg, setmailreg] = useState('');

  const uploadFiedls = () => {

    fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nickname : nicknamereg,
          password : passwordreg
        }),
      })
        .then((res) => {
          console.log(res)
          if(! res.ok){
            console.log("Datos invalidos o el usuario ya existe")
          }else{
            console.log("Usuario creado exitosamente")
            
            };
            //history.push("/");
          }
        )
        .catch((err) => {
          console.log(err);
        });
    }
  ;
  const PostDatareg = () => {
      uploadFiedls();
  };

  const PostDataLogin = () => {

        axios.post("http://localhost:8080/login",
        {
            nickname: nicknameLog,
            password: passwordlog
        },
        )
        .then(success =>{
                console.log(success.data);
                localStorage.setItem('apiKey', success.data);
                //history.push("/")
                window.location.reload();
                ;
        }
        )
        .catch(error => {
            console.log(error);

        });
    }

  return (
    <div class="body">
		<div class="veen">
			<div class="login-btn splits">
				<p>Already an user?</p>
				<button class="active">Login</button>
			</div>
			<div class="rgstr-btn splits">
				<p>Don't have an account?</p>
				<button>Register</button>
			</div>
			<div class="wrapper">
				<form id="login" tabindex="500">
					<h3>Login</h3>
					<div class="mail">
						<input type="text"
                  placeholder="Intruduzca su username"
                  class="form-control"
                  value={nicknameLog}
                  onChange={(e) => setnicknameLog(e.target.value)}/>
						<label>Mail or Username</label>
					</div>
					<div class="passwd">
						<input type="password"
                  placeholder="Intruduzca su password"
                  value={passwordlog}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setpasswordlog(e.target.value)}/>
						<label>Password</label>
					</div>
					<div class="submit">
          <button onClick={() => PostDataLogin()}>Login</button>
					</div>
				</form>
				<form id="register" tabindex="502">
					<h3>Register</h3>
					<div class="name">
						<input type="text" name=""/>
						<label>Full Name</label>
					</div>
					<div class="mail">
						<input type="mail"
                  placeholder="Intruduzca su mail"
                  value={mailreg}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setmailreg(e.target.value)}/>
						<label>Mail</label>
					</div>
					<div class="uid">
						<input  type="text"
                  placeholder="Intruduzca su username"
                  class="form-control"
                  value={nicknamereg}
                  onChange={(e) => setnicknamereg(e.target.value)}/>
						<label>User Name</label>
					</div>
					<div class="passwd">
						<input type="password"
                  placeholder="Intruduzca su password"
                  value={passwordreg}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setpasswordreg(e.target.value)}/>
						<label>Password</label>
					</div>
					<div class="submit">
            <button onClick={() => PostDatareg()}>Register</button>
					</div>
				</form>
			</div>
		</div>	
	</div>
  )
    };

export default Login;
