import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from "../components/scrollToTop"
import Link from 'next/link'

const Elevators = (props) => {
    return (
        <>
            <Nav />
            <div className='w-screen h-screen bg-fixed bg-left bg-top md:bg-center bg-no-repeat bg-cover'
                 style={{backgroundImage: "url( "+ "/images/common-misconceptions-blog.jpg" +" )"}}>
            </div>

            <div className='-mt-32'>
                <div className='bg-yellow-600 text-white px-6 py-12'>
                    <div className='text-2xl'>
                        Elevators
                    </div>
                    <p>
                        Smooth control for geared & gearless systems
                    </p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row lg:container lg:mx-auto'>
                <div className='px-6 text-gray-500 mt-12 mb-12 md:w-1/2'>
                    <p className=''>
                        The Optidrive Elevator Variable Frequency Drive is a compact, easy to use variable speed drive
                        from Invertek Drives. Dedicated to this sector, Optidrive Elevator is specifically designed to
                        provide smooth, reliable carriage control in all elevator applications whether geared or gearless.
                    </p>
                    <ul className='list-disc pt-6'>
                        <li>Geared & gearless lift applications</li>
                    </ul>
                    <img src='./images/optidrive elevator2.png' alt='optidrive eco' />
                    <div className='pt-5 text-xl lg:px-12'>
                        Dependable and precise control for elevator systems.
                    </div>
                    <ul className='list-disc pt-6'>
                        <li>Modbus RTU and CANopen on board as standard</li>
                        <li>Induction & PM Motor Control</li>
                        <li>200% Torque from Zero Speed</li>
                        <li>Rescue Mode Operation</li>
                        <li>Elevator Specific Parameter Set</li>
                    </ul>
                    
                    <Link href='/'>
                        <div className='text-indigo-500 font-bold text-xl pt-6 cursor-pointer'>
                            Compact Elevator Drive
                        </div>
                    </Link>
                </div>

                <div className='px-6 text-gray-500 mb-12 md:w-1/2  '>
                    <div className='w-full h-full md:flex md:justify-center md:items-center'>
                        <img src='./images/plp-24426-042.jpg' alt='eoc group' className='object-contain h-full w-full' />
                    </div>
                </div>
            </div>

            <Footer />
            <ScrollToTop />
        </>
    );
}
export default Elevators;