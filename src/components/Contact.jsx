import React from 'react';
import GlassCard from './GlassCard';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-gradient">Get In Touch</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I'm open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <GlassCard className="flex items-center p-4 hover:bg-white/10 transition-colors group">
                                <div className="p-3 bg-blue-500/20 rounded-full mr-4 group-hover:bg-blue-500/30 transition-colors">
                                    <Phone className="text-blue-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-white font-medium hover:text-blue-400 transition-colors">
                                        <a href="tel:8610499798">8610499798</a>
                                    </p>
                                </div>
                            </GlassCard>

                            <GlassCard className="flex items-center p-4 hover:bg-white/10 transition-colors group">
                                <div className="p-3 bg-purple-500/20 rounded-full mr-4 group-hover:bg-purple-500/30 transition-colors">
                                    <Mail className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white font-medium hover:text-purple-400 transition-colors">
                                        <a href="mailto:sivapriyan15022007@gmail.com">sivapriyan15022007@gmail.com</a>
                                    </p>
                                </div>
                            </GlassCard>

                            <GlassCard className="flex items-center p-4 hover:bg-white/10 transition-colors group">
                                <div className="p-3 bg-pink-500/20 rounded-full mr-4 group-hover:bg-pink-500/30 transition-colors">
                                    <MapPin className="text-pink-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-white font-medium">Ganapathy, Coimbatore</p>
                                </div>
                            </GlassCard>
                        </div>
                    </div>

                    <GlassCard className="p-8">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center group">
                                <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" /> Send Message
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Contact;
