import React from "react";
import CancelIcon from '@material-ui/icons/Cancel';

const False=(props)=>{
    console.log(props);
    return (
        <> 
            <CancelIcon id="circleicon" className="circleicon--red"/>
            <p className="result result--unsafe">{props.status}</p>
        </>
    );
}

export default False;