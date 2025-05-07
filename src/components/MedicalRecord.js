import React, { useState } from "react";
import "./MedicalRecord.css";

const MedicalRecord = ({ patientId }) => {
	const [records, setRecords] = useState([]);
	const [form, setForm] = useState({
		visit_date: "",
		diagnosis: "",
		prescription: "",
	});

	// Handle form input change
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	// Add a new medical record
	const handleAdd = (e) => {
		e.preventDefault();
		const newRecord = {
			id: records.length + 1,
			...form,
			patient_id: patientId,
		};
		setRecords([...records, newRecord]);
		setForm({ visit_date: "", diagnosis: "", prescription: "" });
	};

	// Delete a medical record
	const handleDelete = (id) => {
		setRecords(records.filter((record) => record.id !== id));
	};

	return (
		<div className="medical-record">
			<h2>Medical Records</h2>

			<form onSubmit={handleAdd} className="record-form">
				<input
					type="date"
					name="visit_date"
					value={form.visit_date}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="diagnosis"
					value={form.diagnosis}
					onChange={handleChange}
					placeholder="Diagnosis"
					required
				/>
				<input
					type="text"
					name="prescription"
					value={form.prescription}
					onChange={handleChange}
					placeholder="Prescription"
					required
				/>
				<button type="submit">Add Record</button>
			</form>

			<table className="record-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Visit Date</th>
						<th>Diagnosis</th>
						<th>Prescription</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{records.map((record) => (
						<tr key={record.id}>
							<td>{record.id}</td>
							<td>{record.visit_date}</td>
							<td>{record.diagnosis}</td>
							<td>{record.prescription}</td>
							<td>
								<button onClick={() => handleDelete(record.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MedicalRecord;
