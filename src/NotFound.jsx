import React from "react";

const NotFound = () => {
    return (
        <div className="bg-black text-gray-200 min-h-10 flex flex-col items-center justify-center font-sans pt-1">
            <h1 className="text-6xl font-extrabold text-red-600 uppercase tracking-wider shadow-glow mb-6">
                404
            </h1>
            <p className="text-xl text-gray-400">
                The page you are looking for does not exist.
            </p>
        </div>
    );
};

export default NotFound;
