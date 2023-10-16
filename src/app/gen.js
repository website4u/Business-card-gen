"use client";
import React, { useState } from 'react';

function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        dateOfBirth: '',
        jobName: '',
    });

    const [htmlContent, setHtmlContent] = useState('');
    const [htmlGenerated, setHtmlGenerated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const html = generateHTML(formData);
        setHtmlContent(html);
        setHtmlGenerated(true);

        downloadHTMLFile(html);
    };

    const generateHTML = (data) => {
        const { name, mobileNumber, dateOfBirth , jobName } = data;

        return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>User Information</title>
        </head>
        <body>
          <h1>User Information</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
          <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
          <p><strong>Date of Birth:</strong> ${jobName}</p>
        </body>
      </html>
    `;
    };

    const downloadHTMLFile = (html) => {
        const element = document.createElement('a');
        const file = new Blob([html], { type: 'text/html' });
        element.href = URL.createObjectURL(file);
        element.download = 'user_information.html';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div>
            {htmlGenerated ? (
                <div>
                    <h2>Generated HTML:</h2>
                    <pre>{htmlContent}</pre>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="mobileNumber">Mobile Number:</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="jobName">Job:</label>
                        <input
                            type="text"
                            id="jobName"
                            name="jobName"
                            value={formData.jobName}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default UserForm;