import React from 'react';
import { Link } from 'react-router/es6';
import "./menu.scss";

const Footer = (...props) => {
  return(
  	<footer className="sticky-footer">
		<div className="container">
		  <div className="text-center">
		    <small>Copyright © Your Website 2017</small>
		  </div>
		</div>
	</footer>
  )  
}

export {Footer}