import React, {} from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from "../components/scrollToTop"

const Solar = (props) => {
    return (
        <>
            <Nav />

            <div className='w-screen h-screen bg-fixed bg-left bg-top md:bg-center bg-no-repeat bg-cover'
                 style={{backgroundImage: "url( "+ "/images/0072.jpg" +" )"}}>
            </div>

            <div className='-mt-32 relative'>
                <div className='bg-blue-400 text-white px-6 py-12'>
                    <div className='text-2xl '>
                        <p>
                            Solar
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
                    <img src='./images/optidrive p2.png' alt='Optidrive logo' />
                    <h1 className='text-indigo-500 font-bold text-xl'>
                        High Performance and Easy to Use
                    </h1>
                    <p className='pt-6'>
                        The perfect combination of high performance together with ease of use allows even the most 
                        demanding applications to be tackled easily by the P2 variable frequency drive.
                    </p>
                    <ul className='list-disc pt-6 text-gray-500'>
                        <li>Simple PLC functionality</li>
                        <li>Built-in EMC filter</li>
                        <li>Low ambient operation (-10°C)</li>
                        <li>Dedicated hoist mode</li>
                    </ul>
                    <h1 className='text-indigo-500 font-bold text-xl pt-6'>
                        150% overload for 60 seconds
                    </h1>
                    <h1 className='text-indigo-500 font-bold text-xl'>
                        200% overload for 4 seconds
                    </h1>
                    <p className='text-gray-500 pt-6'>
                        Industrial heavy duty rating for every model
                    </p>
                    <h1 className='text-indigo-500 font-bold text-2xl pt-6'>
                        Powerful, Versatile and Easy to Use
                    </h1>
                    <p className='text-gray-500 pt-6'>
                        Designed for fast installation and commissioning, P2 variable frequency drive provides the most 
                        cost effective solution for industry.
                    </p>
                    <p className='text-gray-500 pt-6'>
                        All Optidrive P2 units provide 150% overload for 60 seconds as standard, ensuring each drive is 
                        suitable for Heavy Duty applications, whilst the IP55 enclosed versions ensure the drive is 
                        tough enough to survive in industrial environments.
                    </p>
                    <p className='text-gray-500 pt-6'>
                        Extensive I/O and communications interface capabilities ensure the drive can be integrated 
                        quickly and efficiently into a wide variety of control systems with the minimum commissioning 
                        time, ensuring rapid start up. Invertek's simple parameter structure, and carefully selected 
                        factory parameter settings ensure that commissioning time is kept to a minimum.
                    </p>
                </div>
                <div className=' lg:w-2/3 lg:p-6'>
                    <h1 className='text-indigo-500 font-bold text-2xl pt-6 lg:pt-0'>
                        Advanced Motor Control
                    </h1>
                    <p className='text-gray-500 pt-6'>
                        The P2 Variable Frequency Drive has been uniquely developed to allow a wide range of different 
                        motor types to be used, with only parameter changes being required. This technology allows the 
                        same drive to be used in a wide range of applications, allowing OEM's and end user alike to take
                        advantage of the energy saving provided by using the latest motor technologies.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        AC Induction Motors
                    </div>
                    <p className='text-gray-500'>
                        The majority of AC motors in use today around the world are standard induction motors. These 
                        motors are relatively low cost, readily available and provide good performance with long service
                        life. With the ever increasing focus on energy efficiency, motor manufacturers have refined and 
                        improved their designs in recent years.
                    </p>
                    <p className='text-gray-500'>
                        Optidrive P2 has been developed to provide optimum control and maximum efficiency when operating
                        with older motors designs, or newer high efficiency designs.
                    </p>
                    <p className='text-gray-500'>
                        Operation can be in simple V/F control mode or in High Performance Third Generation Vector Mode,
                        which provides up to 200% torque from zero speed without requiring an encoder.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Permanent Magnet AC Motors
                    </div>
                    <p className='text-gray-500'>
                        Permanent magnet AC motors provide improved efficiency compared to standard induction motors. 
                        Using permanent magnets in the motor construction eliminates the need for any magnetising 
                        current, reducing electrical losses. PM motors have been used for many years in high performance
                        applications, however this has always required the use of a feedback device, such as a resolver 
                        or encoder. Optidrive P2 has been designed to operate with AC PM motors without requiring any 
                        feedback device, allowing them to be used for their energy efficiency benefits without incurring
                        extra cost and complexity in applications which do not require position feedback.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Brushless DC Motors
                    </div>
                    <p className='text-gray-500'>
                        BLDC motors are similar to AC PM motors, however the design requires a slightly different 
                        control method to optimise the performance. Optidrive P2 has the flexibility to control this 
                        type of motor, requiring only simple parameter changes. This provides much greater flexibility 
                        for OEM's, allowing Optidrive P2 to be used in a variety of applications, with various motor 
                        types.
                    </p>

                    <div className='text-blue-600 font-bold pt-6'>
                        Synchronous Reluctance Motors
                    </div>
                    <p className='text-gray-500'>
                        Synchronous Reluctance Motors (SynRM), not to be confused with Switched Reluctance Motors, share
                        a similar stator construction to standard induction motors, however the rotor is substantially 
                        different, in order to improve the overall efficiency of the motor. SynRM motors are ideally 
                        suited to variable torque applications.
                    </p>
                    <p className='text-gray-500'>
                        Optidrive P2 can control synchronous reluctance motors, allowing the energy saving benefits to 
                        be realised.
                    </p>
                </div>
            </div>
            
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default Solar;