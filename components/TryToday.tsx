import React from 'react';

const TryToday = () => {
    return (
        <section className="bg-gradient-to-br from-white via-[#f6faff] to-[#eef6fb] rounded-3xl max-w-[1300px] mx-auto px-6 py-34 text-center my-20">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                {/* Logo SVG */}
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="cycle"
                        d="M28 13.3448C27.9979 13.563 27.9825 13.7699 27.8599 14.0993C27.7136 14.5132 27.4881 14.892 27.1966 15.2153C26.9051 15.5385 26.5538 15.799 26.1624 15.9801C25.771 16.1624 25.3486 16.2632 24.9191 16.2756C24.4896 16.288 24.0621 16.2138 23.6614 16.0553C23.2607 15.8968 22.895 15.6579 22.585 15.3532C22.275 15.0485 22.0288 14.683 21.8588 14.2795C21.7713 14.0705 21.7146 13.8327 21.6796 13.5898C21.4664 9.53991 18.1135 6.32082 14.0077 6.32082C9.90193 6.32082 6.32454 9.75918 6.32454 13.9995C6.32454 18.2398 9.7639 21.6771 14.0067 21.6771C17.72 21.6771 20.8174 19.0448 21.5333 15.5457C21.8258 15.9493 22.1699 16.3137 22.5819 16.5937C22.8271 16.7594 23.0928 16.9221 23.3019 17.0055C23.8262 17.2124 24.3855 17.3102 24.9469 17.2937C25.5083 17.2773 26.0614 17.1455 26.5723 16.9077C26.6671 16.8634 26.7753 16.7986 26.8906 16.7203C27.2594 16.4712 27.6003 16.1768 27.8939 15.8432C26.9916 22.7035 21.1182 28 14.0067 28C6.27098 27.999 0 21.7307 0 13.9995C0 6.26832 6.27098 0 14.0077 0C21.7445 0 27.658 5.91728 28 13.3448Z"
                        fill="black"
                    />
                </svg>

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-semibold text-black">Try Cycle today</h2>

                {/* Button */}
                <button className="bg-black text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:opacity-90 transition">
                    Book demo
                </button>
            </div>

        </section>
    );
};

export default TryToday;
