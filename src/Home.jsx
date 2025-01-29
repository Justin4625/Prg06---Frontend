import { Link } from "react-router";

function Home() {
    return (
        <div className="bg-gray-900 text-white font-sans min-h-screen">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-black py-24 text-center">
                <h1 className="text-5xl font-bold mb-4 text-shadow-lg">
                    Welcome to the Persona Compendium!
                </h1>
                <p className="text-xl mb-6 text-gray-300">
                    Explore a world of unique personas, their stories, and powerful abilities. Dive deep into the universe of your favorite characters.
                </p>
            </header>

            {/* Introduction Section */}
            <section className="py-16 px-6 bg-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-indigo-500 mb-6 text-shadow-lg">What is a Persona Compendium?</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        The Persona Compendium is the go-to place for all fans of the Personas from the world of Persona! Whether you're a new player or an old pro, you'll find all the information you need here.
                    </p>
                    <p className="text-lg text-gray-300 mb-4">
                        Explore different personas, learn about their powers, levels, and discover their arcana. This is your ultimate source for everything Persona-related!
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-900 py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-indigo-400 mb-6 text-shadow-lg">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-indigo-300 mb-4">In-Depth Information</h3>
                            <p className="text-gray-300">
                                Get detailed information about each persona, including their unique traits, powers, and backstory.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Easy to Use</h3>
                            <p className="text-gray-300">
                                Our website offers a user-friendly interface so you can easily find everything you need.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Grow with Personas</h3>
                            <p className="text-gray-300">
                                Track the growth of your favorite personas and learn how they can become stronger and develop over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-800 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-indigo-400 mb-6 text-shadow-lg">What Our Users Are Saying</h2>
                    <div className="flex justify-center space-x-12">
                        <div className="bg-gray-700 p-6 rounded-xl shadow-xl max-w-sm transform hover:scale-105 transition-all duration-300">
                            <p className="text-gray-300 mb-4">"The best source for everything about Personas! The detailed information is fantastic."</p>
                            <p className="text-indigo-400 font-semibold">Johan, User</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-xl shadow-xl max-w-sm transform hover:scale-105 transition-all duration-300">
                            <p className="text-gray-300 mb-4">"An awesome website! The navigation is simple, and it helped me discover a lot of new personas."</p>
                            <p className="text-indigo-400 font-semibold">Laura, User</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-xl shadow-xl max-w-sm transform hover:scale-105 transition-all duration-300">
                            <p className="text-gray-300 mb-4">"I love how detailed everything is presented. This website is my go-to for persona info."</p>
                            <p className="text-indigo-400 font-semibold">Mathijs, User</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 py-8 text-center">
                <p className="text-gray-400">&copy; 2025 Personas Compendium. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
