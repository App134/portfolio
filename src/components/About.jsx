import React from 'react';
import GlassCard from './GlassCard';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4"><span className="text-gradient">About Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <GlassCard className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3 w-full flex justify-center">
                            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/10 relative shadow-2xl group">
                                <img
                                    src="/src/assets/profile.jpg"
                                    alt="Sivapriyan.S"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        <div className="md:w-2/3 text-left">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Who I am</h3>
                            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                I am a motivated and detail-oriented <span className="text-blue-400">Computer Engineering diploma holder</span> with hands-on experience in web development.
                                I recently completed a 3-month internship at App Innovation Technologies, where I focused on building responsive web applications and interactive dashboards.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                My passion lies in front-end development, with a strong focus on creating clean UIs, ensuring usability, and solving complex problems.
                                I am always eager to learn new technologies and deliver high-quality results.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <span className="block text-2xl font-bold text-blue-400">3+</span>
                                    <span className="text-sm text-gray-400">Months Exp</span>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <span className="block text-2xl font-bold text-purple-400">5+</span>
                                    <span className="text-sm text-gray-400">Projects</span>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center col-span-2 md:col-span-1">
                                    <span className="block text-2xl font-bold text-pink-400">100%</span>
                                    <span className="text-sm text-gray-400">Commitment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default About;
