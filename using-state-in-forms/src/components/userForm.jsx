import { useState } from "react";

function UserForm() {
    const [formData, setFormData] = useState({name: "", email: "", feedback: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <div style={{ textAlign: "left", marginTop: "20px", padding: "20px" }}>
            <h1 style={{color: "navy"}}>User Form</h1>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Feedback:
                    <input
                        type="textarea"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <button disabled={!(formData.name && formData.email && formData.feedback)}>Submit</button>
            <br/>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Feedback: {formData.feedback}</p>
        </div>
    );
}

export default UserForm;