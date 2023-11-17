import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
// import AllRoutes from "./routes";
import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getUserData } from "./services/api";
import { alert } from "./components/CustomAlert/alert";
// import GoogleLogin from "./components/GoogleLogin";

const App = () => {

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};
	const logout = () => {
		setUser(null);
		localStorage.setItem("user", JSON.stringify(null));
	};

	useEffect(() => {
		const refreshUserData = async () => {
			try {
				const res = await getUserData();

				login(res.data.data.user);
			}
			catch (err) {
				// alert({ message: err.response.data.message, type: "error" });
			}
		};
		refreshUserData();
	}, [])

	return (
		<GoogleOAuthProvider clientId="79486214026-37n8n96tjtv0h9o6a8dnabi857555n02.apps.googleusercontent.com">
			<div className="App">
				<Router>
					<Navbar user={user} login={login} logout={logout} />
					<Routes>
						<Route
							path="/"
							element={
								<Home
									user={user}
									login={login}
									logout={logout}
								/>
							}
						/>
						<Route
							path="/about"
							element={
								<About
									user={user}
									login={login}
									logout={logout}
								/>
							}
						/>
						<Route
							path="/auth"
							element={
								<Auth
									user={user}
									login={login}
									logout={logout}
								/>
							}
						/>
					</Routes>
					<Footer />
				</Router>
			</div>
		</GoogleOAuthProvider>
	);
};

export default App;
