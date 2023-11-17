/* eslint-disable react/prop-types */
// import React from 'react';
import './Tag.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tag = (props) => {
	const { innerHtml, tag, color, type, select, onClick } = props;
	const style = {
		borderRadius:  '25px',
		minWidth: 'none',
	}

	return (
		<div 
			className={`tag ${type} ${color} ${select && "selected"}`}
			style={style}
			onClick={onClick}
		>
			{innerHtml}
			{select && <AiOutlineCloseCircle className="aioutine icon cross" />}
		</div>
	);
}
 
export default Tag;
