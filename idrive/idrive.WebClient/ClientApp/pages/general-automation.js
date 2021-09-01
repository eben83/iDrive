import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from "../components/scrollToTop"
import Link from 'next/link'

const GenaralAutomation = (props) => {
    return (
        <>
            <Nav />
            <div className='w-screen h-screen bg-fixed bg-left bg-top md:bg-center bg-no-repeat bg-cover'
                 style={{backgroundImage: "url( "+ "/images/coal-mining-site-za-hero.jpg" +" )"}}>
            </div>

            <div className='-mt-32'>
                <div className='bg-purple-600 text-white px-6 py-12'>
                    <h1 className='text-2xl'>
                        General Automation
                    </h1>
                    <p>
                        Precise motor control
                    </p>
                </div>
            </div>
            
            <div className='mt-12 px-6 lg:container text-gray-500 lg:mx-auto'>
                <p>
                    Invertek Drives provide compact, easy to use variable frequency drives for a massive range of 
                    automation applications. From World class motor control in applications such as cranes and winding; 
                    to dust proof and wash-down duty enclosed drives for arduous environments; to general purpose drives
                    providing highly cost effective solutions for low power applications.
                </p>
                <ul className='list-disc mt-12 mb-6'>
                    <li>Mining</li>
                    <li>Quarrying</li>
                    <li>Metal Processing</li>
                    <li>Rubber & Plastics</li>
                    <li>Food & Beverages</li>
                    <li>Baggage Handling</li>
                    <li>Textile Processes</li>
                    <li>Agriculture</li>
                </ul>
            </div>
            
            <div className='flex flex-col mt-12 mb-12 md:flex-row lg:container lg:mx-auto'>
                <div className='md:w-1/2'>
                    <div className=' w-full flex flex-col lg:flex-row items-center'>
                        <img src='./images/ip66-2x-3q_right.jpg' alt='ip66' />
                        <div className='flex flex-col px-6'>
                            <img src='./images/optidrive e3.png' alt='optidrive logo' />
                            <p className='text-gray-500'>
                                General purpose variable speed frequency drive, dedicated to low power applications.
                            </p>
                            <ul className='list-disc pt-6 text-gray-500'>
                                <li>Integral RFI filter</li>
                                <li>Compact IP20 & IP66 enclosures</li>
                            </ul>
                            <Link href='/optidrive-e3'>
                                <div className='text-indigo-500 font-bold text-xl pt-6 cursor-pointer'>
                                    E3 Variable Frequency Drive
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 mt-12 md:mt-0'>
                    <div className=' w-full flex flex-col lg:flex-row items-center'>
                        <img src='./images/ip66-2x-3q_right.jpg' alt='ip66' />
                        <div className='flex flex-col md:justify-start px-6'>
                            <img src='./images/optidrive p2.png' alt='optidrive logo' />
                            <p className='text-gray-500'>
                                High performance control for the latest generation of permanent magnet and standard 
                                induction motors.
                            </p>
                            <Link href='/optidrive-p2'>
                                <div className='text-indigo-500 font-bold text-xl pt-6 cursor-pointer'>
                                    P2 Variable Frequency Drive
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default GenaralAutomation;