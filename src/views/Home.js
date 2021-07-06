import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import '../styles/home.css'
import i18n from '../i18n'
import Suscribe from './Suscribe'
const Home = () => {
    const [apiKey, setApikey] = useState('')
    const [lng, setlng] = useState('');
    useEffect(() => {
        i18n.changeLanguage(lng)
      });

     
    const logOut = () => {
        localStorage.removeItem('apiKey');
        window.location.reload();
    }

    const Selecti18n = () => {
        return (
          <div class="selecLanguagediv" id="selectHome">
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

    return (
        <div id="body">
            <input type="checkbox" id="tog"/>
                <label for="tog" id="ham">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav>
                    <ul>
                        <li class="listMenu"><a onClick={()=> {apiKey ? setApikey("") : setApikey(localStorage.getItem("apiKey"))}}>ApiKey</a></li>
                        <li class="listMenu"><a  onClick={()=> {logOut()}}>Loguot</a></li>
                        <li class="listMenu"><Selecti18n/></li>
                    </ul>
                </nav>

                <div id="content">
                    <h1>{i18n.t("welcome")} Resenia</h1>
                </div>
                <div id= "content">
                    <p id="apiKey">{apiKey? "ApiKey: " + localStorage.getItem('apiKey') : "" }</p>
                </div>
                <Suscribe/>
        </div>
    )
}

export default Home
