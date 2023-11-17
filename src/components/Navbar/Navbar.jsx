/* eslint-disable react/prop-types */
import { useEffect} from 'react';
import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import {
	Button,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";
import { logoutAuth } from "../../services/api";
import { alert } from "../CustomAlert/alert";


const Navbar = ({user, login, logout}) => {

	// const [theme, setTheme] = useState("light-theme");

	// const toggleTheme = () => {
	// 	const body = document.querySelector('body');
	// 	const lightModeIcon = document.querySelector('.light-mode');
	// 	const darkModeIcon = document.querySelector('.dark-mode');
		
	// 	if (body.classList.contains('light-theme')) {
	// 	  body.classList.replace('light-theme', 'dark-theme');
	// 	  lightModeIcon.style.opacity = 0;
	// 	  darkModeIcon.style.opacity = 1;
	// 	} else {
	// 	  body.classList.replace('dark-theme', 'light-theme');
	// 	  lightModeIcon.style.opacity = 1;
	// 	  darkModeIcon.style.opacity = 0;
	// 	}
	//   };

	// useEffect(() => {
	// 	document.body.className = theme;
	// }, [theme]);


	// const [theme, setTheme] = useState("light-theme");

	// const toggleTheme = () => {
	// 	const body = document.querySelector('body');
	// 	const lightModeIcon = document.querySelector('.light-mode');
	// 	const darkModeIcon = document.querySelector('.dark-mode');
		
	// 	if (body.classList.contains('light-theme')) {
	// 	  body.classList.replace('light-theme', 'dark-theme');
	// 	  lightModeIcon.style.opacity = 0;
	// 	  darkModeIcon.style.opacity = 1;
	// 	} else {
	// 	  body.classList.replace('dark-theme', 'light-theme');
	// 	  lightModeIcon.style.opacity = 1;
	// 	  darkModeIcon.style.opacity = 0;
	// 	}
	//   };

	// useEffect(() => {
	// 	document.body.className = theme;
	// }, [theme]);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const menuOpen = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		setAnchorEl(null);
		const logginOut = async () => {
			try {
				await logoutAuth();
				logout();
				window.location.reload();
			} catch (err) {
				alert({ message: err.response.data.message, type: "error" });
			}
		};
		logginOut();
	};

	return (
		<div className="navBar">
			<NavLink to="/">
				<div className="logoDiv">
					<p>Move</p>
					<h1>Forward</h1>
				</div>
			</NavLink>
			<div className="menu">
				<ul>
					<li className="nav-item">
						<a href="https://github.com/Aanya9693/opportunists">
							<i className="fa-brands fa-github"></i>
						</a>
					</li>
					<div className="nav-item">
						{user ? (
							<>
								<div
									className="item"
									id="menu-button-2"
									onClick={handleClick}
									aria-controls={
										menuOpen ? "basic-menu" : undefined
									}
									aria-haspopup="true"
									aria-expanded={
										menuOpen ? "true" : undefined
									}
								>
									<Avatar
										sx={{
											width: "30px",
											height: "30px",
											bgcolor: "rgb(99, 99, 99)",
											"&:hover": {
												bgcolor: "#4b84ce",
											},
										}}
										alt={user.name}
										src={user.image}
									></Avatar>
								</div>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={menuOpen}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "menu-button-2",
									}}
								>
									<MenuItem disabled>{user.name}</MenuItem>
									<MenuItem onClick={handleLogout}>
										<Button color="error">Logout</Button>
									</MenuItem>
								</Menu>
							</>
						) : (
							<NavLink to="/auth">
								<div className="button">
									<span className="material-icons">
										login
									</span>
								</div>
							</NavLink>
						)}
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

