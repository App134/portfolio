import React from 'react';
import GlassCard from './GlassCard';
import { ExternalLink, Github, Cloud, DollarSign, Utensils } from 'lucide-react';

const projects = [
    {
        title: '3D Cooking Simulator Game',
        description: 'Developed a fully functional 3D cooking game using Unity and C#. Implemented player movement, order system, NPC customers, UI system, background music, and sound effects. Built and published the game for PC/Web using Unity build tools.',
        tech: ['Unity', 'C#', 'WebGL'],
        icon: <Utensils size={40} className="text-orange-400" />,
        link: '#',
        github: '#'
    },
    {
        title: 'Weather API Web Application',
        description: 'Built a responsive weather app using real-time API data. Displays temperature, humidity, wind speed, and conditions. Supports location-based and city search functionality.',
        tech: ['React', 'OpenWeatherMap API', 'CSS'],
        icon: <Cloud size={40} className="text-blue-400" />,
        link: '#',
        github: '#'
    },
    {
        title: 'Finance Dashboard',
        description: 'Developed an interactive dashboard for income and expense tracking. Visualized financial data using charts and summary cards. Designed with a clean and user-friendly interface.',
        tech: ['React', 'Chart.js', 'Firebase'],
        icon: <DollarSign size={40} className="text-green-400" />,
        link: '#',
        github: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-gradient">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <GlassCard key={index} className="flex flex-col h-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-white/5 rounded-lg ring-1 ring-white/10">
                                    {project.icon}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.github} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="View Code">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-colors" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
