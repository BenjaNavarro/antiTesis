import React from 'react';
import Popup from 'reactjs-popup';

const CambiarContrasenaPaciente = (props) => {
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

export default CambiarContrasenaPaciente;