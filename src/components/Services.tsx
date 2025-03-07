import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="bg-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                    <img
                        src="/src/assets/service-1.png"
                        alt="Web Apps"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Modern, Interactive and Intimidating Web Apps
                    </h2>
                    <p className="text-lg text-gray-600">
                        We do not create websites. We create 'web apps', we create 'web experiences'. An experience so beautiful it leaves your visitors / users spellbound.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Cutting-Edge Mobile Applications
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our mobile apps are designed to deliver seamless performance and an intuitive user experience. We build apps that users love and rely on every day.
                    </p>
                </div>

                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <img
                        src="/src/assets/service-2.png" 
                        alt="Mobile Apps"
                        className="w-full h-auto "
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;