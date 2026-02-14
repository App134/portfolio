import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="glass-panel mt-20 py-8 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <span className="text-xl font-bold text-gradient">Sivapriyan.S</span>
                        <p className="text-gray-400 text-sm mt-2">
                            Building digital experiences with passion.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/siva-priyan-baa9b1383" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:sivapriyan15022007@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-500 text-xs">
                    © {new Date().getFullYear()} Sivapriyan.S. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
