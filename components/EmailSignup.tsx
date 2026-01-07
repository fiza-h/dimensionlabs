import React, { useState } from 'react';

const EmailSignup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            ;

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setEmail('');
                    setStatus('idle');
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem', maxWidth: '400px' }}>
            <div style={{ position: 'relative' }}>
                <input
                    type="email"
                    className="input-minimal"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ paddingRight: '120px' }}
                />
                <button
                    type="submit"
                    className="text-caps"
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        fontWeight: 'bold'
                    }}
                >
                    {status === 'success' ? 'Joined' : 'Notify Me'}
                </button>
            </div>
            {status === 'success' && (
                <p className="text-subtle text-caps" style={{ marginTop: '0.5rem' }}>
                    Added to the list.
                </p>
            )}
            {status === 'error' && (
                <p className="text-subtle text-caps" style={{ marginTop: '0.5rem', color: 'red' }}>
                    Something went wrong.
                </p>
            )}
        </form>
    );
};

export default EmailSignup;
