import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="bg-slate-200 py-8 md:py-12 px-4 text-center">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-10 md:mt-20">
                We Create{' '}
                <span className="bg-blue-300 px-1 py-1 rounded-xl h-fit">
                    Miracles
                </span>
                .
            </h1>


            <p className="mt-6 md:mt-12 text-lg sm:text-xl text-gray-500 w-full md:w-[60%] mx-auto">
                From a single contact form to multi-lingual, multi-currency,
                and far-stretched ecommerce solutions to a network of globally
                positioned CDNs, we have done it all. We are simply the best for
                your quandaries. Period.
            </p>


            <div className="mt-8 md:mt-12">
                <img
                    src="/src/assets/Hero.png"
                    alt="Animated Visual"
                    className="h-auto w-full max-w-[900px] mx-auto transform transition-transform duration-300 hover:scale-105 mt-8 md:mt-24"
                />
            </div>
        </div>
    );
};

export default Hero;