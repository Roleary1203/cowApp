import React from 'react';



var CowList = (props) => (

	
 


  	
  	 <h1>Cows
  	 	{props.cows.map((cow,index) =>
  	 		<li key={index} onClick={props.action}>{cow.cowName}</li>
  	 	)}</h1>	
   )
  


 
  
 


  


export default CowList;