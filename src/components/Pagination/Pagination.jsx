/* eslint-disable react/prop-types */
import React from "react";
// import classnames from "classnames";
import { usePagination, DOTS } from "../../Hooks/usePagination/usePagination";
import "./Pagination.css";
const Pagination = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	// If there are less than 2 times in pagination range we shall not render the component
	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<div className="pagination-container">
			<div
				onClick={currentPage !== 1 ? onPrevious : undefined}
				className={`arrow left ${currentPage === 1 && "disabled"}`}
			>
				<span className="material-icons">chevron_left</span>
				Prev
			</div>
			<ul className="list">
				{paginationRange.map((pageNumber) =>
					// If the pageItem is a DOT, render the DOTS unicode character
					pageNumber === DOTS ? (
						<li className="item dots" key={`page-${pageNumber}`}>
							&#8230;
						</li>
					) : (
						<li
							className={`item ${
								pageNumber === currentPage && "selected"
							}`}
							key={`page-${pageNumber}`}
							onClick={() => onPageChange(pageNumber)}
						>
							{pageNumber}
						</li>
					)
				)}
				{/*  Right Navigation arrow */}
			</ul>
			<div
				onClick={currentPage !== lastPage ? onNext : undefined}
				className={`arrow right  ${
					currentPage === lastPage && "disabled"
				}`}
			>
				Next
				<span className="material-icons">chevron_right</span>
			</div>
		</div>
	);
};

export default Pagination;