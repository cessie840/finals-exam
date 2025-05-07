import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PatientList from "./components/PatientList.js";
import RecordList from "./components/MedicalRecord.js";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="app">
				<nav className="navbar">
					<h1>Mapatay Medical Clinic</h1>
					<ul>
						<li>
							<Link to="/">Patients</Link>
						</li>
						<li>
							<Link to="/records">Medical Records</Link>
						</li>
					</ul>
				</nav>

				<main>
					<Routes>
						<Route path="/" element={<PatientList />} />
						<Route path="/records" element={<RecordList patientId={1} />} />
					</Routes>
				</main>

				<footer className="footer">
					© 2025 Mapatay Medical Clinic. All rights reserved.
				</footer>
			</div>
		</Router>
	);
}

export default App;
