import React, {} from 'react';
import Nav from '../components/nav'
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";

const OptidriveE3 = (props) => {
    return (
        <>
            <Nav />
            <div className='mt-24 md:mt-32 px-5 md:flex lg:container lg:mx-auto xl:mt-40'>
                <div className='md:w-1/2'>
                    <img src='./images/optidrive e3ac95.png' alt='optidrive e3 logo' />
                    <div>
                        <h1 className='text-indigo-500 pt-5 font-bold'>
                            Compact, Reliable and Easy to Use
                        </h1>
                        <p className='text-gray-500 pt-5'>
                            Simply power on and Optidrive E3 is up and running, providing precise motor control and 
                            energy savings using the factory settings
                        </p>
                        <div className='items-center mt-12 text-center md:flex md:justify-evenly md:items-start '>
                            <div className='md:w-1/3 md:px-2 '>
                                <h1 className='text-indigo-500 font-bold'>
                                    E3 IP20
                                </h1>
                                <ul className='text-sm text-gray-500'>
                                    <li>Up to 22kw</li>
                                    <li>Easy to use</li>
                                    <li>Compact and robust</li>
                                </ul>
                            </div>
                            <div className='md:w-1/3 md:px-2 pt-6 md:pt-0'>
                                <h1 className='text-indigo-500 font-bold'>
                                    E3 IP66
                                </h1>
                                <ul className='text-sm text-gray-500'>
                                    <li>Up to 7.5kw</li>
                                    <li>Dust-tight</li>
                                    <li>Washdown ready</li>
                                </ul>
                            </div>
                            <div className='md:w-1/3 md:px-2 pt-6 md:pt-0'>
                                <h1 className='text-indigo-500 font-bold'>
                                    E3 Single Phase
                                </h1>
                                <ul className='text-sm text-gray-500'>
                                    <li>Up to 1.1kw</li>
                                    <li>Special boost phase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-0 md:w-1/2 text-center md:text-xs md:text-right'>
                    <div>
                        <h1 className='text-indigo-500 font-bold '>
                            General Purpose AC Drive
                        </h1>
                        <ul className='text-gray-500 '>
                            <li>0.37 – 22kW  /  0.5 – 30 HP</li>
                            <li>110 – 480V Single & 3 Phase Input</li>
                        </ul>
                        <img src='./images/optidrive-e3-group-3y 2y-1y-(left above inline).jpg' alt='optidrive e3' className='pt-5 md:flex md:items-center md:h-96 md:object-contain'/>
                    </div>
                </div>
            </div>
            
            <div className='bg-indigo-500 '>
                <div className='flex flex-wrap pt-5 pb-5 px-5 mt-12 lg:container lg:mx-auto'>
                    <div className='md:flex md:flex-wrap md:w-1/2 md:pt-0 md:p-5 '>
                        <div className='flex items-start '>
                            <img src='./images/motorf804.png' alt='motor image' className='object-contain mr-5 md:w-16 '/>
                            <div className='text-white '>
                                <h1 className='font-bold'>
                                    Sensorless Vector Control for all Motor Types
                                </h1>
                                <ul>
                                    <li>
                                        Precise and reliable control for IE2, IE3 & IE4 motors.
                                    </li>
                                    <li>
                                        Induction Motors (IM)
                                    </li>
                                    <li>
                                        Permanent Magnet Motors (PM)
                                    </li>
                                    <li>
                                        Brushless DC Motors (BLDC)
                                    </li>
                                    <li>
                                        Synchronous Reluctance Motors (SynRM)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='pt-9 md:flex md:flex-wrap md:w-1/2 md:pt-0 md:p-5 '>
                        <div className='flex items-start '>
                            <img src='./images/simple-commissioning2d21.png' alt='motor image' className='object-contain mr-5 order-2 md:order-1 md:w-20 lg:w-16'/>
                            <div className='text-white order-1 md:order-2 text-justify md:text-left'>
                                <h1 className='font-bold'>
                                    Simple Commissioning
                                </h1>
                                <p>
                                    14 parameter basic setup. Default settings suitable for most applications. Contactor
                                    style connection for simple wiring.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-9 md:flex md:flex-wrap md:w-1/2 md:pt-0 md:p-5 '>
                        <div className='flex items-start '>
                            <img src='./images/intuitive-keypad-controla6e4.png' alt='keypad image' className='object-contain mr-5 md:w-16'/>
                            <div className='text-white '>
                                <h1 className='font-bold'>
                                    Intuitive Keypad Control
                                </h1>
                                <p>
                                    Precise digital control at the touch of a button.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-9 md:flex md:flex-wrap md:w-1/2 md:pt-0 md:p-5 '>
                        <div className='flex items-start'>
                            <img src='./images/application-macros6400.png' alt='keypad image' className='object-contain mr-5 order-2 md:order-1 md:w-20 lg:w-16'/>
                            <div className='text-white order-1 md:order-2 text-justify md:text-left'>
                                <h1 className='font-bold'>
                                    Application Macros
                                </h1>
                                <p>
                                    Switch between Industrial, Pump & Fan modes to optimise Optidrive E3 for your
                                    application.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-9 md:flex md:flex-wrap md:w-1/2 md:pt-0 md:p-5 '>
                        <div className='flex items-start'>
                            <img src='./images/cat-c1-emc-filtere5de.png' alt='keypad image' className='object-contain mr-5 md:w-16' />
                            <div className='text-white '>
                                <h1 className='font-bold'>
                                    Internal Category C1 EMC Filter
                                </h1>
                                <p>
                                    An internal filter in every Optidrive E3 saves cost and time for installation.
                                </p>
                                <p>
                                    Cat C1 according to EN61800-3:2004
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bg-gray-200'>
                <div className='lg:container lg:mx-auto pt-12 pb-12'>
                    <div className='font-bold text-2xl text-indigo-500 h1 text-center'>
                        Optidrive E3 Features
                    </div>
                    <div className='flex justify-center w-full text-center pt-5 text-gray-500'>
                        <p className='w-full px-4 md:w-1/2 md:px-0'>
                            Innovative technology, reliability, robustness and ease of use in a range of compact IP20 &
                            IP66 enclosures.
                        </p>
                    </div>
                    <div className='flex flex-col text-center md:text-left md:flex-row md:justify-evenly justify-center mt-12 px-7'>
                        <div>
                            <div className='h1 font-bold text-indigo-500'>
                                Industrial Mode
                            </div>
                            <p className='text-gray-400  md:w-40 lg:w-64'>
                                Industrial mode optimises Optidrive E3 for load characteristics of typical industrial 
                                applications.
                            </p>
                        </div>
                        <div>
                            <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                                Pump Mode
                            </div>
                            <p className='text-gray-400  md:w-40 lg:w-64'>
                                Pump mode makes energy efficient pump control easier than ever.
                            </p>
                        </div>
                        <div>
                            <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                                Fan Mode
                            </div>
                            <p className='text-gray-400  md:w-40 lg:w-64'>
                                Fan mode (inc. fire operation) makes air handling a breeze, ideal for simple HVAC 
                                systems.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center md:text-left md:flex-row md:justify-evenly mt-12'>
                        <div>
                            <div className='h1 font-bold text-indigo-500'>
                                Applications include:
                            </div>
                            <ul className='text-gray-400  md:w-40 lg:w-64'>
                                <li>Conveyors</li>
                                <li>Mixers</li>
                                <li>Treadmills</li>
                            </ul>
                        </div>
                        <div>
                            <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                                Applications include:
                            </div>
                            <ul className='text-gray-400  md:w-40 lg:w-64'>
                                <li>Dosing Pumps</li>
                                <li>Borehole Pumps</li>
                                <li>Transfer Pumps</li>
                                <li>Swimming Pools</li>
                                <li>Spas</li>
                                <li>Fountains</li>
                            </ul>
                        </div>
                        <div>
                            <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                                Applications include:
                            </div>
                            <ul className='text-gray-400  md:w-40 lg:w-64'>
                                <li>Air Handling Units</li>
                                <li>Ventilation Fans</li>
                                <li>Circulating Fans</li>
                                <li>Air Curtains</li>
                                <li>Kitchen Extract</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mt-12 mb-12 md:px-24 lg:px-40 lg:container lg:mx-auto'>
                <div>
                    <div className='text-indigo-500 text-2xl font-bold text-center md:text-left px-8'>
                        IP20
                    </div>
                    <p className='text-gray-500 text-center md:text-left px-8 pt-3 pb-4 md:w-1/2'>
                        Compact, robust and reliable general purpose drive for panel mounting
                    </p>
                </div>
                <div className='md:flex md:justify-end'>
                    <img src='./images/optidrive-e3-ip20-features.jpg' alt='Optidrive e3 ip20 features' className=''/>
                </div>
            </div>
            
            <div className='w-auto bg-black h-px md:mx-32 lg:container lg:mx-auto ' />

            <div className='mt-12 mb-12 md:px-24 lg:px-40 lg:container lg:mx-auto'>
                <div>
                    <div className='text-indigo-500 text-2xl font-bold text-center md:text-left px-8'>
                        IP66
                    </div>
                    <p className='text-gray-500 text-center md:text-left px-8 pt-3 pb-4 md:w-1/2'>
                        Enclosed drives for direct machine mounting, dust-tight and ready for washdown duty
                    </p>
                </div>
                <div className='md:flex md:justify-end'>
                    <img src='./images/optidrive-e3-ip66-features.jpg' alt='Optidrive e3 ip66 features' className=''/>
                </div>
            </div>

            <div className='w-auto bg-black h-px md:mx-32 lg:container lg:mx-auto ' />
            
            <div className='lg:container lg:mx-auto mt-12 mb-12'>
                <div className='flex flex-col md:flex-row'>
                    <div className='px-7 mt-12 mb-12 md:w-1/2 '>
                        <div className=''>
                            <div className='text-indigo-500 font-bold'>
                                Dust-Tight Design
                            </div>
                            <p>
                                Install directly on your processing equipment and be sure of protection from dust and 
                                contaminants.
                            </p>
                        </div>
                        <div className='pt-6'>
                            <div className='text-indigo-500 font-bold'>
                                Optidrive E3 IP66 Switched
                            </div>
                            <p>
                                Simply wire up the drive, turn the inbuilt potentiometer and the motor will start 
                                running – allowing immediate energy savings.
                            </p>
                            <p>
                                Saving energy cannot be easier than this!
                            </p>
                        </div>
                        <div className='pt-6'>
                            <div className='text-indigo-500 font-bold'>
                                Washdown Ready
                            </div>
                            <p>
                                With a sealed ABS enclosure and corrosion resistant heatsink, the Optidrive E3 IP66 is 
                                ideal for high-pressure washdown applications.
                            </p>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <div className='flex justify-end w-screen relative md:w-full'>
                            <div className='absolute top-8 w-7/12 left-0 xl:left-40 text-right w-56 '>Local Speed Potentiometer</div>
                            <div className='absolute top-16 w-7/12 left-0 xl:left-40 text-right pt-3 w-56 '>Run Reverse/ Off/ Run Forward Switch</div>
                            <div className='absolute top-32 w-7/12 left-0 xl:left-40 text-right pt-3 w-56 '>Lockabe Mains Disconnect/ Isolator</div>
                            <img src='./images/ip66-switched.png' alt='ip66 switched' />
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default OptidriveE3;