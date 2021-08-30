import React, {} from 'react';
import Image from 'next/image'
import Pipe from '../public/images/pipe-flange.jpg'
import Nav from '../components/nav'

const OptidriveEcoPump = (props) => {
    return (
        <>
            <Nav />
            {/*<div className='bg-fixed bg-red-500  w-screen h-screen'>
                <Image
                src={Pipe}    
                alt='Pipe flanges'
                layout='fill'
                />
            </div>*/}
            <div className=''>
                <div className='mt-24 md:mt-32 px-5 md:flex lg:container lg:mx-auto xl:mt-40 z-50'>
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
                
                <div className='w-screen bg-gray-400 h-2 z-40' />
                
                <div className='bg-transparent h-64 w-screen'/>
                <div className=''>
                    <div>
                        <div className='text-indigo-500 font-bold'>
                            IE2, IE3 & IE4 Motor Control
                        </div>
                        <p className='text-gray-500'>
                            <span className='font-bold'>Operation with:</span> AC Induction (IM) Motors, AC Permanent Magnet (PM) Motors, Brushless DC 
                            (BLDC) Motors & Synchronous Reluctance (SynRM) Motors
                        </p>
                        <img src='./images/hvac-eco-features.jpg' alt='features' />
                    </div>
                </div>
            </div>
        </>
    );
}
export default OptidriveEcoPump;