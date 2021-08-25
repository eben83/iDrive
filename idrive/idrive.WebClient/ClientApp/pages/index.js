import Head from 'next/head'
import ImageSlider from "../components/imageSlider";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>I-Drive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='text-purple-600'>
          <ImageSlider />
          <div className='text-center pb-12'>
              <h1 className='text-3xl'>Specialising in</h1>
              <p className='text-l'>Motion Control Systems & Factory Automation</p>
          </div>
          <div className='pb-8'>
              <h1 className='text-3xl text-center pb-7'>We are suppliers of:</h1>
              <div className="flex items-center justify-center w-full">
                  <div className='w-4/12 flex flex-wrap justify-center'>
                      <p>Invertek Product Range of Motion Control Equipment</p>
                      <p>AC & DC Electric Motors</p>
                      <p> Geared Motors</p>
                      <p>Electric MCC’s Engineered to Customer Specifications</p>
                  </div>
              </div>
          </div>
          <div className='w-full bg-purple-600 h-32 flex justify-evenly items-center'>
              <img src='../images/85-odp2s-in v105 optidrive p2 solar pump brochure-u1609-fr.png' className='w-64' />
              <img src='../images/optidrive-e3-208x60-white-u1594-fr.png' className='w-40' />
              <img src='../images/optidrive-eco-84x45-white.png' className='w-32' />
              <img src='../images/optidrive-elevator-332x60-white-u1603-fr.png' className='w-64' />
              <img src='../images/optidrive-p2-219x60-white-u1612-fr.png' className='w-40' />
          </div>
          <div className='flex h-auto w-full justify-center'>
              <div className='w-1/3 m-6'>
                  <div className='relative w-full'>
                      <div className='absolute right-0' >
                          <div className='w-96'>
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
              <div className='w-1/3 m-6'>
                  <div className='flex justify-center align-center p-9'>
                      <img src='./images/iso-9001.png' alt='image' className='p-6'/>
                      <img src='./images/logo-dnv.jpg' alt='image' className='p-6'/>
                  </div>
                  <div className='h1 text-center'>
                      Invertek’s products are designed and manufactured in the UK to the quality and environmental 
                      management system principals of ISO9001 and ISO14001.
                  </div>
              </div>
          </div>
          <div className='flex h-auto w-full justify-center'>
              <div className='w-1/3 m-6'>
                  <div className='relative w-full'>
                      <div className='absolute right-0' >
                          <div className='bg-gray-300 rounded p-5 '>
                              <h1 className='text-xl text-black font-bold'>WORK DONE IN SOUTH AFRICA...</h1>
                              <h1 className='text-xl text-black font-bold'>WORK DONE IN AFRICA...</h1>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='w-1/3 m-6 relative'>
                  <img src='./images/bottom.png' alt='image' className='w-full'/>
                  <img src='./images/various combined.png' alt='image' className='w-11/12 absolute top-24'/>
              </div>
          </div>
          <div className='relative  w-full bg-purple-600 h-4 z-50' />
      </div>
    </div>
  )
}
