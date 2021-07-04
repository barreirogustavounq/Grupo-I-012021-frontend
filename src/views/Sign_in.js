import React, { useState, useEffect } from "react";
import i18n from '../i18n'
import axios from "axios";
import '../styles/Signin_Signup.css'
import $ from 'jquery'
import {Modal} from '@material-ui/core'



const Login = () => {
  const [nickname, setnickname] = useState(null);
  const [passwordlog, setpasswordlog] = useState(null)
  const [nicknamereg, setnicknamereg] = useState(null);
  const [passwordreg, setpasswordreg] = useState(null);
  const [mailreg, setmailreg] = useState(null);
  const [lng, setlng] = useState('');
  const [platform, setplatform] = useState('NETFLIX');
  const [open, setOpen] = useState(false)

  const Selecti18n = () => {
    return (
      <div class="selecLanguagediv">
        <select class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          defaultValue={lng}
          onChange={(e) => {
            setlng(e.currentTarget.value)
            i18n.changeLanguage(e.currentTarget.value)
          }}>
          <option value="es">es</option>
          <option value="en">en</option>
        </select>
      </div>)
  }

  useEffect(() => {
    i18n.changeLanguage(lng)
  });


  const uploadFiedls = () => {

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nickname: nicknamereg,
        password: passwordreg,
        mail: mailreg,
        platform: platform
      }),
    })
      .then((res) => {
        console.log(res)
        if (!res.ok) {
          console.log("Datos invalidos o el usuario ya existe")
        } else {
          console.log("Usuario creado exitosamente")
          $(document).ready(function () {
            $('.veen .wrapper').removeClass('move');
            $('.body').css('background', '#ff4931');
            $(".veen .rgstr-btn button").removeClass('active');
            $(".veen .login-btn button").addClass('active');
          })
        };
        //history.push("/");
      }
      )
      .catch((err) => {
        console.log(err);
        //setOpen(true)
      });
  };
  const PostDatareg = () => {
    uploadFiedls();
  };
  const PostDataLogin = () => {
    axios.post("http://localhost:8080/login",
      {
        nickname: nickname,
        password: passwordlog
      },
    )
      .then(success => {
        console.log(success.data);
        localStorage.setItem('apiKey', success.data);
        localStorage.setItem('nickname', nickname);
        $(document).ready(function () {
          $('.veen ').animate({ bottom: '250px' });
          $('.veen ').fadeOut()
        })
        window.location.reload();
        ;
      }
      )
      .catch(error => {
        console.log(error);
      });

  };
  const ValidateEmail = () => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mailreg)) {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
  }
  const validateNick = () => {
    if (nicknamereg && nicknamereg.length > 4) {
      return true
    } else {
      alert("You have entered an invalid nickName address!")
      return (false)
    }
  }
  const validatePass = () => {
    if (passwordreg && passwordreg.length > 6) {
      return true
    } else {
      alert("You have entered an invalid password address!")
      return (false)
    }
  }
  const validatePlatform = () => {
    if (platform) {
      return true
    } else {
      alert("You have entered an invalid platform !")
      return (false)
    }
  }

  $(document).ready(function () {
    $(".veen .rgstr-btn button").click(function () {
      $('.veen .wrapper').addClass('move');
      $('.body').css('background', '#e0b722');
      $(".veen .login-btn button").removeClass('active');
      $(this).addClass('active');
    });
    $(".veen .login-btn button").click(function () {
      $('.veen .wrapper').removeClass('move');
      $('.body').css('background', '#ff4931');
      $(".veen .rgstr-btn button").removeClass('active');
      $(this).addClass('active');
    });

  });
  return (

    <div>

      <div class="body">

        <Selecti18n />

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
            <h2>Resenia</h2>
            <h5> {i18n.t("$")} 100 - {i18n.t("premiere")} {i18n.t("locale")}</h5>
            <form id="login" tabindex="500">
              <h3>{i18n.t('login')}</h3>
              <div class="text">
                <input type="text"
                  placeholder={i18n.t('username')}
                  class="form-control"
                  value={nickname}
                  onChange={(e) => setnickname(e.target.value)}
                  required
                />
                <label>{i18n.t('username')}</label>
              </div>
              <div class="passwd">
                <input type="password"
                  placeholder={i18n.t('password')}
                  value={passwordlog}
                  class="form-control"
                  onChange={(e) => setpasswordlog(e.target.value)}
                  required
                />
                <label>{i18n.t('password')}</label>
              </div>
              <div class="submit">
                <button onClick={(e) => {
                  e.preventDefault()
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
                  onChange={(e) => setmailreg(e.target.value)}
                  required
                />
                <label>{i18n.t('email')}</label>
              </div>
              <div class="uid">
                <input type="text"
                  placeholder={i18n.t('username')}
                  class="form-control"
                  value={nicknamereg}
                  onChange={(e) => setnicknamereg(e.target.value)}
                  required
                />
                <label>{i18n.t('username')}</label>
              </div>
              <div class="passwd">
                <input type="password"
                  placeholder={i18n.t('password')}
                  value={passwordreg}
                  class="form-control"
                  onChange={(e) => setpasswordreg(e.target.value)}
                  required
                />
                <label>{i18n.t('password')}</label>
              </div>
              <div class="platform">
                <select class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  placeholder="Platform"
                  onChange={(e) => { setplatform(e.target.value) }}>
                  <option value="NETFLIX">NETFLIX</option>
                  <option value="DISNEY PLUS">DISNEY PLUS</option>
                  <option value="AMAZON PRIME">AMAZON PRIME</option>
                </select>
              </div>
              <div class="submit">
                <button onClick={(e) => {
                  e.preventDefault()
                  if (validateNick() && validatePass() && validatePlatform() && ValidateEmail()) {
                    PostDatareg()
                  }
                  setOpen(true)
                }}>{i18n.t('register')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
};


export default Login;
