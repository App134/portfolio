import React from 'react';
import GlassCard from './GlassCard';
import { Code, Globe, Database, Smartphone, Layout, Server, Terminal, Cpu } from 'lucide-react';

const skills = [
    { name: 'HTML5', icon: <Globe className="text-orange-500" />, level: 'Advanced' },
    { name: 'CSS3 & Tailwind', icon: <Layout className="text-blue-500" />, level: 'Intermediate' },
    { name: 'JavaScript', icon: <Code className="text-yellow-500" />, level: 'Intermediate' },
    { name: 'React', icon: <Cpu className="text-blue-400" />, level: 'Intermediate' },
    { name: 'C#', icon: <Terminal className="text-purple-500" />, level: 'Basic' },
    { name: 'Unity', icon: <Smartphone className="text-white" />, level: 'Basic' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-gradient">My Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <GlassCard key={index} className="flex flex-col items-center justify-center p-8 hover:bg-white/10 transition-colors group cursor-default">
                            <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 ring-1 ring-white/10 group-hover:ring-blue-500/50">
                                {React.cloneElement(skill.icon, { size: 32 })}
                            </div>
                            <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">{skill.level}</span>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
