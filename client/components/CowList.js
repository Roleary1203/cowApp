import React from 'react';
import Cows from '../data/cows.js';
import App from './app.js'

console.log(Cows)
var CowList = (props) => (

	
 


  	
  	 <h1>Cows
  	 	{Cows.map((cow,index) =>
  	 		<li key={index}>{cow.cowName}</li>
  	 	)}</h1>	
   )
  


 
  
 


  


export default CowList;