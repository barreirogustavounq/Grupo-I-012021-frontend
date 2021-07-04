import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import $ from 'jquery';
import TweenMax from 'scrollmagic-plugin-gsap'
import Sine from 'sine-waves'
import '../styles/Sign_in.css'


$('#login-button').click(function(){
  $('#login-button').fadeOut("slow",function(){
    $("#container").fadeIn();
    TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
  });
});

$(".close-btn").click(function(){
  TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
  TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
  $("#container, #forgotten-container").fadeOut(800, function(){
    $("#login-button").fadeIn(800);
  });
});

/* Forgotten Password */
$('#forgotten').click(function(){
  $("#container").fadeOut(function(){
    $("#forgotten-container").fadeIn();
  });
});

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
    <div>

      <div id="login-button">
    <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png">
    </img>
  </div>
  <div id="container">
    <h1>Log In</h1>
    <span class="close-btn">
      <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"/>
    </span>

    <form>
      <input type="email" name="email" placeholder="E-mail"/>
      <input type="password" name="pass" placeholder="Password"/>
      <a href="#">Log in</a>
      <div id="remember-container">
        <input type="checkbox" id="checkbox-2-1" class="checkbox" checked="checked"/>
        <span id="remember">Remember me</span>
        <span id="forgotten">Forgotten password</span>
      </div>
  </form>
  </div>

  <div id="forgotten-container">
    <h1>Forgotten</h1>
    <span class="close-btn">
      <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
    </span>

    <form>
      <input type="email" name="email" placeholder="E-mail"/>
      <a href="#" class="orange-btn">Get new password</a>
  </form>
  </div>
    </div>
  )
    };

export default Login;
