import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from "../components/scrollToTop"
import Link from 'next/link'

const MarineEquipmentControl = (props) => {
    return (
        <>
            <Nav />
            <div className='w-screen h-screen bg-fixed bg-left bg-top md:bg-center bg-no-repeat bg-cover'
                 style={{backgroundImage: "url( "+ "/images/dixon-375846-f-wp-content-uploads-2018-02-1028195_339ab1ff7178d4f-1200x800.jpg" +" )"}}>
            </div>

            <div className='-mt-32 relative'>
                <div className='bg-blue-600 text-white px-6 py-12'>
                    <div className='text-2xl '>
                        <p>
                            Marine Equipment Control
                        </p>
                    </div>
                </div>
                <div className='h-40 w-80 absolute top-0 right-32 flex justify-center items-center cursor-pointer invisible md:visible'>
                    <div className='w-auto h-auto text-3xl -mt-32'>
                        <img src='/images/various combined.png' alt='various combined' />
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-center px-6 mt-12 mb-12 md:flex-row lg:container lg:mx-auto'>
                <div className='flex flex-col text-gray-500 md:w-1/2 md:p-6'>
                    <h1 className='uppercase text-indigo-500 font-bold text-2xl'>
                        optidrive
                    </h1>
                    <div className='font-bold text-indigo-500 pt-6'>
                        Save Energy, Save Fuel, Cut CO2 Emissions
                    </div>
                    <p className='pt-6'>
                        Energy efficiency is the single most important factor in reducing CO2 emissions. Optidrive 
                        variable speed drives from Invertek Drives can cut the energy consumption of fans, pumps and 
                        compressors found on marine vessels by as much as 60%.
                    </p>
                </div>
                <div className=' md:w-1/2 md:p-6'>
                    <ul className='list-disc pt-6 text-gray-500'>
                        <li>Cranes</li>
                        <li>Winches</li>
                        <li>Bow Thrusters</li>
                        <li>Ventilation</li>
                        <li>Pumps</li>
                        <li>Compressors</li>
                    </ul>
                </div>
            </div>
            
            <div className='flex flex-col px-6 md:flex-row mb-12 lg:container lg:mx-auto'>
                <div className='md:w-1/2 md:px-5'>
                    <Link href='/'>
                        <h1 className='text-indigo-500 text-3xl cursor-pointer'>
                            Variable Speed Drives for Marine Applications
                        </h1>
                    </Link>
                    <p className='text-gray-500'>
                        Optidrive delivers reliability, high performance and efficiency in a compact, easy to use
                        unit made for marine environments. Optidrive includes IP55 and IP66 enclosure ratings,
                        conformal coating and is designed to operate trouble-free in the 50°C temperatures
                        frequently found in environments such as vessel engine rooms.
                    </p>
                    
                    <div className='text-blue-600 font-bold pt-6'>
                        Global Marine Accreditation
                    </div>
                    <p className='text-gray-500'>
                        DNV accreditation for total peace of mind. DNV is an independent globally renowned foundation 
                        with the objective of safeguarding life, property and the environment.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Full Load at Ambient Temperature up to 50°C
                    </div>
                    <p className='text-gray-500'>
                        Ideal for vessel engine rooms with no need for air conditioning.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Conformal Coating Option
                    </div>
                    <p className='text-gray-500'>
                        Provides additional protection of the PCB against moisture and dust.
                    </p>
                
                    <div className='text-blue-600 font-bold pt-6'>
                        RFI Filter Ensures Compatibility with IT Grids
                    </div>
                    <p className='text-gray-500'>
                        RFI filter ensures suitability for IT grids with no interference with ship systems.
                    </p>


                    <div className='text-blue-600 font-bold pt-6'>
                        Advanced Motor Control
                    </div>
                    <p className='text-gray-500'>
                        200% torque from zero speed.
                    </p>


                </div>
                <div className='md:w-1/2 md:px-5'>
                    <h1 className='text-indigo-500 font-bold text-xl'>
                        Rugged, robust drives designed for marine vessels
                    </h1>

                    <div className='text-blue-600 font-bold pt-6'>
                        Robust Design
                    </div>
                    <p className='text-gray-500'>
                        Ball bearing fans for long service life.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Low Harmonic Performance
                    </div>
                    <p className='text-gray-500'>
                        All variable speed drives can introduce harmonic currents to the onboard grid which can affect 
                        the performance of generators if not controlled. Optidrive maintains THD (Total Harmonic 
                        Distortion) below 30%, which means very low disturbance of the power supply without the need for
                        costly external line chokes.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Ease of Use
                    </div>
                    <p className='text-gray-500'>
                        Flexible integration and fast commissioning.
                    </p>
                    <ul className='text-gray-500'>
                        <li>Easy Integration with Vessel Systems</li>
                        <li>Flexible communication options.</li>
                    </ul>

                    <div className='text-blue-600 font-bold pt-6'>
                        Saving Energy / Reducing CO2
                    </div>
                    <p className='text-gray-500'>
                        With large scale increases in global energy costs and the introduction of taxes and legislation 
                        relating to the industrial production of CO2 gases, the need to reduce energy consumption and 
                        save money has never been greater. Optidrive can reduce energy consumption by up to 60% on 
                        critical applications on marine vessels.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Easy Installation
                    </div>
                    <p className='text-gray-500'>
                        Compact and modern design utilising the latest available technology has resulted in robust 
                        drives with small dimensions and innovative mounting and cabling features.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Simple and Rapid Commissioning
                    </div>
                    <p className='text-gray-500'>
                        14 parameter basic setup; default settings suitable for most applications and contactor style 
                        connection for simple wiring.
                    </p>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default MarineEquipmentControl;