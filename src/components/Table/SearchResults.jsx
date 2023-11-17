/* eslint-disable react/prop-types */
import React from "react";
import "./Table.css";
import Tag from "../Tag/Tag";
import { alert } from "../CustomAlert/alert";
import { updateUser } from "../../services/api";
// import Button from "../Button/Button";

const SearchResults = ({
	selectedSuperTags,
	selectedTags,
	handleTagDeselect,
	handleTagSelect,
	data,
	user,
	login
}) => {
	const cleanData = [...new Set(data)];

	const handleBookmarkClick = async (id) => {
		if (!user) {
			alert({ message: "You are not logged In", type: 'error' });
			return;
		}
		const userCopy = user
		if (user.selected.includes(id)) {
			userCopy.selected = userCopy.selected.filter(item => item !== id)
		}
		else userCopy.selected.push(id);
		try {
			const res = await updateUser(userCopy);

			login(res.data.data.user);

		}
		catch (err) {
			alert({message: err.response.data.message, type: "error"})
		}
	}

	
	// console.log(cleanData);
	return cleanData.length === 0
		? "No results Found"
		: cleanData.map((item, i) => (
			<div className="item" key={item.name.trim().toLowerCase() + i}>
				<div className="row-1">
					{/* <div className="col-1">
						<div className="logo"></div>
					</div> */}
					<div className="col-2">
						<div className="title">
							<a href={item.link}>{item.name}</a>
							<span className="material-icons">launch</span>
						</div>
						<div className="org">{item.org}</div>
					</div>
					<div className="col-3">
						{/* <span className="material-icons">notifications_none</span> */}
						<span className="material-icons" onClick={() => handleBookmarkClick(item.id)}>
							{ (user && user.selected.includes(item.id)) ? 'bookmark' : 'bookmark_border'}
						</span>
					</div>
				</div>
				<div className="row-2 description">{item.description}</div>
				<div className="row-3 tags">
					
					{
						<Tag
							innerHtml={item.type}
							key={item.type}
							color="green"
							type="secondary"
							onClick={
								selectedSuperTags.includes(item.type)
									? () =>
										handleTagDeselect(
											item.type,
											true
										)
									: () => handleTagSelect(item.type, true)
							}
							select={selectedSuperTags.includes(item.type)}
						></Tag>
					}
					{item.tags && item.tags.map((tag) => (
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
				<div className="divider"></div>
				<div className="row-4 details">
					<div className="col-1">
						<div className="date detail">
							<div className="icon">
								<span className="material-icons">
										event
								</span>
							</div>
							{item.deadline}
						</div>
						{item.stipend && (
							<div className="stipend detail">
								<div className="icon">
									<span className="material-icons">
											payments
									</span>
								</div>
								{item.stipend}
							</div>
						)}

						{item.country && (
							<div className="country detail">
								<div className="icon">
									<span className="material-icons">
											place
									</span>
								</div>
								{item.country}
							</div>
						)}
					</div>
					<div className="col-2">
						{/* <Button
						innerText="Share"
						variant="primary"
						color="green"
						endIcon={<span className="material-icons">share</span>}
					/> */}
					</div>
				</div>
			</div>
		));
};

export default SearchResults;
