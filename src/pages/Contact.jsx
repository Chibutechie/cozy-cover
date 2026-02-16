import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import Button from '../components/ui/Button';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-accent-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary-900 mb-4">Contact Us</h1>
                    <p className="text-primary-700 max-w-2xl mx-auto">
                        Have questions about our premium bedding? We're here to help you create your perfect sleep sanctuary.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-sm shadow-sm"
                    >
                        <h2 className="text-2xl font-serif font-medium text-primary-900 mb-8">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-primary-800 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 bg-accent-50 border border-primary-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all placeholder:text-primary-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-primary-800 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 bg-accent-50 border border-primary-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all placeholder:text-primary-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-primary-800 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    className="w-full px-4 py-3 bg-accent-50 border border-primary-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all placeholder:text-primary-300"
                                    placeholder="Inquiry about Product"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-primary-800 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-accent-50 border border-primary-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all resize-none placeholder:text-primary-300"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <Button variant="primary" className="w-full py-4 uppercase tracking-widest text-sm font-bold">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-serif font-medium text-primary-900 mb-6">Visit Our Studio</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-primary-900 text-white rounded-sm">
                                            <FiMapPin size={18} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary-900">Address</p>
                                            <p className="text-primary-700 leading-relaxed">
                                                Jedo mega city estates Ushafa, Abuja
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-primary-900 text-white rounded-sm">
                                            <FiPhone size={18} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary-900">Phone</p>
                                            <p className="text-primary-700">+234 905 886 6084</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-primary-900 text-white rounded-sm">
                                            <FiMail size={18} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary-900">Email</p>
                                            <p className="text-primary-700">Sojustina543@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-medium text-primary-900 mb-6">Follow Us</h2>
                                <div className="flex gap-4">
                                    {[
                                        { icon: FiInstagram, link: '#' },
                                        { icon: FiFacebook, link: '#' },
                                        { icon: FiTwitter, link: '#' }
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.link}
                                            className="p-3 border border-primary-200 text-primary-700 hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all rounded-sm"
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </section>

                            <div className="p-8 bg-primary-800 rounded-sm border border-primary-700">
                                <p className="text-white italic font-serif text-lg">
                                    "Sleep is the golden chain that ties health and our bodies together."
                                </p>
                                <p className="text-primary-100 mt-4 text-sm uppercase tracking-widest">— Thomas Dekker</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
