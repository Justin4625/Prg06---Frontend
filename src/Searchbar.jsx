import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="flex items-center justify-center mb-6">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for a persona..."
                className="w-96 p-3 text-gray-800 bg-gray-200 rounded-md shadow-md hover:bg-gray-100 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
            />
        </div>
    );
};

export default Searchbar;