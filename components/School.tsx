import React from 'react';

// Overall Timeline Component
const EducationTimeline: React.FC = () => {
    return (
        <section className="mt-12 mb-12" id="school">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">School</h2>
            <div className="relative border-l border-gray-200 dark:border-gray-700">
                <ol>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Current</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Masters at Georgia Tech, Machine Learning Specialization</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Notable classes: Deep Learning, Human Computer Interaction, Software Architecture and Design, Machine Learning for Trading, Computer Networks.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Previous</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BS in Computer Science, BA in Statistics, Minor in Physics at UC Santa Barbara</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Notable classes: Deep Learning, Programming Languages, Artificial Intelligence, Natural Language Processing, Reinforcement Learning.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Previous</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Studied abroad at the University of Edinburgh, Scotland</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Notable classes: Natural Language Processing, Extreme Computing, Robotics and Vision, Quantum Mechanics</p>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default EducationTimeline;