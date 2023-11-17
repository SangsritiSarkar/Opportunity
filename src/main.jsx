import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AlertContainer } from "./components/CustomAlert/alert";
import "./components/CustomAlert/CustomAlert.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<AlertContainer floatingTime={5000} />
	</React.StrictMode>
);
