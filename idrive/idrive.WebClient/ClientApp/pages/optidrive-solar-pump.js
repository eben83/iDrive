import React, {} from 'react';
import Nav from '../components/nav'
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";

const OptidriveSolarPump = (props) => {
    return (
        <>
            <Nav />

            <div className='mt-24 mb-12 md:mt-32 px-5 md:flex lg:container lg:mx-auto xl:mt-40'>
                <div className='md:w-1/2'>
                    <img src='./images/optidrive solar.png' alt='optidrive e3 logo' />
                    <div>
                        <h1 className='text-indigo-500 pt-5 font-bold'>
                            Dedicated AC Drive for pumping applications isolated from the
                            commercial grid using photovoltaic arrays (PV)
                        </h1>
                    </div>
                </div>
                <div className='mt-12 md:mt-0 md:w-1/2 text-center md:text-xs'>
                    <div className='md:flex '>
                        <img src='./images/optidrive-p2-v2.jpg' alt='optidrive e3' className='pt-5 md:flex md:items-center md:object-contain'/>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-indigo-500 font-bold '>
                                Extended DC Operative
                            </h1>
                            <ul className='text-gray-500 '>
                                <li>345-800 VDC HV</li>
                                <li>185-410 VDC LV</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bg-indigo-500 text-white text-center px-6 pt-12 pb-12 md:px-12 '>
                <div className='lg:container lg:mx-auto'>
                    <div className='text-2xl font-bold'>
                        Key Features
                    </div>
                    <ul className='list-disc' >
                        <li className='pt-6'>
                            Maximum power point tracking (MPPT) algorithm continuously adapts the system load for maximum system output power under varying conditions of irradiance and temperature. MPPT
                            is the best choice for getting the maximum pumping delivery from your PV array under all conditions.
                        </li>
                        <li className='pt-6'>
                            Extended DC operative voltage range, 345–800Vdc HV, 185–410Vdc LV which increases the system
                            operational time per day and reducing unnecessary stoppages caused by the low array
                            voltages present during dawn and dusk.
                        </li>
                        <li className='pt-6'>
                            Advanced PI set up built in dual PI set point, dead-band and PI transition error, creating very
                            stable system control that responds slowly to small changes in irradiance but responds quickly to
                            large changes in solar irradiance.
                        </li>
                        <li className='pt-6'>
                            Advanced pump protection functions, dry run protection, pipe-burst detection, pump clean
                            function and pump stir function. These protection functions are designed for a reliable system
                            whilst reducing the risk of damage to the pump.
                        </li>
                        <li className='pt-6'>
                            Pipe-Fill function, allows a configurable period for the pipe to fill slowly before operating
                            normally and pipe-burst detection can be activated.
                        </li>
                        <li className='pt-6'>
                            Remote monitoring. All data can be accessed using Modbus RTU or CANopen communications on board
                            or Ethernet pluggable option modules.
                        </li>
                        <li className='pt-6'>
                            3 different methods for PID Sleep and wake up. An optional external irradiance sensor could be
                            selected to re-start the pump when sufficient energy is available from the sun.
                        </li>
                        <li className='pt-6'>
                            Dual supply mode. The P2 Solar pump can be powered by a DC voltage coming from PV arrays or the
                            traditional commercial grid.
                        </li>
                        <li className='pt-6'>
                            PLC integrated to customize the more demanding applications where the user may need to control
                            for example, valve actuators or monitor system water pressure to stop the drive above defined
                            limits. The on-board PLC provides a high degree of flexibility.
                        </li>
                        <li className='pt-6'>
                            Compatibility with all types of motors, the P2 Solar Pump is compatible with AC induction
                            motors, Permanent Magnet (PM) motors, Synchronous Reluctance (SynRM) motors, Brushless DC
                            (BLDC) motors.
                        </li>
                        <li className='pt-6'>
                            Digital inputs for tank high water level and well low water detection, forcing the drive to stop
                            when the destination tank is full or the water well is empty.
                        </li>
                        <li className='pt-6'>
                            Second analog input for pressure monitoring, this can be used just to monitor system pressure
                            locally or remotely or to stop the pump if the water pressure exceeds a configured level.
                        </li>
                        <li className='pt-6'>
                            Irradiance level can be monitored on the drive display
                        </li>
                        <li className='pt-6'>
                            Optional Sine-Wave filters
                        </li>
                        <li className='pt-6'>
                            Available in different IP enclosures IP20, IP55, IP66
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='pt-20 pb-20 px-6 lg:container lg:mx-auto'>
                <div className='flex flex-col items-center'>
                    <div className='text-indigo-500 font-bold'>
                        Applications:
                    </div>
                    <p className='text-center pt-4'>
                        Watering, irrigation, agriculture, swimming pools,
                        water supplies, water treatment and others 
                    </p>
                </div>
                <div className=' flex flex-col items-center pt-6 md:flex-row md:justify-evenly'>
                    <p className='text-center md:w-1/3'>
                        Maximum power point tracking
                        (MPPT) algorithm significantly boosts
                        system efficiency
                    </p>
                    <ul className='text-center pt-6 md:w-1/3'>
                        <li>
                            Extended DC operative
                        </li>
                        <li>
                            Voltage range
                        </li>
                        <li>
                            345-800Vdc HV
                        </li>
                        <li>
                            185-410Vdc LV
                        </li>
                    </ul>
                    <p className='text-center pt-6 md:w-1/3'>
                        Advanced PI set up, built in dual PI set point,
                        dead-band and PI transition error
                    </p>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default OptidriveSolarPump;