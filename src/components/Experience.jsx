import React from 'react';
import GlassCard from './GlassCard';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-gradient">Experience</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <GlassCard>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3 flex flex-col md:items-end md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-500/30 pl-4 md:pl-0 md:pr-8 py-2">
                                <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
                                <span className="text-blue-400 font-medium block mb-2">App Innovation Technologies</span>
                                <div className="flex items-center md:justify-end text-gray-400 text-sm mt-1">
                                    <Calendar size={14} className="mr-2" />
                                    <span>3 Months Internship</span>
                                </div>
                            </div>

                            <div className="md:w-2/3 py-2">
                                <ul className="space-y-4">
                                    <li className="flex items-start text-gray-300 group">
                                        <span className="mr-3 text-blue-500 mt-1 transform group-hover:scale-150 transition-transform duration-300">•</span>
                                        <span>Worked on developing responsive web applications using modern web technologies.</span>
                                    </li>
                                    <li className="flex items-start text-gray-300 group">
                                        <span className="mr-3 text-purple-500 mt-1 transform group-hover:scale-150 transition-transform duration-300">•</span>
                                        <span>Built UI components and dashboards with a focus on clean design and usability.</span>
                                    </li>
                                    <li className="flex items-start text-gray-300 group">
                                        <span className="mr-3 text-pink-500 mt-1 transform group-hover:scale-150 transition-transform duration-300">•</span>
                                        <span>Gained hands-on experience in real-world project development and teamwork.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Experience;
