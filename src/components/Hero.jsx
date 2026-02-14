import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background blobs */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 mb-6 rounded-full glass-panel">
                        <span className="text-blue-400 font-medium tracking-wide text-sm uppercase">Welcome to my portfolio</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        Hi, I'm <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Sivapriyan.S
                        </span>
                    </h1>

                    <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        A passionate <span className="text-white font-semibold">Web Developer</span> crafting modern, responsive, and user-friendly digital experiences.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="#projects" className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1 w-full sm:w-auto">
                            View My Work
                        </a>
                        <a href="#contact" className="px-8 py-3.5 glass-panel rounded-full font-semibold text-white hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto border border-white/10">
                            <Download size={18} className="mr-2" /> Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
            </motion.div>
        </section>
    );
};

export default Hero;
