import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [missingFields, setMissingFields] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const missing = [];
        if (!formData.name) missing.push('Name');
        if (!formData.email) missing.push('Email');
        if (!formData.message) missing.push('Message');
        setMissingFields(missing);
        if (missing.length === 0) {
            // Submit the form or perform further actions
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }
    };

    return (
        <div>
            <h1>Contact</h1>
            <p>Fill out the form below to get in touch.</p>

            <form className="mt-5 md:w-1/2" onSubmit={handleSubmit}>
                <div className="flex flex-col items-start md:w-3/4">
                    <label>Name:</label>
                    <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-2 flex flex-col items-start md:w-3/4">
                    <label>Email:</label>
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-2 flex flex-col items-start md:w-3/4">
                    <label>Message:</label>
                    <textarea
                        placeholder="Message text here"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <div className='py-4'>
                    {missingFields.length > 0 && (
                        <p>Please fill out the following fields: {missingFields.join(', ')}</p>
                    )}
                </div>

                <button type="submit" className="mt-1">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
