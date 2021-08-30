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
                        <img src='./images/optidrive-p2-42-52-left-(on).jpg' alt='optidrive e3' className='pt-5 md:flex md:items-center md:h-96 md:object-contain'/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OptidriveP2;