const Newsletter = () => {
    return (
        <section className="bg-accent-50 py-24">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
                    Join the Comfort Club
                </h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                    Subscribe to receive updates, access to exclusive deals, and more.
                </p>
                <form className="max-w-md mx-auto flex gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gray-900 text-white px-8 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
