import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'

const OptidriveElevator = (props) => {
    return (
        <>
            <Nav />

            <div className='mt-24 md:mt-32 px-5 md:flex lg:container lg:mx-auto xl:mt-40 z-50 lg:container lg:mx-auto mb-12'>
                <div className='md:w-1/2 md:p-5'>
                    <img src='./images/optidrive elevator2.png' alt='optidrive p2 logo' />
                    <div>
                        <h1 className='text-indigo-500 pt-5 font-bold'>
                            Dedicated Elevator Drive
                        </h1>
                        <div className='items-center mt-12 text-center md:text-left md:flex md:items-start '>
                            <div className='md:px-2 pt-3 md:pt-0'>
                                <p className='w-full text-gray-500'>
                                    The Elevator Variable Frequency Drive is the 2nd generation dedicated elevator drive
                                    from Invertek Drives, designed to provide smooth, reliable carriage control in all 
                                    elevator applications.
                                </p>
                                <p className='w-full text-gray-500 pt-4'>
                                    The compact external dimensions simplify installation, whilst optional 
                                    incremental/EnDat encoder feedback interfaces allow compatibility with a wide range 
                                    of motors.
                                </p>
                                <p className='w-full text-gray-500 pt-4'>
                                    Invertek's renowned motor control capability ensures maximum ride comfort under all 
                                    conditions, with five independent S-ramps and dedicated motor holding brake control 
                                    algorithm allowing fine tuning of the system.
                                </p>
                                <p className='w-full text-gray-500 pt-4'>
                                    Elevator Variable Frequency Drive also incorporates Safe Torque Off* as standard, 
                                    and a range of features including Rescue Mode.
                                </p>
                                <ul className='list-disc list-inner text-sm text-gray-500 pt-4'>
                                    <li>5 independent S-ramps for smooth carriage control</li>
                                    <li>Control of IM and PM motors</li>
                                    <li>Rescue mode operation</li>
                                    <li>Built-in EMC filter</li>
                                    <li>Advanced on-board features</li>
                                    <li>Easy to use</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 mb-12 md:mt-0 md:w-1/2 text-center md:text-xs md:text-left md:flex md:items-center md:p-5'>
                    <div>
                        <h1 className='text-indigo-500 font-bold '>
                            Compact Elevator Drive
                        </h1>
                        <ul className='text-gray-500 pt-5'>
                            <li>4 - 37 kW  /  5 - 50 HP</li>
                            <li>200 - 480V 3 Phase Input</li>
                        </ul>
                        <img src='./images/plp-24426-042.jpg
                        ' alt='optidrive e3' className='pt-5 md:flex md:items-center md:h-auto md:object-contain'/>
                    </div>
                </div>
            </div>

            <div className='w-screen bg-indigo-400 h-px z-40 lg:container lg:mx-auto' />

            <div className='lg:container lg:mx-auto pt-12 pb-12 px-4 w-screen'>
                <div className='font-bold text-2xl text-indigo-500 h1 text-center'>
                    Elevator Variable Frequency Drive Features
                </div>
                <div className='flex justify-center w-full text-center pt-5 text-gray-500'>
                    <p className='w-full md:w-1/2 md:px-0'>
                        Smooth & reliable elevator control with variable frequency
                    </p>
                </div>
            </div>

            <div className='lg:container lg:mx-auto lg:flex lg:flex-row-reverse pb-12'>
                <img src='./images/optidrive-elevator-features.jpg' alt='p3 features' />
                <div className='flex justify-center px-4 flex-wrap text-center lg:text-left lg:flex-col '>
                    <div className='mt-6 mb-6 w-1/2 lg:w-max'>
                        <div className='text-indigo-500 text-3xl font-bold '>IP20</div>
                        <p className='text-gray-500'>
                            Sizes 2-3; up to 11kW
                        </p>
                    </div>
                    <div className='mt-6 mb-6 w-1/2 lg:w-max'>
                        <div className='text-indigo-500 text-3xl font-bold '>IP55</div>
                        <p className='text-gray-500'>
                            Sizes 4-5; up to 37kW
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 mb-24'>
                <div className='lg:container lg:mx-auto'>
                    <div className='flex flex-col text-center md:flex-row md:flex-wrap md:text-left md:flex-row md:w-full md:justify-evenly mt-12 px-6'>
                        <div className='md:w-1/2 md:px-7 pt-6 pb-6 lg:w-1/4'>
                            <div className='h1 font-bold text-indigo-500'>
                                Flexibility
                            </div>
                            <ul className='text-gray-400 list-disc '>
                                <li>Control of IM and PM motors in a single
                                    product, geared or gearless systems</li>
                                <li>Open loop or Closed loop vector (with
                                    incremental encoder) control of standard IM
                                    motors</li>
                                <li>Open loop or Closed loop (with incremental/
                                    EnDat encoder) control of PM motors</li>
                            </ul>
                        </div>
                        <div className='md:w-1/2 md:px-7 pt-6 pb-6 lg:w-1/4'>
                            <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                                Comfortable Ride
                            </div>
                            <ul className='text-gray-400 list-disc '>
                                <li>Includes 5 independent S-Ramps allowing fine
                                    tuning of ride performance and jerk free
                                    travel</li>
                                <li>Short floor operation reduces carriage travel
                                    time</li>
                                <li>High motor switching frequency (max 32kHz)
                                    for quiet motor operation</li>
                                <li>Swimming Pools</li>
                                <li>Dedicated motor brake control algorithm for
                                    safe and smooth operation of the motor brake </li>
                            </ul>
                        </div>
                        <div className='md:w-1/2 md:px-7 pt-6 pb-6 lg:w-1/4'>
                            <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                                Advanced Features
                            </div>
                            <ul className='text-gray-400 list-disc '>
                                <li>Anti-Rollback (With Encoder).</li>
                                <li>Rescue mode operation possible with external</li>
                                <li>UPS</li>
                                <li>On-board simple PLC function allows custom
                                    application programs to be written and
                                    interfacing with a wide variety of control
                                    systems</li>
                                <li>Modbus RTU and CANopen as standard</li>
                                <li>
                                    Full load operation up to 50ºC with no de-
                                    rating
                                </li>
                                <li>Safe Torque Off function (TUV Approved) built
                                    in as standard</li>
                                <li>Output contactor control for SIL 3 compliance</li>
                            </ul>
                        </div>
                        <div className='md:w-1/2 md:px-7 pt-6 pb-6 lg:w-1/4'>
                            <div className='h1 font-bold text-indigo-500 pt-6 md:pt-0'>
                                Easy to Use
                            </div>
                            <ul className='text-gray-400 list-disc list-inside'>
                                <li>Dedicated elevator drive with logical
                                    parameter and function groups</li>
                                <li>Factory parameter settings suited to simple
                                    elevator applications for fast start up</li>
                                <li>Drive setup using familiar elevator units</li>
                                <li>Standstill motor autotune – no shaft rotation –
                                    no rope removal required</li>
                                <li>Wireless parameterisation (Using Optistick
                                    with OptiTools Studio)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default OptidriveElevator;