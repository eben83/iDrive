import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from "../components/scrollToTop"

const PumpControl = (props) => {
    return (
        <>
            <Nav />
            <div className='w-screen h-screen bg-fixed bg-left bg-top md:bg-center'
                 style={{backgroundImage: "url( "+ "/images/cover-1496178224.jpg" +" )"}}>
            </div>
            
            <div className='-mt-32'>
                <div className='bg-blue-600 text-white px-6 py-12'>
                    <div className='text-2xl'>
                        Pump Control
                    </div>
                    <p>
                        Energy efficient pumping with OptiFlow
                    </p>
                </div>
            </div>
            
            <div className='px-6 text-gray-500 mt-12 mb-12 md:flex lg:container lg:mx-auto'>
                <div className='md:w-1/2'>
                    <p className=''>
                        Dedicated pump control variable frequency drives from Invertek - providing unique technology for
                        energy efficient pump control for multiple pumps without the need for expensive PLCs or pump
                        controllers all in one device.
                    </p>
                    <ul className='list-disc pt-6'>
                        <li>Pumping stations</li>
                        <li>Manufacturing</li>
                        <li>Treatment plants</li>
                        <li>Car parks</li>
                    </ul>
                </div>
                <img src='./images/optidrive eco group 2d 3d 4n 5n (front).jpg' alt='eoc group' className='object-contain md:w-1/2' />
            </div>
            
            <div className='px-6 text-gray-500 mb-12 md:flex lg:container lg:mx-auto'>
                <div className='md:w-1/2 lg:-mt-24'>
                    <img src='./images/optidrive eco pump.png' alt='optidrive eco' />
                    <div className='pt-5 text-xl lg:px-12'>
                        The perfect solution for optimising the performance of pump systems.
                    </div>
                    <ul className='list-disc pt-6'>
                        <li>Optiflow technology</li>
                        <li>In-built PID controller</li>
                        <li>Pump staging cascade control</li>
                        <li>Pump blockage Detect / Clear</li>
                        <li>Broken pipe detection</li>
                    </ul>
                    
                </div>
                <div className='md:w-1/2'>
                    <div className='text-2xl pt-6 text-indigo-500'>
                        Avoid Pump Downtime
                    </div>
                    <p>
                        Flexible and efficient pump control across single and multiple pump configurations requires
                        a wide range of dedicated features in a variable speed drive.
                    </p>
                    <ul className='pt-6'>
                        <li>Pump blockage Detect / Clear</li>
                        <li>Dry run protection</li>
                        <li>Motor preheat function</li>
                        <li>Pump stir cycle</li>
                    </ul>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default PumpControl;