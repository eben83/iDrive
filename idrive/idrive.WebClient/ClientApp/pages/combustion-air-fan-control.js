import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from "../components/scrollToTop"


const CombustionAirFanControl = (props) => {
    return (
        <>
            <Nav />

            <div className='w-screen h-screen bg-fixed bg-left bg-top md:bg-center bg-no-repeat bg-cover'
                 style={{backgroundImage: "url( "+ "/images/furnace-blower.jpg" +" )"}}>
            </div>

            <div className='-mt-32 relative'>
                <div className='bg-red-600 text-white px-6 py-12'>
                    <div className='text-2xl '>
                        <p>
                            Combustion Air Fan Control
                        </p>
                    </div>
                </div>
                <div className='h-40 w-80 absolute top-0 right-12 lg:right-32 flex justify-center items-center cursor-pointer invisible md:visible'>
                    <div className='w-auto h-auto text-3xl -mt-32'>
                        <img src='/images/various combined.png' alt='various combined' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center px-12 mt-12 mb-12 lg:flex-row lg:items-start lg:container lg:mx-auto'>
                <div className='flex flex-col text-gray-500 lg:w-1/3 lg:p-6'>
                    <h1 className='uppercase text-indigo-500 font-bold text-4xl'>
                        optidrive
                    </h1>
                    <p className='pt-6'>
                        Increasing fuel prices and stringent targets for CO2 emissions are prompting action to improve 
                        combustion efficiency. Installation of Optidrive™ variable speed drives to control combustion 
                        air fans can significantly reduce energy consumption.
                    </p>
                    <ul className='list-disc pt-6 text-gray-500'>
                        <li>Industrial Boilers & Ovens</li>
                        <li>Anodising</li>
                        <li>Crate Washing</li>
                        <li>Parts Washing</li>
                        <li>Car Production</li>
                        <li>Bottle Washing</li>
                        <li>Petro-chemical</li>
                        <li>Pharmaceutical</li>
                        <li>Rotational Moulding</li>
                        <li>Chemical Processes</li>
                        <li>Cleaning-in-Place (CIP)</li>
                    </ul>
                    <h1 className='text-indigo-500 font-bold text-2xl pt-6'>
                        Save Energy, Reduce Costs, Improve Safety
                    </h1>
                    <h1 className='text-indigo-500 font-bold text-2xl pt-6'>
                        Save Energy, Fuel & Money
                    </h1>
                    <p className='text-gray-500 pt-6'>
                        Simplified mechanical arrangement reduces wear
                        Prolonged motor life through reduced operating speed & load
                    </p>
                    <h1 className='text-indigo-500 font-bold text-2xl pt-6'>
                        Improved Safety
                    </h1>
                    <p className='text-gray-500 pt-6'>
                        Maintain Correct air / fuel ratio during changing operation
                        Reduced risk of CO creation
                        Improved control ensures the correct temperature setpoint is maintained more accurately
                    </p>
                </div>
                <div className=' lg:w-2/3 lg:p-6'>
                    <h1 className='text-indigo-500 font-bold text-2xl pt-6 lg:pt-0'>
                        Variable Speed Drives for Burner Applications
                    </h1>
                    <p className='text-gray-500 pt-6'>
                        Burners are widely used across many applications and industries to provide a controllable heat 
                        source. Traditional burners incorporate control systems utilising mechanical methods to control 
                        the amount of air and fuel supplied, and thus controlling heat output. These systems may be 
                        difficult to correctly commission and, through gradual wear over time, can result in an 
                        incorrect air / fuel ratio being used thus wasting energy and increasing operating costs.
                    </p>
                    <p className='text-gray-500 pt-6'>
                        Optidrive™ variable speed drives provide a cost effective, energy efficient method to directly 
                        control the air supply fan speed, negating the requirement for mechanical dampers and ensuring 
                        that the correct amount of air is supplied under all conditions. Controlling fan speed directly
                        provides the most energy efficient method, and allows the fuel ratio to also be adjusted in 
                        relation to air pressure, minimising mechanical linkages and ensuring that the correct air / 
                        fuel ratio is maintained throughout the burners operating life.
                    </p>
                    <p className='text-gray-500 pt-6'>
                        Using Optidrive™ also greatly improves burner safety, ensuring the burner operates within safe 
                        limits at all times. As a result, burner ownership costs are greatly reduced, and fuel is used 
                        efficiently throughout the burner operating lifetime.
                    </p>

                    <h1 className='text-indigo-500 font-bold text-2xl pt-6'>
                        Technology that pays for itself
                    </h1>

                    <div className='text-red-600 font-bold pt-6'>
                        Saving Energy / Reducing CO2
                    </div>
                    <p className='text-gray-500'>
                        With large scale increases in global energy costs and the introduction of taxes and legislation relating to the industrial production of CO2 gases the need to reduce energy consumption and save money has never been greater. Optidrive™ variable speed drives can be used with environmental sensors to reduce speed in burner applications without compromising the required output of the system.
                    </p>

                    <div className='text-red-600 font-bold pt-6'>
                        Easy Installation
                    </div>
                    <p className='text-gray-500'>
                        Compact and modern design utilising the latest available technology has accumulated in robust drives with small dimensions and innovative mounting and cabling features.
                    </p>

                    <div className='text-red-600 font-bold pt-6'>
                        Simple Commissioning
                    </div>
                    <p className='text-gray-500'>
                        14 parameter basic setup. Default settings suitable for most applications. Contactor style connection for simple wiring.
                    </p>

                    <div className='text-red-600 font-bold pt-6'>
                        Compact Enclosures
                    </div>
                    <p className='text-gray-500'>
                        Small mechanical envelopes to help minimise your space requirements.
                    </p>

                    <div className='text-red-600 font-bold pt-6'>
                        Industrial Ambient Ratings
                    </div>
                    <p className='text-gray-500'>
                        Up to 50°C operation.
                    </p>

                    <div className='text-red-600 font-bold pt-6'>
                        Easy Integration
                    </div>
                    <p className='text-gray-500'>
                        Flexible communication options.
                    </p>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default CombustionAirFanControl;