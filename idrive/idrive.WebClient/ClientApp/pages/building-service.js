import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from "../components/scrollToTop"
import Link from 'next/link'


const BuildingService = (props) => {
    return (
        <>
            <Nav />
            <div className='w-screen h-screen bg-fixed bg-left bg-top md:bg-center bg-no-repeat bg-cover'
                 style={{backgroundImage: "url( "+ "/images/dsc_0007_c_02.jpg" +" )"}}>
            </div>

            <div className='-mt-32 relative'>
                <div className='bg-green-600 text-white px-6 py-12'>
                    <div className='text-2xl '>
                        <p>Building Services</p>
                    </div>
                    <p>
                        Energy efficient fan and pump control
                    </p>
                    
                </div>
                <Link href='/'>
                    <div className='h-40 w-80 bg-white absolute top-0 right-32 flex justify-center items-center cursor-pointer'>
                        <div className='w-auto h-auto text-3xl'>
                            Building Automation
                        </div>
                    </div>
                </Link>
            </div>

            <div className='px-6 text-gray-500 mt-12 mb-12 md:flex lg:container lg:mx-auto'>
                <div className='md:w-1/2'>
                    <p>
                        Invertek Drives provides innovative, easy to use variable frequency drives for the energy 
                        efficient maintenance of environments within buildings. Eco variable frequency drive has been 
                        specifically designed to deliver improved performance, control and energy savings in fan and 
                        pump applications in building services.
                    </p>
                    <p className=''>
                        Take control of your environment with Eco Variable Frequency Drive.
                    </p>
                    <ul className='list-disc pt-6'>
                        <li>Airports</li>
                        <li>Hospitals</li>
                        <li>Hotels</li>
                        <li>Apartment buildings</li>
                        <li>Shopping centres</li>
                        <li>Offices</li>
                        <li>Conference centres</li>
                        <li>Kitchens</li>
                        <li>Schools</li>
                        <li>Laboratories</li>
                    </ul>
                </div>
                <img src='./images/optidrive eco group 2d 3d 4n 5n (front).jpg' alt='eoc group' className='object-contain md:w-1/2' />
            </div>

            <div className='px-6 text-gray-500 mb-12 md:flex lg:container lg:mx-auto'>
                <div className='md:w-1/2 lg:-mt-24'>
                    <img src='./images/optidrive eco pump.png' alt='optidrive eco' />
                    <div className='pt-5 text-xl lg:px-12'>
                        The perfect solution for optimising the performance of fans and pumps used in HVAC applications.
                    </div>
                    <ul className='list-disc pt-6'>
                        <li>BACnet and Modbus RTU on board as standard</li>
                        <li>Energy optimisation</li>
                        <li>Noise reduction</li>
                        <li>Fire override mode</li>
                        <li>Multiple fan operation</li>
                    </ul>

                </div>
                <div className='md:w-1/2'>
                    <Link href='/'>
                        <div className='text-2xl pt-6 text-indigo-500 cursor-pointer'>
                            Building Safty Systems
                        </div>
                    </Link>
                    <p>
                        Building services require a range of specific drive features to ensure that safe and comfortable
                        environments can be maintained in a reliable and cost effective manner.
                    </p>
                    <ul className='pt-6'>
                        <li>Stairwell pressurisation</li>
                        <li>Smoke and fume extraction</li>
                        <li>Fire override</li>
                    </ul>
                </div>
            </div>

            <Footer />
            <ScrollToTop />
        </>
    );
}
export default BuildingService;