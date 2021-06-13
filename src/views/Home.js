import React, {useEffect, useState} from 'react'
import '../styles/home.css'
import image from '../images/background.jpg'
import i18n from '../i18n'
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
                        <li><a onClick={()=> {apiKey ? setApikey("") : setApikey(localStorage.getItem("apiKey"))}}>ApiKey</a></li>
                        <li><a  onClick={()=> {logOut()}}>Loguot</a></li>
                        <li><Selecti18n/></li>
                    </ul>
                </nav>

                <div id="content">
                    <h1>{i18n.t("welcome")} Resenia</h1>
                </div>
                <div id= "content">
                    <h3 id="apiKey">{apiKey? localStorage.getItem('apiKey') : "" }</h3>
                </div>
                <div>
                    <img id="imageBack" alt="backgrond" src={image}/>
                </div>
        </div>
    )
}

export default Home
