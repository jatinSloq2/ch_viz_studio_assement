'use client';

import React, { useState } from 'react';

const FeedbackTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'Capture feedback from anywhere',
            desc: 'Connect your sources (Slack, Intercom, HubSpot, Email & more) to create feedback with context',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path d="M4 12.7273H8.18928C8.5297 14.5218 10.1064 15.8788 12 15.8788C13.8936 15.8788 15.4703 14.5218 15.8107 12.7273L20 12.7273M17.0909 20H6.9091C5.30245 20 4 18.6975 4.00001 17.0909L4.00004 6.90908C4.00005 5.30244 5.30249 4 6.90913 4L17.0909 4C18.6976 4 20 5.30244 20 6.90909V17.0909C20 18.6976 18.6976 20 17.0909 20Z" stroke="#2B44E7" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            ),
            image: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65eed5bbba4d37d05d15b446_asset55-min.png',
        },
        {
            title: 'Record & transcribe customer calls',
            desc: "Invite Cycle's recorder to any Zoom, G Meet or MS Teams call to fetch transcripts & summaries",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" fill="none">
                    <path d="M13.6449 8.7533L16.2466 11.355M13.6449 8.7533L4.53878 17.8594C3.82033 18.5779 3.82033 19.7427 4.53878 20.4612C5.25723 21.1796 6.42207 21.1796 7.14052 20.4612L16.2466 11.355M13.6449 8.7533L16.86 5.53884C17.5785 4.82039 18.7433 4.82039 19.4618 5.53884C20.1802 6.25729 20.1802 7.42213 19.4618 8.14059L16.2466 11.355" stroke="#2B44E7" strokeWidth="2" />
                </svg>
            ),
            image: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ea353bef9241b80a0fdf27_feedback-img.png',
        },
        {
            title: 'Document your user research',
            desc: 'Co-write docs in real-time, add tables & toggles, and translate or rephrase with AI',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none">
                    <path d="M12.7819 4.44444V7.55556C12.7819 8.5374 13.541 9.33333 14.4774 9.33333H17.4445M9.96713 16.8889V15.5556M12.9342 16.8889V12.8889M6.69552 4H12.0797C12.5293 4 12.9606 4.1873 13.2786 4.5207L17.3718 8.81263C17.6898 9.14604 17.8684 9.59821 17.8684 10.0697V19.2222C17.8684 20.2041 17.1093 21 16.1729 21H6.69552C5.75913 21 5.00004 20.2041 5.00004 19.2222V5.77778C5.00004 4.79594 5.75913 4 6.69552 4Z" stroke="#2B44E7" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            image: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ea31e4ef3bc2ee9785b916_asset5.png',
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#f5f7ff] to-white text-black py-16 px-4 md:px-20 my-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">
                    The fastest feedback capture you’ll ever see
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`p-4 border rounded-xl w-full md:w-1/3 text-left transition ${activeTab === index
                                ? 'bg-gradient-to-b from-blue-100 to-white border-blue-300'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div>{tab.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                                    <p className="text-sm text-gray-600">{tab.desc}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Fade Transition Image */}
                <div className="mt-12">
                    <div
                        key={activeTab} // triggers re-render to animate
                        className="transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in"
                    >
                        <img
                            src={tabs[activeTab].image}
                            alt={tabs[activeTab].title}
                            className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackTabs;
