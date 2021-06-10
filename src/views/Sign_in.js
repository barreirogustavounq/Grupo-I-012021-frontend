import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import i18n from '../i18n'
import axios from "axios";
import '../styles/Signin_Signup.css'
import $ from 'jquery'


const Login = () => {
  const history = useHistory();
  const [nicknameLog, setnicknameLog] = useState('');
  const [passwordlog, setpasswordlog] = useState('')
  const [nicknamereg, setnicknamereg] = useState('');
  const [passwordreg, setpasswordreg] = useState('');
  const [mailreg, setmailreg] = useState('');
  const [lng, setlng] = useState('es');

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
            $(document).ready(function(){
              $('.veen .wrapper').removeClass('move');
              $('.body').css('background','#ff4931');
              $(".veen .rgstr-btn button").removeClass('active');
              $(".veen .login-btn button").addClass('active');
            })
            };
            //history.push("/");
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };
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
    };

    
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
  return (
    
    <div class="body">
      <div>
      <button type="button" class="btn btn-warning"
        onClick={()=> {i18n.changeLanguage(lng)
                                    lng === 'es' ? setlng('en') : setlng('es')}} selected>{lng}</button>
        </div>
		<div class="veen">
			<div class="login-btn splits">
				<p>{i18n.t('signin')}</p>
				<button class="active">{i18n.t('login')}</button>
			</div>
			<div class="rgstr-btn splits">
				<p>{i18n.t('signup')} </p>
				<button>{i18n.t('register')}</button>
			</div>
			<div class="wrapper">
				<form id="login" tabindex="500">
					<h3>{i18n.t('login')}</h3>
					<div class="mail">
						<input type="text"
                  placeholder={i18n.t('email')}
                  class="form-control"
                  value={nicknameLog}
                  onChange={(e) => setnicknameLog(e.target.value)}/>
						<label>{i18n.t('email')}</label>
					</div>
					<div class="passwd">
						<input type="password"
                  placeholder={i18n.t('password')}
                  value={passwordlog}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setpasswordlog(e.target.value)}/>
						<label>{i18n.t('password')}</label>
					</div>
					<div class="submit">
          <button onClick={(e) => { e.preventDefault()
                                    PostDataLogin()
                                  }}>{i18n.t('login')}</button>
					</div>
				</form>
				<form class="register" id="register" tabindex="502">
					<h3>{i18n.t('register')}</h3>
					<div class="mail">
						<input type="mail"
                  placeholder={i18n.t('email')}
                  value={mailreg}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setmailreg(e.target.value)}/>
						<label>{i18n.t('email')}</label>
					</div>
					<div class="uid">
						<input  type="text"
                  placeholder={i18n.t('username')}
                  class="form-control"
                  value={nicknamereg}
                  onChange={(e) => setnicknamereg(e.target.value)}/>
						<label>{i18n.t('username')}</label>
					</div>
					<div class="passwd">
						<input type="password"
                  placeholder={i18n.t('password')}
                  value={passwordreg}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setpasswordreg(e.target.value)}/>
						<label>{i18n.t('password')}</label>
					</div>
          <div class="platform">
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>{i18n.t('platform')}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
					</div>
					<div class="submit">
            <button onClick={(e) => { e.preventDefault()
                                      PostDatareg()
                                                }}>{i18n.t('register')}</button>
					</div>
				</form>
			</div>
		</div>	
	</div>
  )
    };

export default Login;
