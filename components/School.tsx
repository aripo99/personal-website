import React from 'react';

// Overall Timeline Component
const EducationTimeline: React.FC = () => {
    return (
        <section className="mt-12 mb-12">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Education</h2>
            <div className="relative border-l border-gray-200 dark:border-gray-700">
                <ol>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Current</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Masters at Georgia Tech</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Notable classes: Deep Learning, Human Computer Interaction, Software Architecture and Design, Machine Learning for Trading.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Previous</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BS in Computer Science, BA in Statistics, and Minor in Physics</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Your educational background and achievements during this period can be showcased here.</p>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default EducationTimeline;