import React, { useState } from 'react';

const ApplicationForm: React.FC = () => {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        college: string;
        city: string;
        linkedin: string;
        cv: File | null;
        video: File | null;
    }>({
        name: '',
        email: '',
        college: '',
        city: '',
        linkedin: '',
        cv: null,
        video: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    cv: formData.cv ? formData.cv.name : 'No file',
                    video: formData.video ? formData.video.name : 'No file'
                }),
            });

            if (response.ok) {
                alert('Thank you for applying! We will be in touch.');
                setFormData({
                    name: '',
                    email: '',
                    college: '',
                    city: '',
                    linkedin: '',
                    cv: null,
                    video: null,
                });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please check your connection.');
        }
    };

    return (
        <div className="container" style={{ maxWidth: '600px', marginTop: '4rem' }}>
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h2>Application</h2>
                <p className="text-subtle">Spring 2026 Venture Growth Fellowship</p>
            </header>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="text-caps block mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-minimal w-full"
                        required
                        placeholder="Jane Doe"
                    />
                </div>

                <div>
                    <label className="text-caps block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-minimal w-full"
                        required
                        placeholder="jane@college.edu"
                    />
                </div>

                <div>
                    <label className="text-caps block mb-1">College / University</label>
                    <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="input-minimal w-full"
                        required
                        placeholder="Stanford, MIT, etc."
                    />
                </div>

                <div>
                    <label className="text-caps block mb-1">City (Current Location)</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="input-minimal w-full"
                        required
                        placeholder="San Francisco, CA"
                    />
                </div>

                <div>
                    <label className="text-caps block mb-1">LinkedIn URL</label>
                    <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="input-minimal w-full"
                        required
                        placeholder="https://linkedin.com/in/..."
                    />
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <label className="text-caps block mb-1">CV / Resume (PDF)</label>
                    <input
                        type="file"
                        name="cv"
                        accept=".pdf"
                        onChange={handleChange}
                        required
                        style={{ padding: '0.5rem 0' }}
                    />
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <label className="text-caps block mb-1">Video Pitch (1 min max)</label>
                    <p className="text-subtle text-mono" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                        Convince us you belong here. Be creative.
                    </p>
                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={handleChange}
                        required
                        style={{ padding: '0.5rem 0' }}
                    />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: '2rem' }}>
                    Submit Application
                </button>
            </form>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a href="/" className="text-subtle text-mono" style={{ textDecoration: 'underline' }}>&larr; Back to Home</a>
            </div>
        </div>
    );
};

export default ApplicationForm;
