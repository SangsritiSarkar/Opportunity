import React, { useState, useEffect } from 'react';
import './Notify.css'

const Notify = ({innerHtml, type}) => {
	return ( 
		<div className={`notify ${type}`}>{ innerHtml }</div>
	 );
}
 
export default Notify;