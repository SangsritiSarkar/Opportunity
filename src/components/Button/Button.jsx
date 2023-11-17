/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './Button.css';


const Button = (props) => {
	const { innerText, variant, type, onClick, disabled, color, endIcon } = props;
	const handleClick = () => {
		
	}
	return !disabled ? (
		<button
			className={`btn btn--${variant} ${color}`}
			type={type}
			onClick={() => onClick() || handleClick()}
		>
			{innerText}
			{endIcon}
		</button>
	) : (
		<button className={`btn btn--${variant} disabled`} type={type}>
			{innerText}
			{endIcon}
		</button>
	);
}
 
export default Button;