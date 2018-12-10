import React from 'react';



var CowDetails = (props) => (
 

   <div>
    
    {props.state ? <h1>{props.cows[0].cowName}</h1> : null }
    {props.state ? <h2>{props.cows[0].cowDesc}</h2> : null }
    </div>   
    

)


export default CowDetails;