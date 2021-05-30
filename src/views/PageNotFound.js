import React from 'react'


const PageNotFound = () =>{
    return(
        <div className="row">
            <div className='col s12'>
                <i className="small material-icons left" id="exclamation-triangle">not_interested</i>
            </div>
            <div className='col s12'>
                <div class="numero">
                    404
                </div>
            </div>
            <div className='col s12'>
                <div class="leyenda">
                    ¡Perdón! La página no existe.
                </div>
            </div>
        </div>
            )

}


export default PageNotFound;