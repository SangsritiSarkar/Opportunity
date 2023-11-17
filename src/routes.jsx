import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const AllRoutes = ({ user, login, logout }) => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<Home login={login} logout={logout} user={user}></Home>
				}
			></Route>
			
		</Routes>
	);
};

export default AllRoutes