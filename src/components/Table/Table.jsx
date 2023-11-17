/* eslint-disable react/prop-types */
import React, { useState, useMemo, useEffect } from "react";
import "./Table.css";
import SearchResults from "./SearchResults";
import Pagination from "../Pagination/Pagination";
import { getData } from "../../services/api";
import { alert } from "../../components/CustomAlert/alert"

const Table = ({
	selectedSuperTags,
	selectedTags,
	handleTagDeselect,
	handleTagSelect,
	query,
	user,
	login
}) => {
	// console.log({query});
	// console.log({ selectedSuperTags });
	const pageLength = 10;

	const [data, setData] = useState([]);
	// let results = data;

	useEffect(() => {
		const refreshData = async () => {
			try {
				const res = await getData();

				if (res.data.message === "success") {
					setData(res.data.data.oppurtunities);
					
				}
			} catch (err) {
				console.log(err.message);
				alert({message: err.message, type: "error"});
			}
		};

		refreshData();
	}, []);

	const results = useMemo(() => {
		let resultsCopy = data;
		// console.log("resultsCopy = ", resultsCopy);
		// console.log("refreshing results");

		resultsCopy.forEach(result => result.score = -1);
		
		if (selectedSuperTags.length > 0) {
			resultsCopy = resultsCopy.filter((item) =>
				selectedSuperTags.includes(item.type)
			);
		}
		
		if (selectedTags.length > 0) {
			selectedTags.forEach((selectedTag) => {
				resultsCopy = resultsCopy.filter((item) =>
					item.tags ? item.tags.includes(selectedTag) : false
				);
			});
		}

		if (query.length > 0) {
			const queries = query.toLowerCase().split(" ");
			// console.log(queries);

			resultsCopy.forEach((result) => {
				const mash =
					result.title +
					" " +
					result.description +
					" " +
					result.deadline +
					" " +
					result.tags +
					" " +
					result.location;

				result.score = 0;

				queries.forEach((q) => {
					if (mash.toLowerCase().includes(q)) result.score++;
				});
			});
		}
		// console.log("new results -> ", resultsCopy);
		// results = resultsCopy;
		return resultsCopy;

	}, [data, query, selectedSuperTags, selectedTags]);

	const [currentPage, setCurrentPage] = useState(1);

	const [currentTableData, sortedResults] = useMemo(() => {

		// console.log('refresfinh table data');
		// console.log('test result: ', results[results.length - 1]);
		const sortedResults = results
			.sort((r1, r2) =>
				r1.score < r2.score ? 1 : r1.score > r2.score ? -1 : 0
			)
			.filter((result) => result.score != 0 );
		
		// let a = -90
		// console.log(
		// 	"testing func: ", a? a>90 : true
		// );
		// console.log('sorted results -> ', sortedResults);
		const firstPageIndex = (currentPage - 1) * pageLength;
		const lastPageIndex = firstPageIndex + pageLength;

		return [sortedResults.slice(firstPageIndex, lastPageIndex), sortedResults];
	}, [currentPage, pageLength, results, query]);

	// console.log('testing length: ', sortedResults.length);

	return (
		<div className="table striped-background">
			<div className="divider"></div>
			<SearchResults
				data={currentTableData}
				selectedSuperTags={selectedSuperTags}
				selectedTags={selectedTags}
				handleTagDeselect={handleTagDeselect}
				handleTagSelect={handleTagSelect}
				query={query}
				user={user}
				login={login}
			/>
			<Pagination
				className="pagination-bar"
				currentPage={currentPage}
				totalCount={sortedResults.length}
				pageSize={pageLength}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
};

export default Table;