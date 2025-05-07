import React, { useState } from "react";
import "./PatientList.css";

const PatientList = () => {
	const [patients, setPatients] = useState([]);
	const [form, setForm] = useState({ first_name: "", last_name: "" });

	// Handle form input change
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	// Add a new patient
	const handleAdd = (e) => {
		e.preventDefault();
		const newPatient = { id: patients.length + 1, ...form };
		setPatients([...patients, newPatient]);
		setForm({ first_name: "", last_name: "" });
	};

	// Delete a patient
	const handleDelete = (id) => {
		setPatients(patients.filter((patient) => patient.id !== id));
	};

	return (
		<div className="patient-list">
			<h2>Patient Management</h2>

			<form onSubmit={handleAdd} className="patient-form">
				<input
					type="text"
					name="first_name"
					value={form.first_name}
					onChange={handleChange}
					placeholder="First Name"
					required
				/>
				<input
					type="text"
					name="last_name"
					value={form.last_name}
					onChange={handleChange}
					placeholder="Last Name"
					required
				/>
				<button type="submit">Add Patient</button>
			</form>

			<table className="patient-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{patients.map((patient) => (
						<tr key={patient.id}>
							<td>{patient.id}</td>
							<td>{patient.first_name}</td>
							<td>{patient.last_name}</td>
							<td>
								<button onClick={() => handleDelete(patient.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PatientList;
