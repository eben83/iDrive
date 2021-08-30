import React, {} from 'react';
import Nav from '../components/nav'

const OptidriveP2 = (props) => {
    return (
        <>
            <Nav />
            <div className='mt-24 md:mt-32 px-5 md:flex lg:container lg:mx-auto xl:mt-40'>
                <div className='md:w-1/2'>
                    <img src='./images/optidrive-p2.png' alt='optidrive p2 logo' />
                    <div>
                        <h1 className='text-indigo-500 pt-5 font-bold'>
                            High Performance and Easy to Use
                        </h1>
                        <p className='text-gray-500 pt-5'>
                            The perfect combination of high performance together with ease of use allows even the most 
                            demanding applications to be tackled easily by the P2 variable frequency drive.
                        </p>
                        <div className='mt-12'>
                            <img src='./images/p2-features.jpg' alt='p2 features' />
                        </div>
                        <div className='items-center mt-12 text-center md:flex md:justify-evenly md:items-start '>
                            <div className='md:w-1/2 md:px-2 pt-6 md:pt-0'>
                                
                                <ul className='text-sm text-gray-500'>
                                    <li>Simple PLC functionality</li>
                                    <li>Built-in EMC filter</li>
                                    <li>Low ambient operation (-10°C)</li>
                                    <li>Dedicated hoist mode</li>
                                </ul>
                            </div>
                            <div className='md:w-1/2 md:px-2 pt-6 md:pt-0'>
                                <h1 className='text-indigo-500 font-bold'>
                                    150% overload for 60 seconds
                                </h1>
                                <h1 className='text-indigo-500 font-bold'>
                                    200% overload for 4 seconds
                                </h1>
                                <ul className='text-sm text-gray-500'>
                                    <li>Industrial heavy duty rating for every model</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-0 md:w-1/2 text-center md:text-xs md:text-left'>
                    <div>
                        <h1 className='text-indigo-500 font-bold '>
                            High Performance AC Drive
                        </h1>
                        <ul className='text-gray-500 '>
                            <li>0.75 – 250kW  /  1 – 350HP</li>
                            <li>200 – 600V Single & 3 Phase Input</li>
                        </ul>
                        <img src='./images/optidrive-p2-42-52-left-(on).jpg' alt='optidrive e3' className='pt-5 md:flex md:items-center md:h-auto md:object-contain'/>
                    </div>
                </div>
            </div>

            <div className='bg-indigo-500 '>
                <div className='pt-5 pb-5 px-5 mt-12 lg:container lg:mx-auto'>
                    <div className='md:flex md:flex-wrap md:pt-0 md:p-5 '>
                        <div className='text-center text-white'>
                            <div className='font-bold text-2xl'>Advanced Motor Control</div>
                            <p className='pt-6'>
                                Invertek has developed advanced mathematical algorithms and uses the very latest 
                                hardware technology to ensure Optidrive P2 provides exceptional motor control with a 
                                simple interface to help users easily apply the benefits to their applications.
                            </p>
                        </div>
                    </div>
                    <div className='pt-9'>
                        <div className='text-white w-full flex flex-wrap md:justify-evenly'>
                            <div>
                                <h1 className='font-bold'>
                                    Control Modes
                                </h1>
                                <ul className='list-disc list-inside'>
                                    <li>V/F Voltage Vector</li>
                                    <li>Energy Optimised V/F</li>
                                    <li>Sensorless Vector Speed Control</li>
                                    <li>Sensorless Vector Torque Control</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='list-disc list-inside'>
                                    <li>Synchronous Reluctance Motor</li>
                                    <li>Control</li>
                                    <li>Brushless DC Motor Control</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='list-disc list-inside'>
                                    <li>Closed Loop (Encoder) Speed Control</li>
                                    <li>Closed Loop (Encoder) Torque Control</li>
                                    <li>Open Loop PM Vector Control</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='text-center mt-12 mb-12 lg:container lg:mx-auto px-7'>
                <div className='text-2xl text-indigo-500'>
                    Powerful, Versatile and Easy to Use
                </div>
                <p className='text-gray-500 mt-6'>
                    Designed for fast installation and commissioning, P2 variable frequency drive provides the most
                    cost effective solution for industry.
                </p>
                <p className='text-gray-500 pt-6'>
                    All Optidrive P2 units provide 150% overload for 60 seconds as standard, ensuring each drive is 
                    suitable for Heavy Duty applications, whilst the IP55 enclosed versions ensure the drive is tough 
                    enough to survive in industrial environments.
                </p>
                <p className='text-gray-500 pt-6'>
                    Extensive I/O and communications interface capabilities ensure the drive can be integrated quickly 
                    and efficiently into a wide variety of control systems with the minimum commissioning time, ensuring
                    rapid start up. Invertek's simple parameter structure, and carefully selected factory parameter 
                    settings ensure that commissioning time is kept to a minimum.
                </p>
            </div>

            <div className='w-auto bg-black h-px md:mx-32 lg:container lg:mx-auto ' />

            <div className='lg:container lg:mx-auto pt-12 pb-12 px-4 w-screen'>
                <div className='font-bold text-2xl text-indigo-500 h1 text-center'>
                    P2 Variable Frequency Drive Features
                </div>
                <div className='flex justify-center w-full text-center pt-5 text-gray-500'>
                    <p className='w-full md:w-1/2 md:px-0'>
                        High performance, variable frequency, excellent usability and flexible to meet the needs
                        of your application
                    </p>
                </div>
                <div className='flex flex-col text-center md:text-left md:flex-row md:justify-evenly md:px-6 lg:px-0 justify-center mt-12'>
                    <div className='text-center md:block md:w-1/4'>
                        <div className='h1 font-bold text-indigo-500'>
                            Sensorless Vector Control
                        </div>
                        <p className='text-gray-400 md:w-40 lg:w-64'>
                            Up to 200% torque from zero speed ensures reliable starting and accurate speed control
                            under all load conditions.
                        </p>
                    </div>
                    <div className='text-center md:block md:w-1/4'>
                        <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                            PM Motor Control
                        </div>
                        <p className='text-gray-400 md:w-40 lg:w-64'>
                            Future proof. Allows upgrade to the latest generation of high efficiency permanent
                            magnet motors.
                        </p>
                    </div>
                    <div className='text-center md:block md:w-1/4'>
                        <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                            Built-in EMC Filter
                        </div>
                        <p className='text-gray-400 md:w-40 lg:w-64'>
                            An internal filter in every Optidrive P2 saves cost and time for installation.
                        </p>
                    </div>
                    <div className='text-center md:block md:w-1/4'>
                        <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                            Integral Brake Transistor
                        </div>
                        <p className='text-gray-400 md:w-40 lg:w-64'>
                            Saves space, cost and time for installation.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className=''>
                <img src='./images/eco-features.jpg' alt='p3 features' />
                <div className='flex justify-center px-4 flex-wrap text-center'>
                    <div className='mt-6 mb-6 w-1/2'>
                        <div className='text-indigo-500 text-3xl font-bold '>IP20</div>
                        <p className='text-gray-500'>
                            Sizes 2-3; up to 11kW
                        </p>
                    </div>
                    <div className='mt-6 mb-6 w-1/2'>
                        <div className='text-indigo-500 text-3xl font-bold '>IP55</div>
                        <p className='text-gray-500'>
                            Size 8; up to 250kW
                        </p>
                    </div>
                    <div className='mt-6 mb-6 w-1/2'>
                        <div className='text-indigo-500 text-3xl font-bold '>IP55</div>
                        <p className='text-gray-500'>
                            Sizes 4-7; up to 160kW
                        </p>
                    </div>
                    <div className='mt-6 mb-6 w-1/2'>
                        <div className='text-indigo-500 text-3xl font-bold '>IP66</div>
                        <p className='text-gray-500'>
                            Sizes 2-3; up to 7.5kW;
                        </p>
                        <p className='text-gray-500'>
                            switched or non-switched
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OptidriveP2;