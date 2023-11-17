/* eslint-disable react/prop-types */
import React from "react";
import "./Searchbox.css";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import { useState } from "react";


const Searchbox = ({
	tags,
	superTags,
	selectedSuperTags,
	selectedTags,
	handleTagDeselect,
	handleTagSelect,
	setQuery,
}) => {
	
	const [viewMore, setViewMore] = useState(false);
	const [value, setValue] = useState('');
	const handleInputChange = (e) => {
		setQuery(e.target.value); 
		setValue(e.target.value);
	};
	const handleClear = () => {
		setValue('');
		setQuery('');
	};
	// console.log({query}); 

	return (
		<div className="searchDiv striped-background">
			<div className="title">Search for<br/>Opportunities</div>
			<div className="firstDiv">
				<div className="searchIcon">
					<span className="material-icons">search</span>
					<input
						type="text"
						className="inputText"
						placeholder="Search here...."
						value={value}
						onChange={handleInputChange} 
					/>
					{value.length > 0 && (
						<span className="material-icons cancel" onClick={handleClear}>
						highlight_off
						</span>
					)}
					{/* <Button
						innerText="Search"
						variant="primary"
						color="green"
					></Button> */}
				</div>
			</div>

			<div className="secDiv">
				<div className="selectedTags">
					{selectedSuperTags.map((tag) => (
						<Tag
							innerHtml={tag}
							key={tag}
							color="green"
							type="secondary"
							onClick={
								selectedSuperTags.includes(tag)
									? () => handleTagDeselect(tag, true)
									: () => handleTagSelect(tag, true)
							}
							select={selectedSuperTags.includes(tag)}
						></Tag>
					))}
					{selectedTags.map((tag) => (
						<Tag
							innerHtml={tag}
							key={tag}
							color="yellow"
							type="secondary"
							onClick={
								selectedTags.includes(tag)
									? () => handleTagDeselect(tag, false)
									: () => handleTagSelect(tag, false)
							}
							select={selectedTags.includes(tag)}
						></Tag>
					))}
				</div>

				{(selectedSuperTags.length != 0 ||
					selectedTags.length != 0) && (
					<div className="divider"></div>
				)}

				<div className={`tags ${!viewMore && "limit"}`}>
					{superTags.map((tag) => (
						<Tag
							innerHtml={tag}
							key={tag}
							color="green"
							type="secondary"
							onClick={
								selectedSuperTags.includes(tag)
									? () => handleTagDeselect(tag, true)
									: () => handleTagSelect(tag, true)
							}
							select={selectedSuperTags.includes(tag)}
						></Tag>
					))}
					{tags.map((tag) => (
						<Tag
							innerHtml={tag}
							key={tag}
							color="yellow"
							type="secondary"
							onClick={
								selectedTags.includes(tag)
									? () => handleTagDeselect(tag, false)
									: () => handleTagSelect(tag, false)
							}
							select={selectedTags.includes(tag)}
						></Tag>
					))}
				</div>
				<div
					className="viewMore"
					onClick={() => setViewMore(!viewMore)}
				>
					<p>View {viewMore ? "less" : "more"}</p>
					{viewMore ? (
						<span className="material-icons">
							keyboard_double_arrow_up
						</span>
					) : (
						<span className="material-icons">
							keyboard_double_arrow_down
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Searchbox;