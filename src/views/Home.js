import React from 'react'

const Home = () => {

    const logOut = () => {
        localStorage.removeItem('apiKey');
        window.location.reload();
    }

    return (
        <div>
            <h1>
                ESTOY EN EL HOME
            </h1>
            <h2>
                Api-key:
            </h2>
            <div>
                <span>
                    {localStorage.getItem('apiKey')}
                </span>
            </div>

            <div>
                <button onClick={() => logOut()}>Cerrar sesion</button>
            </div>
        </div>
    )
}

export default Home
