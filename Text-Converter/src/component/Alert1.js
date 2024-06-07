
import React from 'react';

function Alert(props) {

    return(
        props.alert && <div class="alert alert-info" role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    )

}

export default Alert;