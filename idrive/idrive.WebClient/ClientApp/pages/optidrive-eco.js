import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'
import Link from 'next/link'

const OptidriveEco = (props) => {
    return (
        <>
            <Nav />
            <div className='mt-24 md:mt-32 px-5 md:flex lg:container lg:mx-auto xl:mt-40 z-50 lg:container lg:mx-auto'>
                <div className='md:w-1/2'>
                    <img src='./images/optidrive-eco-pump.png' alt='optidrive p2 logo' />
                    <div>
                        <h1 className='text-indigo-500 pt-5 font-bold'>
                            The New Variable Frequency Drive for Fan & Pump Applications
                        </h1>
                        <div className='items-center mt-12 text-center md:text-left md:flex md:items-start '>
                            <div className='md:w-1/2 md:px-2 pt-3 md:pt-0'>
                                <ul className='list-disc list-inner text-sm text-gray-500'>
                                    <li>Eco Vector Motor Control</li>
                                    <li>Energy Optimised Design</li>
                                    <li>Internal EMC filter</li>
                                    <li>Low noise operation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 mb-12 md:mt-0 md:w-1/2 text-center md:text-xs md:text-left'>
                    <div>
                        <h1 className='text-indigo-500 font-bold '>
                            Fan & Pump Drive
                        </h1>
                        <ul className='text-gray-500 pt-5'>
                            <li>0.75 – 250kW  /  1 – 350HP</li>
                            <li>200 – 600V Single & 3 Phase Input</li>
                        </ul>
                        <img src='./images/optidrive eco group 2d 3d 4n 5n (front).jpg
                        ' alt='optidrive e3' className='pt-5 md:flex md:items-center md:h-auto md:object-contain'/>
                    </div>
                </div>
            </div>

            <div className='w-screen bg-gray-400 h-2 z-40 lg:container lg:mx-auto' />

            <div className='w-screen h-96 bg-fixed bg-left bg-top md:bg-center'
                 style={{backgroundImage: "url( "+ "/images/0012.jpg" +" )"}}>
            </div>

            <div className='px-5 text-center md:text-left mt-12 mb-12 lg:flex lg:container lg:mx-auto'>
                <div className=' lg:w-1/2 md:p-3'>
                    <div className='text-indigo-500 font-bold pb-12'>
                        IE2, IE3 & IE4 Motor Control
                    </div>

                    <p className='text-gray-500 pb-6'>
                        <span className='font-bold'>Operation with:</span> AC Induction (IM) Motors, AC Permanent Magnet (PM) Motors, Brushless DC
                        (BLDC) Motors & Synchronous Reluctance (SynRM) Motors
                    </p>

                    <img src='./images/hvac-eco-features.jpg' alt='features' className='mx-auto' />

                    <p className='text-gray-500 pt-6 pb-6'>
                        <span className='font-bold'>Optidrive Eco Variable Frequency Drives</span> provide efficient, reliable and quiet control of motors for HVAC and pumping applications. Designed to provide maximum operating efficiency whilst minimising environmental impact, Optidrive Eco offers unrivalled performance and flexibility, whilst meeting the key standards and requirements of demanding applications.
                    </p>

                    <div className='md:flex text-gray-500 flex flex-col md:flex-row md:justify-evenly lg:w-full lg:text-left'>
                        <ul className='list-disc list-inside pb-6 block px-0'>
                            <li>Accurate speed control</li>
                            <li>Energy optimisation function</li>
                            <li>Resonance avoidance</li>
                            <li>Sleep & wake functions</li>
                            <li>Advanced on-board features</li>
                            <li>Intelligent maintenance interval</li>
                        </ul>

                        <ul className='list-disc list-inside block'>
                            <li>IP55 & IP66 enclosure options</li>
                            <li>OLED display standard on all models</li>
                            <li>Simple parameter structure</li>
                            <li>Practical design</li>
                            <li>Integrated PID controller</li>
                            <li>Through-hole mounting kit available</li>
                        </ul>
                    </div>
                </div>

                <div className='pt-12 lg:w-1/2 md:p-3 lg:pl-32 text-gray-500'>
                    <img src='./images/hvac-building-services.png' alt='Pump control' className='w-full lg:w-96 '/>
                    <Link href='/'>
                        <p className='text-indigo-500 text-xl font-bold pt-6 cursor-pointer'>
                            HVAC Building Services
                        </p>
                    </Link>
                    <ul className='list-disc inside-list pt-12 lg:text-left'>
                        <li>Optiflow multiple pump control</li>
                        <li>Blockage detect/clear</li>
                        <li>Pump prime mode</li>
                        <li>Pump staging cascade control</li>
                        <li>Drive controlled bypass</li>
                        <li>Flexible pump station control with no PLCs or pump control units</li>
                    </ul>
                    <Link href='/'>
                        <div className='btn btn-primary cursor-pointer'>[Read More]</div>
                    </Link>
                </div>
            </div>

            <div className='w-auto bg-black h-px md:mx-32 lg:container lg:mx-auto ' />

            <div className='text-gray-500 lg:container lg:mx-auto pt-12 '>
                <div className='text-center'>
                    <div className='font-bold text-indigo-500 text-2xl'>
                        Eco Variable Frequency Drive Features
                    </div>
                    <div className='flex justify-center'>
                        <p className='w-1/2'>
                            A range of compact AC Variable Frequency Drives dedicated to pumping and HVAC systems.
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-gray-500 px-5 pt-12 pb-12 text-center md:text-left md:px-8 flex flex-col md:flex-row lg:container lg:mx-auto'>
                <div className='md:w-1/3'>
                    <div className='md:flex md:flex-row justify-evenly'>
                        <div className='flex flex-col items-center justify-center md:w-1/2 p-2'>
                            <Link className='' href='/'>
                                <a>
                                    <div className='text-indigo-500 font-bold pb-6'>Building Automation</div>
                                    <img src='/images/building-automation-u3419-fr.jpg' alt='building automation logo' className='mx-auto' />
                                </a>
                            </Link>
                            <p className='pt-6'>Comfortable safe & sustainable environments</p>
                        </div>
                        <div className='flex flex-col items-center md:w-1/2 p-2'>
                            <div className='text-indigo-500 font-bold pt-6 md:pt-0 pb-6'>BACnet Interface</div>
                            <img src='/images/bacnet-logo.jpg' alt='optiflow logo' />
                        </div>
                    </div >
                    <div className='pt-6' >
                        <div className='text-indigo-500 font-bold'>
                            IP55 Enclosures
                        </div>
                        <p className='pt-3'>
                            Dust-tight and ready to washdown.
                        </p>
                    </div>
                    <div className='pt-6' >
                        <div className='text-indigo-500 font-bold'>
                            In-built PID Controller
                        </div>
                        <p className='pt-3'>
                            Accurately maintain pressure or temperature setpoint.
                        </p>
                    </div>
                    <div className='pt-6' >
                        <div className='text-indigo-500 font-bold'>
                            IE2, IE3 & IE4 Motor Control
                        </div>
                        <ul className='list-disc inside-list pt-3'>
                            <li>Standard AC Induction Motors (IM)</li>
                            <li>AC Permanent Magnet (PM) Motors</li>
                            <li>Brushless DC (BLDC) Motors</li>
                            <li>Synchronous Reluctance (SynRM) Motors</li>
                        </ul>
                        <p>
                            nergy efficient operation with each motor type requires no additional options, only 
                            parameter selection of the correct motor type, basic motor parameter data information and an
                            automatic tuning. This allows the latest generation of high efficiency motors to be 
                            utilised, providing further energy saving benefits.
                        </p>
                        <div className='text-indigo-500 font-bold'>
                            HVAC Building Services
                        </div>
                        <ul className='list-disc inside-list pt-3'>
                            <li>Controlling Your HVAC System</li>
                            <li>Multiple Fan Operation</li>
                            <li>Building Automation</li>
                            <li>Optimising Efficiency</li>
                            <li>Hand / Auto</li>
                            <li>Belt Break Detection</li>
                            <li>Noise Reduction</li>
                            <li>Resonance Avoidance</li>
                            <li>Drive Controlled Bypass</li>
                        </ul>
                        <Link href='/'>
                            <button className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mt-6'>
                                HVAC Drive Features
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='w-full mt-12 mb-12 md:w-2/3'>
                    <img src='./images/eco-features.jpg' alt='eco features' />
                </div>
            </div>

            <div className='bg-gray-600'>
                <div className='pt-12 pb-12 mt-12 mb-24 px-6 text-center  md:flex md:pt-2 md:pb-2 md:text-left md:relative md:h-48 lg:container lg:mx-auto'>
                    <img src='./images/intuitive-keypad-controla6e4.png' alt='thumb image' className='md:w-80 h-auto mx-auto md:absolute md:-top-12' />
                    <div className='text-white md:absolute md:right-3 xl:right-96'>
                        <div className='font-bold'>OLED Display</div>
                        <p>
                            Installed as standard on all models
                        </p>
                        <ul>
                            <li>Clear multi-line text display</li>
                            <li>Operates from -10°C to 50°C</li>
                            <li>Wide viewing angle, effective in dark and light conditions</li>
                            <li>Customisable display</li>
                            <li>Multi-language selection</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default OptidriveEco;