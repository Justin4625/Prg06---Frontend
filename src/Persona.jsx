import { Link, useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";

function Persona() {
    const params = useParams();
    const id = params.id;
    const [persona, setPersona] = useState(null);
    const navigate = useNavigate();

    async function fetchPersona() {
        try {
            const response = await fetch(`http://145.24.223.57:8000/personas/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('404 Persona not found');
            }

            const data = await response.json();
            setPersona(data);
        } catch (error) {
            console.error('Error fetching persona:', error);
        }
    }

    async function deletePersona() {
        try {
            await fetch(`http://145.24.223.57:8000/personas/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                },
            });
            navigate('/personas');
        } catch (error) {
            console.error('Error deleting persona:', error);
        }
    }

    function editPersona() {
        navigate(`/personas/${id}/edit`);
    }

    useEffect(() => {
        fetchPersona();
    }, []);

    return (
        <div className="bg-gray-800 text-gray-300 min-h-screen font-sans relative overflow-hidden">
            <div className="container mx-auto p-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-indigo-300 uppercase tracking-wide shadow-glow">
                        {persona ? persona.name : '404 No persona found'}
                    </h1>
                </div>

                {persona ? (
                    <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
                        <div className="mb-6 space-y-4">
                            <p className="text-2xl text-indigo-200 font-semibold">Arcana: <span
                                className="text-white">{persona.arcana}</span></p>
                            <p className="text-2xl text-indigo-200 font-semibold">Level: <span
                                className="text-white">{persona.level}</span></p>
                            <p className="text-2xl text-indigo-200 font-semibold">Price: <span
                                className="text-white">¥{persona.price}</span></p>
                        </div>

                        <div
                            className="absolute top-0 left-0 w-24 h-24 bg-purple-600 opacity-25 rounded-full blur-lg animate-pulse"></div>
                        <div
                            className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-700 opacity-20 rounded-full blur-xl animate-pulse"></div>

                        <div className="flex justify-between items-center mt-6 space-x-4">
                            <div className="flex-1">
                                <Link
                                    to="/personas"
                                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white w-full px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:from-indigo-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 text-center"
                                >
                                    <span className="font-semibold">Back to the compendium</span>
                                </Link>
                            </div>

                            <button
                                onClick={editPersona}
                                className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                            >
                                EDIT
                            </button>

                            <button
                                onClick={deletePersona}
                                className="bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300"
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 p-8 rounded-lg shadow-xl">
                        <p className="text-center text-xl text-gray-300">404 No persona found</p>
                    </div>
                )}
            </div>

            <div
                className="absolute top-0 left-0 w-32 h-32 bg-indigo-600 opacity-15 rounded-full blur-lg animate-pulse"></div>
            <div
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-900 via-indigo-800 to-black opacity-20 blur-3xl animate-pulse"></div>
            <div
                className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-700 via-indigo-700 to-black opacity-25 blur-3xl animate-pulse"></div>
        </div>

    );
}

export default Persona;
