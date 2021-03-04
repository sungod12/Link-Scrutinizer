import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const True=(props)=>{
    console.log(props);
    return (
        <> 
            <CheckCircleOutlineIcon id="circleicon" className="circleicon--green" />
            <p className="result result--safe">{props.status}</p>
        </>
    );
}

export default True;