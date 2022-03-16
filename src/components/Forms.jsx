import { useState } from "react"
import axios from "axios";

export const Forms= () => {

	const [formData, setFormData] = useState({
		name: "",
		age:"",
		address: "",
		department: "",
		salary: "",
		married: ""
	})

	const handleChange= (e) => {
		let {id, value, checked, type} = e.target;
		value= type === "checkbox" ? checked : value;
		setFormData({...formData,
			[id] : value
		})
	}

	const handleSubmit= (e) => {
		e.preventDefault();
		axios.post("http://localhost:3001/employees", formData);
        setFormData({
         name: "",
        age: "",
        address: "",
        department: "--select--",
        salary: "",
        married: "",
        })
	}

	return (
	<form onSubmit={handleSubmit}>
		<h3>Employee Details</h3>
		<input type="text" id="name" placeholder="enter name" onChange={handleChange} value={formData.name} />
		<br/>
		<input type="number" id="age" placeholder="enter age" onChange={handleChange} value={formData.age} />
		<br/>
		<input type="text" id="address" placeholder="enter address" onChange={handleChange} value={formData.address} />
		<br/>
		<select id="department" onChange={handleChange} value={formData.department}>
			<option>--select--</option>
			<option>Tech</option>
			<option>IT</option>
			<option>Technician</option>
		</select>
		<br/>
		<input type="number" id="salary" placeholder="enter salary" onChange={handleChange} value={formData.salary} />
		<br/>
		<input type="checkbox" id="married" value="true" onChange={handleChange} />Married
		<br/>
		<input type="submit" />
	</form>
	)
}