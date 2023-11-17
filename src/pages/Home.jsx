import React, { useState } from "react";
import Searchbox from "../components/Searchbox/Searchbox";
import Table from "../components/Table/Table";
import './Home.css';

const Home = ({user, login, logout}) => {
	const [superTags, setSuperTags] = useState([
		"Fellowship",
		"Internship",
		"Research",
		"Program",
		"Scholarship",
		"Mentorship",
		"Conference",
	]);
	const [tags, setTags] = useState([
		"Female",
		"Backend",
		"Frontend",
		"Full-stack",
		"Software",
		"Machine Learning",
		"Data Science",
		"Marketing",
		"Python",
		"Bitcoin",
		"Blockchain",
		"Social-Impact",
		"Open-Source",
		"Community",
		"AWS",
		"Finance",
		"Leardership",
		"Physics",
		"Underrepresented",
		"Volunteer",
		"Google Cloud",
		"Asia-Pacific",
	]);
	const [query, setQuery] = useState("");

	const [selectedSuperTags, setSelectedSuperTags] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);

	const handleTagSelect = (tag, isSuperTag) => {
		// console.log("selecting tag:", tag);
		if (isSuperTag) {
			setSelectedSuperTags([...selectedSuperTags, tag]);
		} else {
			setSelectedTags([...selectedTags, tag]);
		}
	};

	const handleTagDeselect = (tag, isSuperTag) => {
		// console.log("de-selecting tag:", tag);
		if (isSuperTag) {
			setSelectedSuperTags(selectedSuperTags.filter((t) => t !== tag));
		} else {
			setSelectedTags(selectedTags.filter((t) => t !== tag));
		}
	};
	return (
		<div className="home">
			<div className="sec-0"></div>
			<div className="sec-1">
				<Searchbox
					tags={tags}
					superTags={superTags}
					selectedSuperTags={selectedSuperTags}
					selectedTags={selectedTags}
					handleTagDeselect={handleTagDeselect}
					handleTagSelect={handleTagSelect}
					query={query}
					setQuery={setQuery}
					setTags={setTags}
					setSuperTags={setSuperTags}
					setSelectedTags={setSelectedTags}
					user={user}
					login={login}
				/>
				<Table
					selectedSuperTags={selectedSuperTags}
					selectedTags={selectedTags}
					handleTagDeselect={handleTagDeselect}
					handleTagSelect={handleTagSelect}
					query={query}
					user={user}
					login={login}
				/>
			</div>
			<div className="sec-2">
				<div className="message">
					<div className="title">
						<span className="material-icons">tips_and_updates</span>
						Tip
					</div>
					<div className="text">
					Bookmark opportunities to receive reminders about deadlines on your email.
					</div>
				</div>
				<div className="message">
					<div className="title">
						<span className="material-icons">tips_and_updates</span>
						Tip
					</div>
					<div className="text">
					We'll send you emails about new opportunities. If you can't find them, check your spam folder.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
