import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

function UpdatePersona() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        arcana: '',
        level: '',
        price: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPersona() {
            try {
                const response = await fetch(`http://145.24.223.57:8000/personas/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                });
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error('Error fetching persona:', error);
            }
        }

        fetchPersona();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function updatePersona() {
        try {
            const response = await fetch(`http://145.24.223.57:8000/personas/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Successfully updated:', data);
                navigate('/personas');
            } else {
                console.error('Error updating persona:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePersona();
    };

    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center">
            <header className="py-6">
                <h1 className="text-4xl font-extrabold text-indigo-700 uppercase tracking-wide shadow-glow">
                    Update Persona
                </h1>
            </header>
            <main className="w-3/4 bg-gray-800 p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-indigo-300 mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="arcana" className="block text-lg font-medium text-indigo-300 mb-2">
                            Arcana:
                        </label>
                        <input
                            type="text"
                            id="arcana"
                            name="arcana"
                            value={formData.arcana}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="level" className="block text-lg font-medium text-indigo-300 mb-2">
                            Level:
                        </label>
                        <input
                            type="number"
                            id="level"
                            name="level"
                            value={formData.level}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-lg font-medium text-indigo-300 mb-2">
                            Price:
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white w-full px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:from-indigo-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 text-center"
                    >
                        Update Persona
                    </button>
                </form>
            </main>
        </div>
    );
}

export default UpdatePersona;
