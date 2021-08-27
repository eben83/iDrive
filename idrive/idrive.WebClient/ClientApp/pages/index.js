import Head from 'next/head'
import ImageSlider from "../components/imageSlider";
import ContactUsForm from "../components/ContactUsForm";
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>I-Drive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='text-indigo-500 overflow-x-hidden'>
          <Nav />
          <ImageSlider />
          <div className='text-center pb-12 pt-12 md:pt-0'>
              <h1 className='text-3xl'>Specialising in</h1>
              <p className='text-l'>Motion Control Systems & Factory Automation</p>
          </div>
          <div className='pb-8'>
              <h1 className='text-3xl text-center pb-7'>We are suppliers of:</h1>
              <div className="flex items-center justify-center w-full">
                  <div className='w-full sm:text-center md:w-4/12 flex flex-wrap justify-center'>
                      <p className='text-center'>Invertek Product Range of Motion Control Equipment</p>
                      <p className='text-center'>AC & DC Electric Motors</p>
                      <p className='text-center'>Geared Motors</p>
                      <p className='text-center'>Electric MCC’s Engineered to Customer Specifications</p>
                  </div>
              </div>
          </div>
          <div className='bg-indigo-500 flex flex-col h-auto w-full items-center pt-5 pb-5 lg:flex-row lg:justify-evenly'>
              <img src='../images/85-odp2s-in v105 optidrive p2 solar pump brochure-u1609-fr.png' className='w-64 lg:pt-2' />
              <img src='../images/optidrive-e3-208x60-white-u1594-fr.png' className='w-40' />
              <img src='../images/optidrive-eco-84x45-white.png' className='w-32' />
              <img src='../images/optidrive-elevator-332x60-white-u1603-fr.png' className='w-64' />
              <img src='../images/optidrive-p2-219x60-white-u1612-fr.png' className='w-40' />
          </div>
          <div className='flex flex-col w-full justify-center md:flex-row md:h-auto' id='about'>
              <div className='md:w-1/2 md:m-6'>
                  <div className='md:relative md:w-full'>
                      <div className='p-5 md:absolute md:right-0' >
                          <div className='lg:w-96'>
                              <h1 className='pb-10 text-2xl'>About I-Drive SA</h1>
                              <p className='pb-6 text-gray-500'>
                                  As a responsible organisation, Invertek Drives manufacturer of variable frequency drives is
                                  committed to operating in a way that minimises potential harm to the environment, whilst ensuring
                                  the business has the potential to succeed.
                              </p>
                              <p className='text-gray-500'>
                                  Invertek Drives has secured ISO 14001 accreditation for its Environmental Management System (EMS),
                                  an internationally accepted standard designed to address the delicate balance between maintaining
                                  profitability and reducing environmental impact.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='w-full md:w-1/2 md:m-6'>
                  <div className='flex justify-center align-center p-9'>
                      <img src='./images/iso-9001.png' alt='image' className='p-6 object-contain'/>
                      <img src='./images/logo-dnv.jpg' alt='image' className='p-6'/>
                  </div>
                  <div className='h1 text-center text-xl p-5 md:p-0 xl:p-12'>
                      Invertek’s products are designed and manufactured in the UK to the quality and environmental 
                      management system principals of ISO9001 and ISO14001.
                  </div>
              </div>
          </div>
          <div className='flex flex-col h-auto w-full justify-center md:flex-row md:mt-12'>
              <div className='w-full p-5 text-center md:w-1/3 md:m-6'>
                  <div className='md:relative md:w-full'>
                      <div className='md:absolute md:right-0' >
                          <div className='bg-gray-300 rounded p-5 '>
                              <h1 className='text-xl text-black font-bold'>WORK DONE IN SOUTH AFRICA...</h1>
                              <h1 className='text-xl text-black font-bold'>WORK DONE IN AFRICA...</h1>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='w-full md:w-1/3 md:m-6 relative'>
                  <img src='./images/bottom.png' alt='image' className='w-full'/>
                  <img src='./images/various combined.png' alt='image' className='w-9/12 absolute top-24 left-10 right-10 md:top-12'/>
              </div>
          </div>
          <div className='relative w-full bg-indigo-500 h-4 z-40' />
          <div className='mt-32 mb-32'>
              <div className='text-center'>
                  <h1 className='text-2xl'>Contact us</h1>
                  <p className='text-gray-400 px-5'>
                      Please fill in the form below for any enquiries
                  </p>
                  <p className='text-gray-400'>
                      or give as a call on one of the numbers below.
                  </p>
              </div>
              <ContactUsForm />
          </div>
          
          <Footer />
      </div>
    </div>
  )
}
