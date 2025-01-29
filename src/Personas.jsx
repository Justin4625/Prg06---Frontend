import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar.jsx";

function Personas() {
    const [personas, setPersonas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    async function fetchPersonas() {
        try {
            const response = await fetch("http://145.24.223.57:8000/personas", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });
            const data = await response.json();
            setPersonas(data.items);
        } catch (error) {
            console.error("Error fetching personas:", error);
        }
    }

    useEffect(() => {
        fetchPersonas();
    }, []);

    const handlesearch = (term) => {
        setSearchTerm(term);
    };

    const filteredPersonas = personas.filter((persona) =>
        persona.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        persona.arcana.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-black text-gray-200 min-h-screen font-sans">
            <div className="container mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-indigo-700 uppercase tracking-wide shadow-glow">
                        Personas
                    </h1>
                </div>

                <Searchbar onSearch={handlesearch} />

                {/* Persona List */}
                <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 text-gray-300 uppercase text-sm">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Arcana</th>
                            <th className="p-4">Info</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredPersonas && filteredPersonas.length > 0 ? (
                            filteredPersonas.map((persona) => (
                                <tr
                                    key={persona.id}
                                    className="border-b border-gray-600 hover:bg-purple-800 hover:text-white"
                                >
                                    <td className="p-4">{persona.name}</td>
                                    <td className="p-4">{persona.arcana}</td>
                                    <td className="p-4">
                                        <a
                                            href={`/personas/${persona.id}`}
                                            className="text-indigo-300 hover:text-indigo-200 transition-all text-sm"
                                        >
                                            Details
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="p-4 text-center text-gray-400"
                                >
                                    No personas found
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Personas;
