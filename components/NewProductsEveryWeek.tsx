import React from 'react';
import { Button } from './ui/button';

const changelog = [
    {
        date: 'October 3, 2024',
        text: 'New Feedback UX & changelog in free access ✨'
    },
    {
        date: 'September 24, 2024',
        text: 'Multi-dashboard, AI improvements & automatic customer cleaning 📊'
    },
    {
        date: 'September 17, 2024',
        text: 'Monthly voice-of-customer reports 🧾'
    },
    {
        date: 'Aug 1, 2024',
        text: 'Salesforce integration & AI improvements 🌸'
    }
];

const NewProductsEveryWeek = () => {
    return (
        <section className="relative overflow-hidden  bg-gradient-to-br from-white via-blue-50 to-white py-40 px-4 text-center my-20">
            {/* Background blur bubbles (optional) */}
            <div className="absolute top-10 left-50  flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65eb049f2d7c893a29e42faf_bubble-slack-xl.png" alt="Slack" className="w-36 h-36" />
            </div>
            <div className="absolute bottom-0 left-1/3 flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65eb05589d1e7b5cb3620f4e_bubble-doc-xl.png" alt="Doc" className="w-35 h-35" />
            </div>
            <div className="absolute top-1/3 right-40  flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65eb05b49b4e09da8ede209d_bubble-pdf.png" alt="PDF" className="w-36 h-36" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-semibold text-black mb-2">We ship. Weirdly fast.</h2>
            <p className="text-gray-500 text-xl mb-15">New product updates every week</p>

            {/* Timeline Box */}
            <div className=" bg-gradient-to-br from-white via-blue-50 to-white  max-w-md mx-auto rounded-2xl shadow-lg border border-gray-100 p-6 text-left relative z-10">
                <div className="border-l-4 border-gray-300 space-y-6 pl-4">
                    {changelog.map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-[38.5px] top-0 w-10 h-10 rounded-full flex items-center justify-center">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="23.5" stroke="#EDEDED"></circle>
                                    <path d="M12 24L20 24" stroke="#2B44E7" strokeLinecap="round"></path>
                                    <path d="M28 24L36 24" stroke="#2B44E7" strokeLinecap="round"></path>
                                    <circle cx="24" cy="24" r="4" fill="#2B44E7" stroke="#2B44E7"></circle>
                                </svg>
                            </div>
                            <p className="text-sm pl-5 text-gray-500">{item.date}</p>
                            <p className="text-xl pl-5 text-black font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-6">
                    <Button className="bg-black text-white text-sm px-4 py-2 rounded-xl hover:opacity-90 transition">
                        Read full changelog
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NewProductsEveryWeek;
