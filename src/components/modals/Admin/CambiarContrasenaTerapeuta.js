import React from 'react';
import Popup from 'reactjs-popup';

const CambiarContrasenaTerapeuta = (props) => {
    return (
        <Popup
        onOpen={()=>console.log({props})}
        modal>
            {
                open => 
                    <div className='w-full bg-'>

                    </div>
            }
        </Popup>
    )
}

export default CambiarContrasenaTerapeuta;